import {Field} from "../Field/Field.jsx";
import './Filters.css';
import {useContext} from "react";
import {MoodMovieContext} from "../../context/MoodMovieContext.jsx";

export const Filters = () => {
    const {
        filtersList,
        searchFilmName,
        onSearchFilmInput,
        selectedFilter,
        onFilterClick
    } = useContext(MoodMovieContext)

    return (
        <div className="mood-movies__filters">
            <Field
                id="search-movie"
                className="filters__search-field"
                type="search"
                title="Найти фильм"
                value={searchFilmName}
                onInput={onSearchFilmInput}
            />
            <div className="filters__list">
                {filtersList.map(item => (
                    <button
                        id={item.mood}
                        key={item.mood}
                        className={`filter__item${item.mood === selectedFilter ? ' selected' : ''}`}
                        onClick={onFilterClick}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    )
}