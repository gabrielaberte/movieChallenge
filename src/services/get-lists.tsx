import React from "react";
import api from './api'

async function getLists(movieId: string,page: number) {

  const response = await api.get(`movie/${movieId}/lists?api_key=252e6a44c1f6b79c67959a31245ab64f&language=pt-BR&page=${page}`)
    return response

}

export default getLists