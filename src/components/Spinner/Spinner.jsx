import React from 'react'
import style from './Spinner.module.scss'
import cn from 'classnames'
import SomeError from '../SomeError'

const Spinner = ({ error, loading }) => {

  return (
    <div className="card">
      {
        error ? (
          <SomeError />
        ) : (
            <div
              className={cn(style.spinner, { [style.visible]: loading })}
              style={{ padding: '2.1rem 0' }}
            />
          )
      }
    </div>
  )
}

export default Spinner