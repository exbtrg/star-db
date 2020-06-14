import React from 'react'
import LayoutPage from '../LayoutPage'

import {
  FilmList,
  PersonList,
  PlanetList,
  StarshipList,
  FilmDetail,
  PersonDetail,
  PlanetDetail,
  StarshipDetail
} from '../specificEntities'

const FilmPage = () => (
  <LayoutPage List={<FilmList />} Card={<FilmDetail />} />
)

const PeoplePage = () => (
  <LayoutPage List={<PersonList />} Card={<PersonDetail />} />
)

const PlanetsPage = () => (
  <LayoutPage List={<PlanetList />} Card={<PlanetDetail />} />
)

const StarshipsPage = () => (
  <LayoutPage List={<StarshipList />} Card={<StarshipDetail />} />
)

export {
  FilmPage,
  PeoplePage,
  PlanetsPage,
  StarshipsPage
}