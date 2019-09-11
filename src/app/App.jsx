import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from '../layouts/Navbar/Navbar';
import Container from '../layouts/Container/Container';
import Router from '../utils/Router';

const App = () => (
  <div>
    <Router>
      <Navbar />
      <Container>
        <Route path="/todo" component={Navbar} />
      </Container>
    </Router>
  </div>
);

export default App;
