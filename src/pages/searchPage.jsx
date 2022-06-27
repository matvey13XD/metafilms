import React, {useEffect, useState} from 'react';
import Header from "../components/header";
import FilmList from "../components/filmList";
import {useParams} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import Footer from '../components/footer';
import MyService from '../components/myService/myService';
import { fetchFilms } from '../asyncActions/fetchFilms';

const SearchPage = () => {
    
    const params = useParams()
    const [isLoaded, setLoading] = useState(false);
    const films = useSelector(state => state.films)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFilms(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${params.keyWord}&page=1`, setLoading));
    }, [params.keyWord])
    return (
        <div className={'searchpage'}>
            {console.log(films.length + ""+ isLoaded)}
            <Header/>
            {isLoaded == false
                ? <h1>Загрузка</h1>
                : films.length == 0?<h1 className={'filmnotfound__text'}>Ничего не найдено</h1>:<FilmList styles={{paddingTop: "220px", paddingBottom: "100px"}} arr={films}/>}
        </div>
    );
};

export default SearchPage;