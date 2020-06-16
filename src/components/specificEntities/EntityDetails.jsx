import React from 'react'
import SwapiService from '../../services/swapiService'
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
  return <CardInfo getImage={getFilmsImage} getData={getFilm} id={id} />
}

const PersonDetail = ({ id }) => {
  return <CardInfo getImage={getPersonImage} getData={getPerson} id={id} />
}

const PlanetDetail = ({ id }) => {
  return <CardInfo getData={getPlanet} getImage={getPlanetImage} id={id} />
}

const StarshipDetail = ({ id }) => {
  return <CardInfo getData={getStarship} getImage={getStarshipImage} id={id} />
}

export {
  FilmDetail,
  PersonDetail,
  PlanetDetail,
  StarshipDetail
}
