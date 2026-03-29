import {Field} from "../Field/Field.jsx";
import './Filters.css';

export const Filters = (props) => {
    const {
        filters,
        searchFilmName,
        onSearchFilmInput,
        selectedFilter,
        onFilterClick
    } = props

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
                {filters.map(item => (
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