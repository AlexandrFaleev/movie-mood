import {useEffect, useState} from "react";
import {Filters} from "../Filters/Filters.jsx";
import {MoviesList} from "../MoviesList/MoviesList.jsx";
import './MoodMovies.css';
import {useStorage} from "../../hooks/usetorage.js";
import {AddMovieButton} from "../AddMovieButton/AddMovieButton.jsx";
import {AddMovieModal} from "../AddMovieModal/AddMovieModal.jsx";

export const MoodMovies = () => {
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
        setMovies(movies.filter(movie => movie.id !== id))
    }

    const onStatusChange = (id) => {
        setMovies(movies.map(movie => {
            if(movie.id === id){
                return {...movie, hasWatched: !movie.hasWatched}
            }

            return movie
        }))
    }

    const onCloseButtonClick = () => {
        setModalOpen(false)
    }

    const onAddNewMovie = (data) => {
        if(data.title.trim().length !== 0 && data.mood !== ''){
            const newMovie = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                ...data,
                hasWatched: false
            }
            setMovies([...movies, newMovie])
            setModalOpen(false)
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
        useStorage.saveMovies(movies)
    }, [movies])

    return (
        <div className="layout">
            <div className="mood-movies">
                <h1 className="mood-movies__title">
                    🍿 Mood Movies 🍿
                </h1>
                <Filters
                    filters = {filtersList}
                    searchFilmName={searchFilmName}
                    onSearchFilmInput={onSearchFilmInput}
                    selectedFilter={selectedFilter}
                    onFilterClick={onFilterClick}
                />
                <AddMovieButton
                    onClick={() => setModalOpen(!modalOpen)}
                />
                <MoviesList
                    movies={movies}
                    filteredMovies={filteredMovies}
                    onDeleteButtonClick={onDeleteButtonClick}
                    onStatusChange={onStatusChange}
                />
                {modalOpen && <AddMovieModal
                    onCloseButtonClick={onCloseButtonClick}
                    onAddNewMovie={onAddNewMovie}
                    filtersList={filtersList}
                />}
            </div>
        </div>
    )
}