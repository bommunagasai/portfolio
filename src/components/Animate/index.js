import React, { useEffect } from 'react'
import AOS from 'aos'
const Animate = ({
  aosType,
  aosDuriation,
  aosDelay,
  children,
}) => {
  useEffect(() => {
    AOS.refresh()
  }, [])
  return (
    <div data-aos={aosType} data-aos-delay={aosDelay} data-aos-duration={aosDuriation}>
      {children}
    </div>
  )
}

export default Animate