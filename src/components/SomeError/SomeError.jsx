import React from 'react'
import style from './SomeError.module.scss'
import { ReactComponent as Icon } from './death-star.svg'

const SomeError = () => (
  <div className={style.error}>
    <p>Ooops...</p>
    <p>Server is not available</p>
    <Icon />
  </div>
)

export default SomeError