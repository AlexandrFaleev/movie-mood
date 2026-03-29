import './AddMovieButton.css'

export const AddMovieButton = ({onClick}) => {
    return (
        <button
            type="button"
            className="mood-movies__add-button"
            title="Добавить фильм"
            onClick={onClick}
        >
            <span></span>
            <span></span>
        </button>
    )
}