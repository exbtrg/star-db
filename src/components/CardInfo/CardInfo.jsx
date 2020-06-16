import React, { useState, useEffect } from 'react'
import { string, array } from 'prop-types'
import cn from 'classnames'
import { withRouter } from 'react-router-dom'
import styles from './CardInfo.module.scss'
import FeatureList from '../FeatureList'
import Fade from '../Fade'
import ImgWrapper from '../ImgWrapper'

const CardInfo = ({ getImage, id, name, features, history }) => {
  const [shouldVisible, setShouldVisible] = useState(false)

  useEffect(() => {
    setShouldVisible(true)
    return () => setShouldVisible(false)
  }, [getImage, id])


  const goBackPage = () => {
    history.goBack()
  }

  return (
    <Fade show={shouldVisible}>
      <div className={cn('card', styles.container)}>
        <div className={styles.image}>
          <ImgWrapper imgUrl={getImage(id)} alt={name} />
        </div>

        <div className={styles.text}>
          <h2 className={styles.title}>{name}</h2>

          <FeatureList featureList={features} />

          <button className={styles.button} type="button" onClick={goBackPage}>&#8592; Go Back</button>
        </div>
      </div>
    </Fade>
  )
}

CardInfo.propTypes = {
  imgUrl: string,
  name: string,
  features: array
}

export default withRouter(CardInfo)