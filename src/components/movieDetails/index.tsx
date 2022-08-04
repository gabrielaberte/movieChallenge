import React, { useEffect, useState } from "react";
import getMovie from "../../services/get-movie";
import { Rate } from "antd";
import "./index.css";
import { DivContent, DivTopMovies } from "./styles";

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
    <div style={{height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {movie && (
        <DivContent>
          {movie && (
            <DivTopMovies>
              <div style={{ display: "flex" }}>
                <img
                  src={
                    movie?.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : ""
                  }
                ></img>
                <div>
                  <h4>{movie.title}</h4>
                  <h4>{movie.tagline}</h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Avaliação dos Usuários:
                    <Rate
                      style={{ width: "400px" }}
                      disabled
                      defaultValue={rate}
                    />{" "}
                    {movie.vote_average}/10
                  </div>
                  <p>Gênero: {genres?.map((e: any) => `${e.name} `)}</p>
                  <p>Lançamento: {data_brasileira}</p>
                  <div>
                    <p>{movie.overview}</p>
                  </div>
                </div>
              </div>
            </DivTopMovies>
          )}
        </DivContent>
      )}
    </div>
  );
}
