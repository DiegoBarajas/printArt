import React from 'react'
import './App.css'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Paper from './components/Paper'
import Footer from './components/Footer'

const App = () => {
    return (
      <main>
        <Header/>
        <AboutUs/>
        <Services/>
        <Paper/>
        <Footer/>
      </main>
    )
}

export default App