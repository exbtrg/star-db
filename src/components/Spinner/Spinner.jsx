import React from 'react'
import style from './Spinner.module.scss'
import SomeError from '../SomeError'

const Spinner = ({ error, loading }) => {

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

export default Spinner