import React from 'react';
import Film from "./film";
import MyService from './myService/myService';

const FilmList = ({arr, styles = {}, filter}) => {
    
    return (
        <div style={styles} className={"film__list"}>
            {MyService.sortArray(arr, filter).map(film => {
                return <Film key={film.filmId} film={{img: film.posterUrlPreview,rating: film.rating, genres: MyService.getGenre(film.genres), name: film.nameRu == undefined?film.nameEn:film.nameRu, id: film.filmId}}/>
            })}
        </div>
    );
};

export default FilmList;