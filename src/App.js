import { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import NavBar from './Components/NavBar';
import {Data} from './Data'
import { Routes, Route } from "react-router-dom";
import Trailer from './Components/Trailer';

function App() {
const [movies, setMovies] = useState(Data)
const [search, setSearch] = useState("")
const [rating, setRating] = useState(0)

const searchMovie=(e)=>{
  setSearch(e.target.value)
}

const add=(newMovie)=>{
  setMovies([...movies,newMovie])
}

const rateMovie=(a)=>{
  setRating(a)
}

  return (
    <div className="App">
      <NavBar  searchMovie={searchMovie} nejma={rateMovie}  />
      <Routes> 

    <Route path='/' element={<MovieList  movies={movies} search={search} rating={rating} />} /> 

     <Route path="/movie/:id" element={<Trailer movies={movies} />} />
     </Routes>
     <AddMovie add={add} />
    </div>
  );
}

export default App;
