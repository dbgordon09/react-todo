import React from 'react'
import './App.css'
import Navbar from '../layouts/Navbar/Navbar'
import Container from '../layouts/Container/Container'
import { Route } from 'react-router-dom'
import Router from '../utils/Router'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Container>
          <Route path='/todo' component={Navbar} />
        </Container>
      </Router>
    </div>
  )
}

export default App
