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
  var largura: number = window.screen.width;

  

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: (largura>700) ? 4.5 : 1.5,
    slidesToScroll: (largura>700) ? 4 : 1,
    margin: "20px",
  };

  return (
    <div>
      <div style={{margin: "50px"}}>
        <DivContent>
          {" "}
          <h2>
            Próximas Estreias e Mais Recentes
          </h2>
          <Slider {...settings}>
            {latestMovies &&
              latestMovies?.map((e: any) => (
                <DivTopMovies key={e.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                  ></img>
                  <a key={e.id} onClick={() => navigate(`/movie/${e.id}`)}>
                    <h4>{e.title}</h4>
                    <p> {e.release_date.split("-").reverse().join("/")}</p>
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
