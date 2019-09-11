import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// Normalize all paths to not have trailing slashes even if they matched <Route> with one:
const Router = ({ children }) => (
  <BrowserRouter>
    <Route
      render={({ location: { pathname, search, hash } }) => (pathname !== '/' && pathname.slice(-1) === '/'
        ? (<Redirect to={`${pathname.slice(0, -1)}${search}${hash}`} />)
        : (children)
      )}
    />
  </BrowserRouter>
);

Router.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Router;
