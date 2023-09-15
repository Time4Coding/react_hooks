import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Description({ movieDesc }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const desc = movieDesc.find((movie) => movie.id === Number(id));

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>Movie Description</h1>
      <p>{desc.plot}</p>
    </div>
  );
}
