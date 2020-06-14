import React from 'react'
import SwapiService from '../../services/swapiService'
import DataDetail from '../DataDetail'
import CardInfo from '../CardInfo'

const swapi = new SwapiService()

const {
  getFilm,
  getPerson,
  getPlanet,
  getStarship,
  getFilmsImage,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapi

const FilmDetail = ({ id }) => {
  return (
    <DataDetail
      component={<CardInfo />}
      id={id}
      getData={getFilm}
      getImage={getFilmsImage}
      kind="small"
    />
  )
}

const PersonDetail = ({ id }) => {
  return (
    <DataDetail
      component={<CardInfo />}
      id={id}
      getData={getPerson}
      getImage={getPersonImage}
      kind="small"
    />
  )
}

const PlanetDetail = ({ id }) => {
  return (
    <DataDetail
      component={<CardInfo />}
      id={id}
      getData={getPlanet}
      getImage={getPlanetImage}
      kind="small"
    />
  )
}

const StarshipDetail = ({ id }) => {
  return (
    <DataDetail
      component={<CardInfo />}
      id={id}
      getData={getStarship}
      getImage={getStarshipImage}
      kind="small"
    />
  )
}

export {
  FilmDetail,
  PersonDetail,
  PlanetDetail,
  StarshipDetail
}
