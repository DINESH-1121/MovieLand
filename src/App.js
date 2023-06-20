import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// 6fcbb4d0

const API_URL = "http://www.omdbapi.com/?apikey=6fcbb4d0";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieTitle,setMovieTitle] = useState("Avengers");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(movieTitle);
  }, [movieTitle]);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={movieTitle}
          onChange={(e)=>{setMovieTitle(e.target.value)}}
        />
        <img src={SearchIcon} alt="Search Icon" onClick={() => {searchMovies(movieTitle)}} />
      </div>

      {
        movies?.length > 0 ? 
          (<div className="container">
              {movies.map((movie) => (
                <MovieCard movie1={movie} />
              ))}
            </div>
          ): (
            <div className="container">
              <h2>No movies found</h2>  
            </div>
          ) 
      }

      
    </div>
  );
};

export default App;
