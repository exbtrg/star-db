import React, { useState, useEffect } from 'react'
import { func, string, object } from 'prop-types'
import cn from 'classnames'
import { withRouter } from 'react-router-dom'
import styles from './CardInfo.module.scss'
import useRequest from '../../hooks/useRequest'
import FeatureList from '../FeatureList'
import Fade from '../Fade'
import Spinner from '../Spinner'
import ImgWrapper from '../ImgWrapper'
import ErrorBoundry from '../ErrorBoundry'

const CardInfo = ({ getData, getImage, id, history }) => {
  const [shouldVisible, setShouldVisible] = useState(false)
  const { data, loading, error } = useRequest(getData, id)

  useEffect(() => {
    setShouldVisible(true)
    return () => setShouldVisible(false)
  }, [getImage, id])


  const goBackPage = () => {
    history.goBack()
  }

  if (loading) {
    return (
      <div className={cn('card', styles.container)}>
        <Spinner error={error} />
      </div>
    )
  }

  return (
    <ErrorBoundry>
      <Fade show={shouldVisible}>
        <div className={cn('card', styles.container)}>
          <div className={styles.image}>
            <ImgWrapper imgUrl={getImage(id)} alt={data.name} />
          </div>

          <div className={styles.text}>
            <h2 className={styles.title}>{data.name}</h2>

            <FeatureList featureList={data.features} />
          </div>

          <button className={styles.button} type="button" onClick={goBackPage}>&#8592; Go Back</button>
        </div>
      </Fade>
    </ErrorBoundry>
  )
}

CardInfo.propTypes = {
  getData: func,
  getImage: func,
  id: string,
  history: object
}

export default withRouter(CardInfo)