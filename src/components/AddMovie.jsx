import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function AddMovie({ handleAdd }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [runTime, setRunTime] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const handelNewMovie = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      title: title,
      year: year,
      runtime: runTime,
      genres: [],
      director: "",
      actors: "",
      plot: "",
      posterUrl: posterURL,
    };
    handleAdd(newMovie);
  };

  return (
    <Box
      onSubmit={handelNewMovie}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="Run Time"
          value={runTime}
          onChange={(e) => setRunTime(e.target.value)}
        />
        <TextField
          label="Poster Url"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
        />
      </div>
      <button>ADD</button>
    </Box>
  );
}

/****** This example of our new Movie object *************** */
// "id": 4,
// "title": "Crocodile Dundee",
// "year": "1986",
// "runtime": "97",
// "genres": ["Adventure", "Comedy"],
// "director": "Peter Faiman",
// "actors": "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
// "plot": "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
// "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
