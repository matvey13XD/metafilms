import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import MyService from '../components/myService/myService';
import Header from "../components/header";
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilmById } from '../asyncActions/fetchFilms';

const MoviePage = () => {
    const params = useParams()
    const movieId = params.id;
    const [isLoaded, setLoading] = useState(false)
    const film = useSelector(state => state.currentFilm);
    const dispatch = useDispatch();
    let movie;
    useEffect(() => {
        dispatch(fetchFilmById(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`, setLoading))
    }, [])
    return (
        <div className={"moviepage"}>
            <Header/>
            {isLoaded
                ? <div className={'movie'}>
                    <div className="movie__top">
                        <h2 className="movie__name">{"Название: " + film.nameRu == null?film.nameEn == null?film.nameOriginal:film.nameEn:film.nameRu}</h2>
                        <img src={film.posterUrl} alt="" className="movie__img"/>
                    </div>
                    <div className="movie__body">
                        <h3 className="movie__originalname">{"Название: " + film.nameOriginal != undefined?film.nameOriginal != null?"Название: " + film.nameOriginal:"Название: Неизвестно":"Название: Неизвестно"}</h3>
                        <h4 className="movie__rating">{"Рейтинг: " + film.ratingKinopoisk != null?film.ratingKinopoisk != undefined?"Рейтинг: " + film.ratingImdb:"Рейтинг: Неизвестно":"Рейтинг: Неизвестно"}</h4>
                        <h4 className="movie__countries">{"Страны Производители: " + film.countries[0].country}</h4>
                        <h4 className="movie__year">{"Год выпуска: " + film.year}</h4>
                        <p className="movie__desc">{"Описание: " + film.description != null?film.description != undefined?"Описание: " + film.description:"Описание: Неизвестно":"Описание: Неизвестно"}</p>
                        <h4 className="movie__genres">{"Жанры: " + MyService.getGenre(film.genres)}</h4>
                    </div>
                </div>
                : <h1>Загрузка</h1>}
        </div>
    );
};

export default MoviePage;