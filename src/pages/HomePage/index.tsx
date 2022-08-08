import React from "react";
import FooterBar from "../../components/footer";
import NavBar from "../../components/header";
import LatestMovies from "../../components/latestMovies";
import SearchMovie from "../../components/searchMovie";
import TopMovies from "../../components/topMovies";

function HomePage() {
  return (
    <div>
      <NavBar />
      <SearchMovie />
        <TopMovies />
      <LatestMovies />
      <FooterBar />
    </div>
  );
}

export default HomePage;
