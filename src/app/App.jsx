import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from '../layouts/Navbar/Navbar';
import Container from '../layouts/Container/Container';
import Footer from '../layouts/Footer/Footer';
import Router from '../utils/Router';
import store from '../store';

/**
 * React Application. ⚛️
 *
 * @type {React.FunctionComponent}
 */
const App = () => (
  <Provider store={store}>
    <div className="App">
      <Router>
        <Navbar />
        <Container>
          <Route path="/todo" component={Navbar} />
        </Container>
        <Footer />
      </Router>
    </div>
  </Provider>
);

export default App;
