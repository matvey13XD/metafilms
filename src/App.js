import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import MoviePage from "./pages/moviePage";
import SearchPage from "./pages/searchPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path={"/home"}>
                    <Home/>
                </Route>
                <Route path={"/films/:id"}>
                  <MoviePage/>
                </Route>
                <Route path={'/search/:keyWord'}>
                  <SearchPage/>
                </Route>
                <Redirect to={'/home'}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

