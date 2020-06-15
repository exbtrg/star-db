import React from 'react'
import styles from './PlanetInfo.module.scss'
import cn from 'classnames'

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
      <img src={imageSrc} alt={name} className={styles.image} />
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