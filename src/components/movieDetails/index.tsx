import React, { useEffect, useState } from "react";
import getMovie from "../../services/get-movie";
import { DivMovieDetail } from "./styles";

export default function MovieDetails() {
  const movieId = window.location.pathname.replace("/movie/", "");

  const [movie, setMovie] = useState<React.SetStateAction<any | undefined>>();

  useEffect(() => {
    getMovie(movieId).then((results) => {
      setMovie(results);
      console.log(results.poster_path);
    });
  }, []);

  return (
    <>{movie && 
          <DivMovieDetail>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}>
              </img>
              <div>
                  <h1>{movie.title}</h1>
                  <h1>{ movie.title }</h1>
              </div>
      </DivMovieDetail>
      }
    </>
  );
}
