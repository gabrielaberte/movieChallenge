import React from "react";
import FooterBar from "../../components/footer";
import NavBar from "../../components/header";
import MovieDetails from "../../components/movieDetails";
import TopMovies from "../../components/topMovies";

function MoviePage() {


  return (
    <div>
      <NavBar />
      <MovieDetails />
      <FooterBar/>
    </div>
  );
}

export default MoviePage;
