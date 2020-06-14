import React from 'react'
import DataList from '../DataList'
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
  return (
    <DataList
      component={<EntityList />}
      getData={getAllFilms}
    />
  )
}


const PersonList = () => {
  return (
    <DataList
      component={<EntityList />}
      getData={getAllPeople}
    />
  )
}

const PlanetList = () => {
  return (
    <DataList
      component={<EntityList />}
      getData={getAllPlanets}
    />
  )
}

const StarshipList = () => {
  return (
    <DataList
      component={<EntityList />}
      getData={getAllStarships}
    />
  )
}

export {
  FilmList,
  PersonList,
  PlanetList,
  StarshipList
}
