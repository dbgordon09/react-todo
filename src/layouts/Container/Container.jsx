import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

/**
 * Container for page based content to be rendered into.
 *
 * NOTE: SHOULD BE PASSED CHILDREN TO RENDER.
 * @type {React.FunctionComponent<React.ReactNode>}
 */
const Container = ({ children }) => (
  <div className={`${styles.container}`}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
