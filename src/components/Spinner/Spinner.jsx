import React from 'react'
import style from './Spinner.module.scss'
import cn from 'classnames'
import Card from '../Card'
import SomeError from '../SomeError'

const Spinner = ({ error, loading }) => {

  return (
    <Card>
      {
        error ? (
          <SomeError />
        ) : (
            <div className={cn(style.spinner, { [style.visible]: loading })} style={{ padding: '2.1rem 0' }} />
          )
      }
    </Card>
  )
}

export default Spinner