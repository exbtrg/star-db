import React from 'react'
import { oneOf, string } from 'prop-types'
import style from './Spinner.module.scss'
import SomeError from '../SomeError'

const Spinner = ({ error }) => {

  if (error) {
    return <SomeError />
  }

  return (
    <div
      className={style.spinner}
      style={{ padding: '2.1rem 0' }}
    />
  )
}

Spinner.propTypes = {
  error: oneOf([null, string])
}

export default Spinner