import React from 'react'
import styles from './App.module.scss'
import Header from '../Header'
import RandomPlanets from '../RandomPlanets'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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

        <Switch>
          <Route
            path="/films"
            render={() => (
              <>
                <h2 className={styles.title}>Films</h2>
                <FilmList />
              </>
            )}
            exact
          />

          <Route
            path="/films/:id"
            render={({ match }) => {
              const id = match.params.id
              return <FilmDetail id={id} />
            }}
          />

          <Route
            path="/people"
            render={() => (
              <>
                <h2 className={styles.title}>People</h2>
                <PersonList />
              </>
            )}
            exact
          />

          <Route
            path="/people/:id"
            render={({ match }) => {
              const id = match.params.id
              return <PersonDetail id={id} />
            }}
          />

          <Route
            path="/planets"
            render={() => (
              <>
                <h2 className={styles.title}>Planets</h2>
                <PlanetList />
              </>
            )}
            exact
          />

          <Route
            path="/planets/:id"
            render={({ match }) => {
              const id = match.params.id
              return <PlanetDetail id={id} />
            }}
          />

          <Route
            path="/starships"
            render={() => (
              <>
                <h2 className={styles.title}>Starships</h2>
                <StarshipList />
              </>
            )}
            exact
          />

          <Route
            path="/starships/:id"
            render={({ match }) => {
              const id = match.params.id
              return <StarshipDetail id={id} />
            }}
          />

          <Redirect to="/films/" />
        </Switch>
      </Router>

      <RandomPlanets />
    </main>
  )
}

export default App