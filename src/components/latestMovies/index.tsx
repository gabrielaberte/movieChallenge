import React, { useEffect, useState } from "react";
import { DivContent, DivTopMovies } from "../topMovies/styles";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import getLatestMovies from "../../services/get-latest-movies";

function LatestMovies() {
  const [latestMovies, setlatestMovies] = useState<undefined | []>();
  const [page, setPage] = useState(1);

  let navigate = useNavigate();

  useEffect(() => {
    getLatestMovies(page).then((result) => {
      setlatestMovies(result.data.results);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div>
      <div style={{ height: "400px", margin: "50px" }}>
        <h2 style={{ marginTop: "50px", color: "inherit" }}>
          Próximas Estreias e Mais Recentes
        </h2>
        <DivContent>
          <Slider {...settings}>
            {latestMovies &&
              latestMovies?.map((e: any) => (
                <DivTopMovies key={e.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                  ></img>
                  <a key={e.id} onClick={() => navigate(`/movie/${e.id}`)}>
                    <h3>{e.title}</h3>
                    <p> {e.release_date}</p>
                    <span>Nota: {e.vote_average}</span>
                  </a>
                </DivTopMovies>
              ))}
          </Slider>
        </DivContent>
      </div>
    </div>
  );
}

export default LatestMovies;
