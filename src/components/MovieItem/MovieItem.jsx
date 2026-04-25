import './MovieItem.css'
import {Link} from "react-router-dom";

export const MovieItem = (props) => {
    const {
        id,
        className,
        title,
        hasWatched,
        onStatusChange,
        onDeleteButtonClick,
    } = props

    return (
        <li className={`${className} movie-item`}>
            <input
                id={id}
                type="checkbox"
                className="movie-item__checkbox"
                checked={hasWatched}
                onChange={() => onStatusChange(id, !hasWatched)}
            />
            <label
                htmlFor={id}
                className="movie-item__label"
            >
                <Link to={`/movie/${id}`} >
                    {title}
                </Link>
            </label>
           <button
               type="button"
               className="movie-item__delete-btn"
               onClick={() => onDeleteButtonClick(id)}
           >
               <span></span>
               <span></span>
           </button>
        </li>
    )
}