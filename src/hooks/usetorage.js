const STORAGE_KEY = 'MOOD_MOVIES'

export const useStorage = {
    getMovies: () => {
        const rawData = localStorage.getItem(STORAGE_KEY)

        if(!rawData) return []

        try{
            const parsedData = JSON.parse(rawData)
            return Array.isArray(parsedData) ? parsedData : []
        } catch(err){
            console.error('Error on parsing Local Storage', err)
        }
    },

    saveMovies: (arr) => {
        if(arr.length > 0){
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(arr)
            )
        } else {
            localStorage.removeItem(STORAGE_KEY)
        }
    }
}