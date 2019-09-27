import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

/**
 * Router that normalizes all paths, removing trailing slashes,
 * even if they matched a <Route> with a defined path.
 *
 * @see { @link https://github.com/ReactTraining/react-router-5-course/blob/master/src/utils/Router.js }
 *
 * NOTE: SHOULD BE PASSED CHILDREN TO RENDER.
 * @type {React.FunctionComponent<React.ReactNode>}
 */
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
