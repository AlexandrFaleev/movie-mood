import {useEffect, useState} from "react";
import {useStorage} from "./usetorage.js";
import MoodMoviesAPI from "../api/MoodMoviesAPI.js";

const useMovies = () => {
    const filtersList = [
        {mood: 'all', title: 'Все'},
        {mood: 'sad', title: '😢Грустное'},
        {mood: 'funny', title: '😂Веселое'},
        {mood: 'interesting', title: '🤔Увлекательное'},
        {mood: 'scary', title: '😓Страшное'},
    ]
    const [movies, setMovies] = useState(() => useStorage.getMovies())
    const [selectedFilter, setSelectedFilter] = useState("all")
    const [searchFilmName, setSearchFilmName] = useState('')
    const [modalOpen, setModalOpen] = useState(false)

    const onSearchFilmInput = ({target}) => {
        setSearchFilmName(target.value)
    }

    const onFilterClick = ({target}) => {
        setSelectedFilter(target.id)
    }

    const onDeleteButtonClick = (id) => {
        //setMovies(movies.filter(movie => movie.id !== id))
        MoodMoviesAPI.deleteItem(id).then(() => {
            setMovies(
                movies.filter(movie => movie.id !== id)
            )
        })
    }

    const onStatusChange = (id, hasWatched) => {
        /*setMovies(movies.map(movie => {
            if(movie.id === id){
                return {...movie, hasWatched: !movie.hasWatched}
            }

            return movie
        }))*/

        MoodMoviesAPI.toggleMovieWatched(id, hasWatched).then(() => {
            setMovies(
                movies.map((movie) => {
                    if(movie.id === id){
                        return {...movie, hasWatched: !movie.hasWatched}
                    }

                    return movie
                })
            )
        })
    }

    const onCloseButtonClick = () => {
        setModalOpen(false)
    }

    const onAddNewMovie = (data) => {
        if(data.title.trim().length !== 0 && data.mood !== ''){
            const newMovie = {
                //id: crypto?.randomUUID() ?? Date.now().toString(),
                ...data,
                hasWatched: false
            }
            MoodMoviesAPI.addItem(newMovie).then((addedMovie) => {
                setMovies((prevMovies) => [...prevMovies, addedMovie])
                setModalOpen(false)
            })
        } else {
            alert('Вы не заполнили поля!')
        }
    }

    const filteredMovies =  searchFilmName.trim().length > 0 || selectedFilter !== 'all'
        ? movies.filter(item => {
            if(searchFilmName.trim().length > 0){
                return item.title.trim().toLowerCase().includes(searchFilmName.trim().toLowerCase())
            }
            return item
        }).filter(item => {
            if(selectedFilter !== 'all'){
                return item.mood === selectedFilter
            }
            return item
        }) : null

    useEffect(() => {
        MoodMoviesAPI.getAll().then(setMovies)
    }, [movies])

    return {
        filtersList,
        movies,
        modalOpen,
        searchFilmName,
        filteredMovies,
        selectedFilter,
        onDeleteButtonClick,
        onStatusChange,
        onCloseButtonClick,
        onAddNewMovie,
        onSearchFilmInput,
        onFilterClick,
        setModalOpen
    }
}

export default useMovies;