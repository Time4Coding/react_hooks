import "./App.css";
import movieList from "./db/moviesList.json";
import MovieList from "./components/MovieList";
import { useEffect, useState } from "react";
import MovieSearch from "./components/MovieSearch";
import AddMovie from "./components/AddMovie";
import { Routes, Route, useParams } from "react-router-dom";
import Description from "./components/Description";

function App() {
  const [listOfMovies, setListOfMovies] = useState(movieList.movies);
  const [searchMovieName, setSearchMovieName] = useState("");
  const [date, setDate] = useState(new Date());
  const handleAdd = (newMovie) => {
    setListOfMovies([...listOfMovies, newMovie]);
  };
  const handleFilter = (movieName) => {
    setSearchMovieName(movieName);
    console.log(movieName);
  };

  return (
    <div className="App">
      <h1>React Hooks</h1>
      {/* <p>Current Time : {date.toLocaleTimeString()}</p> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <MovieSearch handleFilter={handleFilter} />
              <MovieList
                listOfMovies={listOfMovies.filter((movie) =>
                  movie.title
                    .toLowerCase()
                    .includes(searchMovieName.toLowerCase())
                )}
              />
            </div>
          }
        />
        <Route
          path="/description/:id"
          element={<Description movieDesc={listOfMovies} />}
        />
        <Route path="/add" element={<AddMovie handleAdd={handleAdd} />} />
      </Routes>
    </div>
  );
}

export default App;
