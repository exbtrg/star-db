import React from 'react'
import cn from 'classnames'
import styles from './Card.module.scss'

const Card = ({ children, loading }) => (
  <div className={cn(styles.card, { [styles.invisible]: loading })}>
    {children}
  </div>
)

export default Card