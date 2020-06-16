import React from 'react'
import styles from './PlanetInfo.module.scss'
import cn from 'classnames'
import ImgWrapper from '../../ImgWrapper'

const PlanetInfo = ({
  imageSrc,
  name,
  climate,
  diameter,
  orbital_period,
  gravity
}) => {

  return (
    <div className={cn(styles.container, 'card')}>
      <h3 className={styles.mainTitle}>Random Planet</h3>
      <div className={styles.image}>
        <ImgWrapper imgUrl={imageSrc} alt={name} />
      </div>

      <div className={styles.text}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>
          The climate on this planet is {climate}.
          The diameter of the planet is {diameter},
          the orbital period is {orbital_period} days,
          gravity is {gravity}.
        </p>
      </div>

    </div>
  )
}

export default PlanetInfo