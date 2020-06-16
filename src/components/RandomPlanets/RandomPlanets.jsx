import React, { useState, useEffect, useCallback } from 'react'
import SwapiService from '../../services/swapiService'
import PlanetInfo from './PlanetInfo'
import Spinner from '../Spinner/'
import ErrorBoundry from '../ErrorBoundry'

const RandomPlanets = () => {
  const { getPlanet, getPlanetImage } = new SwapiService()

  const [currentId, setCurrentId] = useState(2)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const onChangePlanet = () => {
    const randomId = Math.floor(Math.random() * 7 + 3)
    setCurrentId(randomId)
  }

  const getPlanetMemo = useCallback(getPlanet, [])

  useEffect(() => {

    const fetch = () => {
      getPlanetMemo(currentId)
        .then(data => {
          setData(data)
          setLoading(false)
        })
        .catch(err => {
          setError(err)
        })
    }

    fetch()

    const timer = setInterval(onChangePlanet, 10000)

    return () => clearInterval(timer)
  }, [currentId, getPlanetMemo])

  if (loading) {
    return <Spinner error={error} />
  }

  return (
    <ErrorBoundry>
      <PlanetInfo imageSrc={getPlanetImage(currentId)} {...data} />
    </ErrorBoundry>
  )
}

export default RandomPlanets