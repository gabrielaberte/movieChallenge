// chave da API: 252e6a44c1f6b79c67959a31245ab64f

// https://api.themoviedb.org/3/movie/550?api_key=252e6a44c1f6b79c67959a31245ab64f

// token de leitura api: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTJlNmE0NGMxZjZiNzljNjc5NTlhMzEyNDVhYjY0ZiIsInN1YiI6IjYyZTdmOTRmMWFkOTNiMDA1ZTBmZGFkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sj5mqYcFMfAPrVmso8p4cYvneDrFltOXxMg6b6CkGaY

// curl --request GET \
//   --url 'https://api.themoviedb.org/3/movie/76341' \
//   --header 'Authorization: Bearer <<access_token>>' \
//   --header 'Content-Type: application/json;charset=utf-8'

import React from "react";

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

export default api 
