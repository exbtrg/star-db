import React, { useState, useEffect } from 'react'
import { string } from 'prop-types'
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
    <img onError={onImgErr} src={url} alt={alt} />
  )
}

ImgWrapper.protoTypes = {
  imgUrl: string,
  alt: string
}

export default ImgWrapper