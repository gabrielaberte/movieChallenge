import React, { useEffect, useState } from "react";
import { Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import getSearchMovie from "../../services/get-search-movies";
import { DivContent, DivSearch, DivTopMovies } from "./styles";
import noImage from "../../assets/no-image.png";

const { Search } = Input;

function SearchMovie() {
  const [searchId, setSearchId] = useState<string>();
  const [page, setPage] = useState(1);
  const [searchList, setSearchList] = useState<undefined | []>([]);
  const onSearch = (value: string) => console.log(value);

  let navigate = useNavigate();

  useEffect(() => {
    if (searchId && searchId != "") {
      getSearchMovie(searchId, page).then((result) =>
        setSearchList(result.results)
      );
    } else {
      setSearchList(undefined);
    }
  }, [searchId]);

  var largura: number = window.screen.width;


  return (
    <div>
      <div>
        <DivSearch>
          <h2 style={{color: 'inherit'}}>Descubra milhões de filmes!</h2>
          <Space direction="vertical">
            <Search
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Procure por um Filme"
              onSearch={onSearch}
              style={{ width: (largura>700) ? 500 : 200}}
            />
          </Space>
        </DivSearch>
        <DivContent>
          {searchList &&
            searchList.map((e: any) => (
              <DivTopMovies key={e.id}>
                <img
                  src={
                    e?.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${e.poster_path}`
                      : noImage
                  }
                ></img>
                <a key={e.id} onClick={() => navigate(`/movie/${e.id}`)}>
                  <h4>{e.title}</h4>
                  <p> {e.release_date}</p>
                  <span>Nota: {e.vote_average}</span>
                </a>
              </DivTopMovies>
            ))}
        </DivContent>
      </div>
    </div>
  );
}

export default SearchMovie;
