import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
    </div>
  )
}

export default App