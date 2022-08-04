import React, { useEffect, useState } from "react";
import type { PaginationProps } from "antd";
import { Pagination, Card, List, Carousel } from "antd";
import getAllServices from "../../services/get-all-movies";
import { DivTopMovies } from "./styles";
import Slider from "react-slick";
import { Navigate, useNavigate } from "react-router-dom";


function TopMovies() {
  const [topMovies, setTopMovies] = useState<undefined | []>();
  const [page, setPage] = useState<number>(1);
  const [current, setCurrent] = useState(1);
  const [totalPages, setTotalPages] = useState<number>();
  let navigate = useNavigate();

  useEffect(() => {
    getAllServices(page).then((result) => {
      setTopMovies(result.data.results);
      setTotalPages(result.data.total_pages);
    });
  }, [page]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };


  return (
    <div>
      <div>
        <h2 > Filmes Populares </h2>
        <Slider {...settings}>
          {topMovies &&
            topMovies?.map((e: any) => (
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
      </div>
    </div>
  );
}

export default TopMovies;
