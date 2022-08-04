import React, { useEffect, useState } from "react";
import getMovie from "../../services/get-movie";
import { DivMovieDetail } from "./styles";
import { Rate } from "antd";
import "./index.css";

export default function MovieDetails() {
  const movieId = window.location.pathname.replace("/movie/", "");

  const [movie, setMovie] = useState<React.SetStateAction<any | undefined>>();

  useEffect(() => {
    getMovie(movieId).then((results) => {
      setMovie(results);
      console.log(results);
    });
  }, []);

  const rate = parseFloat(movie?.vote_average) / 2;
  const genres = movie?.genres;

  let data_americana = movie?.release_date;
    let data_brasileira = data_americana?.split("-").reverse().join("/");
    
    

  return (
    <>
      {movie && (
        <DivMovieDetail >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          ></img>
          <div>
            <h1>{movie.title}</h1>
            <h4>{movie.tagline}</h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px",
              }}
            >
              Avaliação dos Usuários: <Rate style={{ width: "500px" }} disabled defaultValue={rate} />
              {movie.vote_average}/10
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <p>Gênero: {genres?.map((e: any) => `${e.name} `)}</p>
              <p>Lançamento: {data_brasileira}</p>
            </div>

            <div>
              <p>{movie.overview}</p>
            </div>
          </div>
        </DivMovieDetail>
      )}
    </>
  );
}
