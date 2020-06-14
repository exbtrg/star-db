import React, { useState, useEffect, useCallback } from 'react'
import SwapiService from '../../services/swapiService'
import Info from '../Info'
import Spinner from '../Spinner/'

const RandomEntity = () => {
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

  return (
    <>
      {loading ? <Spinner error={error} loading={loading} /> : <Info kind="large" getImage={getPlanetImage} {...data} />}
    </>
  )
}

export default RandomEntity