import './MoviesList.css';
import {MovieItem} from "../MovieItem/MovieItem.jsx";
import {useContext} from "react";
import {MoodMovieContext} from "../../context/MoodMovieContext.jsx";
import { Link } from "react-router-dom";


export const MoviesList = () => {
    const {
        movies,
        filteredMovies,
        onDeleteButtonClick,
        onStatusChange
    } = useContext(MoodMovieContext)

    if(movies.length === 0) return <h2 className="mood-movies__empty-message">Вы еще не добавляли фильмы</h2>

    if(filteredMovies?.length === 0) return <h2 className="mood-movies__empty-message">Не найдены фильмы по заданным критериям</h2>


    return (
        <ul className="mood-movies__list">
            {(filteredMovies ?? movies).map((movie) => (
                <MovieItem
                    key={movie.id}
                    id={movie.id}
                    className="mood-movies__item"
                    title={movie.title}
                    hasWatched={movie.hasWatched}
                    onDeleteButtonClick={onDeleteButtonClick}
                    onStatusChange={onStatusChange}
                />
            ))}
        </ul>
    )
}