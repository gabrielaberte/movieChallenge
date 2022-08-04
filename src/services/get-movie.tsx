import React from "react";
import api from './api'

async function getMovie(movieID: string) {

  const response = await api.get(`movie/${movieID}?api_key=252e6a44c1f6b79c67959a31245ab64f&language=pt-BR`)
    return response.data

}

export default getMovie