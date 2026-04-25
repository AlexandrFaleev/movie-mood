import {Filters} from "../Filters/Filters.jsx";
import {MoviesList} from "../MoviesList/MoviesList.jsx";
import {AddMovieButton} from "../AddMovieButton/AddMovieButton.jsx";
import {AddMovieModal} from "../AddMovieModal/AddMovieModal.jsx";
import {useContext} from "react";
import {MoodMovieContext} from "../../context/MoodMovieContext.jsx";
import './MoodMovies.css';

export const MoodMovies = () => {
    const {
        modalOpen
    } = useContext(MoodMovieContext)

    return (
        <div className="layout">
            <div className="mood-movies">
                <h1 className="mood-movies__title">
                    🍿 Mood Movies 🍿
                </h1>
                <Filters />
                <AddMovieButton />
                <MoviesList  />
                {modalOpen && <AddMovieModal />}
            </div>
        </div>
    )
}