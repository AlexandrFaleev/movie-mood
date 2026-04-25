import {Field} from "../Field/Field.jsx";
import {useContext, useState} from "react";
import './AddMovieModal.css'
import {MoodMovieContext} from "../../context/MoodMovieContext.jsx";

export const AddMovieModal = () => {
    const {
        onCloseButtonClick,
        onAddNewMovie,
        filtersList
    } = useContext(MoodMovieContext)

    const [formData, setFormData] = useState({
        title: '',
        mood: '',
        desc: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <div className="mood-movies__modal">
            <form className="mood-movies__form" onSubmit={(e) => {
                e.preventDefault()
                onAddNewMovie(formData)}
            }>
                <button
                    type="button"
                    onClick={onCloseButtonClick}
                    className="form__close-btn"
                >
                    <span></span>
                    <span></span>
                </button>
                <h2 className="form__title">Добавление фильма</h2>
                <Field
                    name="title"
                    id="new-movie"
                    title="Название фильма"
                    value={formData.title}
                    onInput={handleChange}
                />
                <select
                    name="mood"
                    onChange={handleChange}
                    className="form__selection"
                >
                    <option value="">Выберите эмоцию</option>
                    {filtersList.map(filter => filter.mood !== 'all' && (
                        <option key={filter.mood} value={filter.mood}>
                            {filter.title}
                        </option>
                    ))}
                </select>
                <div
                    className="form__description"
                >
                    <label
                        htmlFor="film-desc"
                        className="description__label"
                    >
                        Описание:
                    </label>
                    <textarea
                        id="film-desc"
                        name="desc"
                        className="description__textarea"
                        onChange={handleChange}
                        placeholder=" "
                        rows="5"
                    />
                </div>
                <button
                    type="submit"
                    className="form__add-movie-button"
                >
                    Добавить
                </button>
            </form>
        </div>
    )
}