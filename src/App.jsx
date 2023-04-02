import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/home/Home"
import Movies from "./pages/movies/Movies";
import TVShows from "./pages/tvshows/TVShows";
import Notfound from "./pages/notfound/Notfound";

import StarWars from "./pages/articles/starwars/StarWars"



const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<Home/>} />
                    <Route path = "/Movies" element = {<Movies />} />
                    <Route path = "/TV-Shows" element = {<TVShows />} />

                    <Route path = "/StarWars" element = {<StarWars/>}/>

                    <Route path = "*" element = {<Notfound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App