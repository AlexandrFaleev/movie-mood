const URL = "http://localhost:3001/movies"

const headers = {
    'Content-Type' : 'application/json'
}

const MoodMoviesAPI = {
    getAll: () => {
        return fetch(URL).then((response) => response.json())
    },

    getItem: (id) => {
        return fetch(`${URL}/${id}`).then((response) => response.json())
    },

    addItem: (movie) => {
        return fetch(URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(movie)
        }).then((response) => response.json())
    },

    deleteItem: (id) => {
        return fetch(`${URL}/${id}`, {method: 'DELETE'})
    },

    toggleMovieWatched: (id, hasWatched) => {
        return fetch(`${URL}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({hasWatched})
        })
    }
}

export default MoodMoviesAPI;