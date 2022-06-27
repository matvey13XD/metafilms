import axios from 'axios'
import { ADD_CURRENT_FILM } from '../store/reducers.js/filmsReducer'

export const fetchFilms = (url, setLoading) => {
    return async function(dispatch){
        const data = await axios.get(url, {
                    headers: {
                        'X-API-KEY': '0ad346f1-5c66-4d38-be2f-da9999e88b7d',
                        'Content-Type': 'application/json',
                    },
                })
            dispatch({type: "ADD_MANY_FILMS", payload: data.data.films})
            setLoading(true);
            const test = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/571335/videos', {
                headers: {
                    'X-API-KEY': '0ad346f1-5c66-4d38-be2f-da9999e88b7d',
                    'Content-Type': 'application/json',
                },
            })
            console.log(test);
    }
}

export const fetchFilmById = (url, setLoading) => {
    return async function(dispatch){
        const data = await axios.get(url, {
            headers: {
                'X-API-KEY': '0ad346f1-5c66-4d38-be2f-da9999e88b7d',
                'Content-Type': 'application/json',
            },
        })
        console.log(data)
        dispatch({type: ADD_CURRENT_FILM, payload: data.data})
        setLoading(true);
    }
}