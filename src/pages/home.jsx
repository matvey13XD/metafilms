import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useSelector, useDispatch} from 'react-redux/es/exports';
import { GET_TOP_100 } from '../store/reducers.js/filmsReducer';
import { fetchFilms } from '../asyncActions/fetchFilms';
import FilmList from '../components/filmList';
import DropDownMenu from '../components/dropDownMenu';
import Header from '../components/header';
import MyService from '../components/myService/myService';

const Home = () => {
    const films = useSelector(state => state.films);
  const dispatch = useDispatch();
  const [filterBy, setFilterBy] = useState("defualt");
  const changeFilter = (value) => {
    setFilterBy(value)
  }

  const add = () => {
    dispatch(fetchFilms());
    console.log(films); 
  }

  useEffect(() => {
    dispatch(fetchFilms("https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"));
    MyService.testVideo();
  }, [])

  return (
    <div className="App">
      <Header/>
      <DropDownMenu setFilter={changeFilter}/>
      <FilmList styles={{paddingTop: "350px", paddingBottom: "100px"}} arr={films} filter={filterBy}/>
    </div>
  );
};

export default Home;