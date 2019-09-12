import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

const Container = ({ children }) => (
  <div className={`${styles.container}`}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
