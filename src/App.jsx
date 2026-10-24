import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routing from './routes/Routing'
import ScrollToTop from './components/ScrollToTop'
import ScrollToHash from './components/ScrollToHash'

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToHash />
        <Routing />
      </ BrowserRouter>
    </>
  )
}

export default App
