import React, { useState, useEffect } from 'react'
import styles from './ImgWrapper.module.scss'
import fallBackImg from './404-error.svg'

const ImgWrapper = ({ imgUrl, alt }) => {
  const [url, setUrl] = useState(imgUrl)

  useEffect(() => {
    setUrl(imgUrl)
  }, [imgUrl])


  const onImgErr = () => {
    setUrl(fallBackImg)
  }

  return (
    <img onError={onImgErr} className={styles.image} src={url} alt={alt} />
  )
}

export default ImgWrapper