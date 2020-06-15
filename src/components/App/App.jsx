import React from 'react'
import styles from './App.module.scss'
import Header from '../Header'
import RandomPlanets from '../RandomPlanets'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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

const App = () => {
  return (
    <main className={styles.wrapper}>
      <Router>
        <Header />

        <RandomPlanets />

        <Route path="/films" component={FilmList} exact />
        <Route
          path="/films/:id"
          render={({ match }) => {
            const id = match.params.id
            return <FilmDetail id={id} />
          }}
        />

        <Route path="/people" component={PlanetList} exact />
        <Route
          path="/people/:id"
          render={({ match }) => {
            const id = match.params.id
            return <PlanetDetail id={id} />
          }}
        />

        <Route path="/planets" component={PersonList} exact />
        <Route
          path="/planets/:id"
          render={({ match }) => {
            const id = match.params.id
            return <PersonDetail id={id} />
          }}
        />

        <Route path="/starships" component={StarshipList} exact />
        <Route
          path="/starships/:id"
          render={({ match }) => {
            const id = match.params.id
            return <StarshipDetail id={id} />
          }}
        />
      </Router>
    </main>
  )
}

export default App