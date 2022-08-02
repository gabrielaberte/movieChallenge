import React from "react";
import api from './api'

async function getAllServices(page: number) {
  const services = []
  let totalPages = 0
  const tablePageSizeGet = 100

  const response = await api.get(`popular?api_key=252e6a44c1f6b79c67959a31245ab64f&language=pt-BR&page=${page}`)
    return response

}

export default getAllServices