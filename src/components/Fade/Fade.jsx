import React, { useEffect, useState } from 'react'
import { bool, node } from 'prop-types'

const Fade = ({ show, children }) => {
  const [shouldRender, setRender] = useState(show)

  useEffect(() => {
    if (show) setRender(true)
  }, [show])

  const onAnimationEnd = () => {
    if (!show) setRender(false)
  }

  return (
    shouldRender && (
      <div
        style={{ animation: `${show ? "fadeIn" : "fadeOut"} 0.2s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  )
}

Fade.propTypes = {
  show: bool,
  children: node
}

export default Fade