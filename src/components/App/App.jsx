import React from 'react'
import PropTypes from 'prop-types'
import styles from './App.module.scss'
import Header from '../Header'
import RandomPlanets from '../RandomPlanets'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { FilmList, FilmDetail } from '../specificEntities'

import {
  // FilmPage,
  PeoplePage,
  PlanetsPage,
  StarshipsPage
} from '../pages'


const App = () => {
  return (
    <main className={styles.wrapper}>
      <Router>
        <Header />

        <RandomPlanets />

        <Route path="/" component={FilmList} exact />
        <Route
          path="/:id"
          render={({ match }) => {
            const id = match.params.id
            return <FilmDetail id={id} />
          }}
        />
        {/* <Route path="/people" component={PeoplePage} /> */}
        {/* <Route path="/planets" component={PlanetsPage} /> */}
        {/* <Route path="/starships" component={StarshipsPage} /> */}

      </Router>
    </main>
  )
}

App.propTypes = {
  // PropTypes here
  myProp: PropTypes.string
}

App.defaultProps = {
  // defaultProps here
}

export default App