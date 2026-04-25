import {MoodMoviesProvider} from "../context/MoodMovieContext.jsx";
import {MoodMovies} from "../components/MoodMovies/MoodMovies.jsx";

export const MoodMoviesPage = () => {
    return (
        <MoodMoviesProvider>
            <MoodMovies />
        </MoodMoviesProvider>
    )
}