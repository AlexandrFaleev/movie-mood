import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MoodMoviesAPI from "../api/MoodMoviesAPI.js";
import './../components/MoodMovies/MoodMovies.css';

export const DetailPage = () => {
    const {id} = useParams();
    const [movieData, setMovieData] = useState({
        title: '',
        desc: ''
    })

    useEffect(() => {
        MoodMoviesAPI.getItem(id).then(setMovieData)
    }, []);

    return (
        <div className="layout">

            <div className="mood-movies">
                <Link to="/">
                    &lt; Назад
                </Link>
                <h1 className="mood-movies__title">
                    {movieData.title}
                </h1>
                <p>
                    {movieData.desc}
                </p>
            </div>
        </div>
    )
}