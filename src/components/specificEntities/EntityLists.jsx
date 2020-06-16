import React from 'react'
import SwapiService from '../../services/swapiService'
import EntityList from '../EntityList'

const swapi = new SwapiService()

const {
  getAllFilms,
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapi

const FilmList = () => {
  return <EntityList getData={getAllFilms} />
}

const PersonList = () => {
  return <EntityList getData={getAllPeople} />
}

const PlanetList = () => {
  return <EntityList getData={getAllPlanets} />
}

const StarshipList = () => {
  return <EntityList getData={getAllStarships} />
}

export {
  FilmList,
  PersonList,
  PlanetList,
  StarshipList
}
