import React from "react";
import api from './api'

async function getCredits(movieId: string) {

  const response = await api.get(`movie/${movieId}/credits?api_key=252e6a44c1f6b79c67959a31245ab64f&language=pt-BR`)
    return response

}

export default getCredits