import React, { useEffect } from 'react'
import withSizes from 'react-sizes'
import AOS from 'aos'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Works } from '../../sections/Works'
import AboutMe from '../../sections/AboutMe'

import 'aos/dist/aos.css'

const App = ({
  content,
  isMobile
}) => {
  useEffect(() => {
    AOS.init({ disable: isMobile })
  }, [])
  return (
    <>
      <Header {...content.header}/>
      <AboutMe {...content.aboutMe}/>
      <Works projects={content.projects}/>
      <Footer text={content.footer}/>
    </>
  )
}


export default withSizes(
  ({ width }) => ({
    isMobile: width < 480,
  })
)(App)