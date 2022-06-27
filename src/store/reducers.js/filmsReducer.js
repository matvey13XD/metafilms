import axios from "axios"


const defaultState = {
    films: [],
    currentFilm: {},
}

function filmsReducer(state = defaultState, action){
    switch (action.type){
        case ADD_MANY_FILMS:
            console.log(action.payload);
            return {films: action.payload, currentFilm: state.currentFilm}
        case ADD_CURRENT_FILM:
            return {films: state.films, currentFilm: action.payload}
        default:
            return state;
    }
}

export const ADD_MANY_FILMS = "ADD_MANY_FILMS";
export const ADD_CURRENT_FILM = "ADD_CURRENT_FILM";


export default filmsReducer;