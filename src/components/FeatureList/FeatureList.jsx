import React from 'react'
import { array } from 'prop-types'
import styles from './FeatureList.module.scss'

const FeatureList = ({ featureList }) => {
  return (
    <ul className={styles.list}>
      {featureList.map(({ key, value }) => (
        <li key={key} className={styles.item}>
          <p>{key}: {value}</p>
        </li>
      ))}
    </ul>
  )
}

FeatureList.propTypes = {
  featureList: array
}

FeatureList.defaultProps = {
  featureList: []
}

export default FeatureList