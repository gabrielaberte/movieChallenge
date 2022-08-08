import React, { useEffect, useState } from "react";
import getAllServices from "../../services/get-all-movies";
import { DivContent, DivTopMovies } from "./styles";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./index.css";

function TopMovies() {
  const [topMovies, setTopMovies] = useState<undefined | []>();
  const [page, setPage] = useState<number>(1);
  const [current, setCurrent] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>();
  let navigate = useNavigate();

  useEffect(() => {
    getAllServices(page).then((result) => {
      setTopMovies(result.data.results);
      setTotalPages(result.data.total_pages);
    });
  }, [page]);

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
      <div style={{ marginLeft: "50px", marginRight: "50px"}}>
        <DivContent>
          <h2 style={{ color: "inherit" }}> Filmes Populares </h2>
          <Slider {...settings}>
            {topMovies &&
              topMovies?.map((e: any) => (
                <DivTopMovies key={e.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                  ></img>
                  <a key={e.id} onClick={() => navigate(`/movie/${e.id}`)}>
                    <h3 style={{ marginTop: "10px" }}>{e.title}</h3>
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

export default TopMovies;
