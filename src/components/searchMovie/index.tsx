import React, { useEffect, useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import getSearchMovie from "../../services/get-search-movies";
import { DivContent, DivTopMovies } from "./styles";

const { Search } = Input;


function SearchMovie() {
  const [searchId, setSearchId] = useState<string>();
  const [page, setPage] = useState(1);
  const [searchList, setSearchList] = useState<undefined | []>([])
  const onSearch = (value: string) => console.log(value);
  

  let navigate = useNavigate();

  useEffect(() => {
    if (searchId && searchId != '') {
      getSearchMovie(searchId, page).then((result) => setSearchList(result.results))
    } else {
      setSearchList(undefined)
    }
  }
  , [searchId]);


  return (
    <div>
      <div>
        <h2>Descubra milhões de filmes!</h2>
        <Space direction="vertical">
          <Search
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="Procure por um Filme"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
          <DivContent>
          {searchList && searchList.map((e: any) =>
            <DivTopMovies key={e.id}>
                <img
                  src={e?.poster_path ? `https://image.tmdb.org/t/p/w500/${e.poster_path}` : ''}
                ></img>
                <a key={e.id} onClick={() => navigate(`/movie/${e.id}`)}>
                  <h3>{e.title}</h3>
                  <p> {e.release_date}</p>
                  <span>Nota: {e.vote_average}</span>
                </a>
              </DivTopMovies>)}</DivContent>
        </Space>
      </div>
    </div>
  );
}

export default SearchMovie;
