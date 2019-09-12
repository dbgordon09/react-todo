import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Navbar from '../layouts/Navbar/Navbar';
import Container from '../layouts/Container/Container';
import Footer from '../layouts/Footer/Footer';
import Router from '../utils/Router';

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Container>
        <Route path="/todo" component={Navbar} />
      </Container>
      <Footer />
    </Router>
  </div>
);

export default App;
