import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Second from './components/Second'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {

  return (
    <>
      <Main />
      <Second />
      <Footer />
      <SpeedInsights/>
    </>
  )
}

export default App
