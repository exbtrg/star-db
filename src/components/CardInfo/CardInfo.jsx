import React, { useState, useEffect } from 'react'
import { string, array } from 'prop-types'
import cn from 'classnames'
import styles from './CardInfo.module.scss'
import FeatureList from '../FeatureList'
import fallBackImg from './404-error.svg'
import Fade from '../Fade'
import Card from '../Card'

const CardInfo = ({ kind, getImage, id, name, features }) => {
  const [imgUrl, setImgUrl] = useState(null)
  const [shouldVisible, setShouldVisible] = useState(false)

  useEffect(() => {
    setShouldVisible(true)
    setImgUrl(getImage(id))
    return () => setShouldVisible(false)
  }, [getImage, id])

  const onImgErr = () => {
    setImgUrl(fallBackImg)
  }

  return (
    <Fade show={shouldVisible}>
      <Card>
        <img onError={onImgErr} className={cn(styles.image, [styles[kind]])} src={imgUrl} alt={name} />

        <div className={styles.text}>
          <h2 className={styles.title}>{name}</h2>

          <FeatureList featureList={features} />
        </div>
      </Card>
    </Fade>
  )
}

CardInfo.propTypes = {
  kind: string,
  imgUrl: string,
  name: string,
  features: array
}

CardInfo.defaultProps = {
  kind: 'small'
}

export default CardInfo