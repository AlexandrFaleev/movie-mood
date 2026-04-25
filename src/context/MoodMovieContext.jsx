import { createContext } from "react";
import useMovies from "../hooks/useMovies.js";

export const MoodMovieContext = createContext({})

export const MoodMoviesProvider = ({children}) => {
    const {
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
    } = useMovies()

    return(
        <MoodMovieContext.Provider
            value={{
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
            }}
        >
            {children}
        </MoodMovieContext.Provider>
    )
}