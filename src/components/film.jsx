import React from 'react';
import {useHistory} from "react-router-dom";

const Film = ({film}) => {
    const router = useHistory();
    return (
        <div onClick={() => router.push(`/films/${film.id}`)} className={"film"}>
            {console.log(film)}
            <div className="img__mask"></div>
            <img src={film.img} alt="" className="film__img"/>
            <h1>{"Рейтинг: " + film.rating}</h1>
            <h3 className="film__name">{film.name}</h3>
            <h4 className="film__genres">{film.genres}</h4>
        </div>
    );
};

export default Film;