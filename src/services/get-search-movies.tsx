import React from "react";
import api from './api'

async function getSearchMovie(searchId: string, page: number) {

  const response = await api.get(`search/movie?api_key=252e6a44c1f6b79c67959a31245ab64f&query=${searchId}&page=${page}`)
    return response.data

}

export default getSearchMovie