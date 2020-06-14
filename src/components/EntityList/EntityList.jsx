import React, { useContext } from 'react'
import cn from 'classnames'
// import { func } from 'prop-types'
import styles from './EntityList.module.scss'
import { ChangeIdContext } from '../LayoutPage/context'
import { withRouter } from 'react-router-dom'

const EntityList = ({ data, history }) => {
  // const { onChangeCurrentId, currentId } = useContext(ChangeIdContext)
  const changeCurrentId = (id) => {
    const path = `${id}`

    history.push(path)
  }

  return (
    <ul className={styles.list}>
      {data.map(({ name, id }) => (
        <li key={id} className={cn(styles.item, { [styles.active]: id === false })}>
          <button type="button" onClick={() => changeCurrentId(id)}>{name}</button>
        </li>
      ))}
    </ul>
  )
}

// EntityList.propTypes = {
//   getData: func
// }

export default withRouter(EntityList)