import React, { useEffect, useState } from "react";
import getMovie from "../../services/get-movie";
import { Rate } from "antd";
import "./index.css";
import {
  DivColumn,
  DivContainerFora,
  DivContent,
  DivContentDetail,
  DivCredits,
  DivTopMovies,
} from "./styles";
import getCredits from "../../services/get-credits";

export default function MovieDetails() {
  const movieId = window.location.pathname.replace("/movie/", "");

  const [movie, setMovie] = useState<React.SetStateAction<any | undefined>>();
  const [credits, setCredits] =
    useState<React.SetStateAction<any | undefined>>();

  useEffect(() => {
    getMovie(movieId).then((results) => {
      setMovie(results);
    });
    getCredits(movieId).then((result) => setCredits(result.data));
  }, []);

  const rate = parseFloat(movie?.vote_average) / 2;
  const genres = movie?.genres;

  let data_americana = movie?.release_date;
  let data_brasileira = data_americana?.split("-").reverse().join("/");

  const principalCast = [];

  if (credits) {
    const cast = credits.cast;
    for (let index = 0; index < 4; index++) {
      const element = cast[index];
      principalCast.push(element);
    }
  }
  console.log(principalCast);

  return (
    <DivContainerFora>
      {movie && (
        <DivContent>
          {movie && (
            <DivTopMovies>
              <h1>{movie.title}</h1>

              <DivColumn>
                <img
                  src={
                    movie?.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : ""
                  }
                ></img>
                <div>
                  <h4>{movie.tagline}</h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Rate
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginRight: "15px",
                      }}
                      disabled
                      defaultValue={rate}
                    />{" "}
                    <p>{movie.vote_average}/10</p>
                  </div>
                  <p>G??nero: {genres?.map((e: any) => `${e.name} `)}</p>
                  <p>Lan??amento: {data_brasileira}</p>
                  <DivContentDetail>
                    <p>{movie.overview}</p>
                  </DivContentDetail>
                  <DivContent>
                    <p></p>
                    {principalCast &&
                      principalCast.map((e: any) => (
                        <DivCredits key={e.id}>
                          <img
                            src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`}
                          ></img>
                          <p>{e.name}</p>
                        </DivCredits>
                      ))}
                  </DivContent>
                </div>
              </DivColumn>
            </DivTopMovies>
          )}
        </DivContent>
      )}
    </DivContainerFora>
  );
}
