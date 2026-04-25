import './AddMovieButton.css'
import {useContext} from "react";
import {MoodMovieContext} from "../../context/MoodMovieContext.jsx";

export const AddMovieButton = () => {
    const {
        setModalOpen
    } = useContext(MoodMovieContext)
    return (
        <button
            type="button"
            className="mood-movies__add-button"
            title="Добавить фильм"
            onClick={() => setModalOpen(true)}
        >
            <span></span>
            <span></span>
        </button>
    )
}