import React, { cloneElement, useState } from 'react'
import style from './LayoutPage.module.scss'
import { ChangeIdContext } from './context'

const LayoutPage = ({ List, Card }) => {
  // const [currentId, setCurrentId] = useState('1')

  // const onChangeCurrentId = (id) => {
  //   setCurrentId((prev) => prev !== id ? id : prev)
  // }

  return (
    <section className={style.row}>
      <div className={style.one}>
        {/* <ChangeIdContext.Provider value={{ onChangeCurrentId, currentId }}> */}
        {cloneElement(List)}
        {/* </ChangeIdContext.Provider> */}
      </div>

      <div className={style.two}>
        {cloneElement(Card)}
      </div>
    </section>
  )
}


export default LayoutPage