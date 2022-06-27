import axios from "axios";

export default class MyService{
    static frstup(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    static getGenre(genres){
        let str = "";
        for (let index = 0; index < genres.length; index++) {
            if (index != genres.length - 1)
            {
                str += MyService.frstup(genres[index].genre) + ", ";
            }
            else
            {
                str += MyService.frstup(genres[index].genre);
            }
        }
        return str;
    }
    static sortArray(arr, filter){
       if (filter != undefined && filter != null){
        if (filter[0] == "g"){
            return arr.filter(film => {
              return film.genres.find(obj => obj.genre == filter.replace('g', '')) != undefined
            })
           }
           else{
            return arr.sort((film1, film2) => film1.rating - film2.rating).reverse();
           }
       }
       else{
        return arr.sort((film1, film2) => film1.rating - film2.rating).reverse();
       }

    }
    static async getFilms (url, setFilms, films = null, page = 1, setPage){
        const data = await axios.get(url, {
            headers: {
                'X-API-KEY': '0ad346f1-5c66-4d38-be2f-da9999e88b7d',
                'Content-Type': 'application/json',
            },
        })
        console.log(url)
        console.log(data)
        if (films != null){
            setFilms([...films, ...data.data.films])
            setPage(page + 1)
        }
        else {
            setFilms(data.data.films);
        }
    }
    static async getFilmById (url, setFilm, setLoading){
        const data = await axios.get(url, {
            headers: {
                'X-API-KEY': '0ad346f1-5c66-4d38-be2f-da9999e88b7d',
                'Content-Type': 'application/json',
            },
        })
        console.log(data.data)
        setFilm(data.data);
        setLoading(true)
    }
    static getCountries(counrties){
        let result = "";
        counrties.forEach(elem => {
            result += elem.country + ", ";
        })
        return result;
    }
    static async testVideo(){
        const test = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/571335/videos', {
            headers: {
                'X-API-KEY': '0ad346f1-5c66-4d38-be2f-da9999e88b7d',
                'Content-Type': 'application/json',
            },
        })
        console.log(test);
    }
}