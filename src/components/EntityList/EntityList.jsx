import React from 'react'
import cn from 'classnames'
import { func, object } from 'prop-types'
import useRequest from '../../hooks/useRequest'
import styles from './EntityList.module.scss'
import { withRouter } from 'react-router-dom'
import Spinner from '../Spinner'
import ErrorBoundry from '../ErrorBoundry'

const EntityList = ({ getData, history }) => {
  const { data, loading, error } = useRequest(getData)

  const changeCurrentId = (id) => {
    const path = `${id}`
    history.push(path)
  }

  if (loading) {
    return (
      <div className={styles.list}>
        <Spinner error={error} />
      </div>
    )
  }

  return (
    <ErrorBoundry>
      <ul className={styles.list}>
        {data.map(({ name, id }) => (
          <li key={id} className={cn(styles.item, { [styles.active]: id === false })}>
            <button type="button" onClick={() => changeCurrentId(id)}>{name}</button>
          </li>
        ))}
      </ul>
    </ErrorBoundry>
  )
}

EntityList.propTypes = {
  getData: func,
  history: object
}

export default withRouter(EntityList)