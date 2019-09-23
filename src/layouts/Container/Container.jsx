import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

/**
 * Container for page based content to be rendered into.
 *
 * NOTE: SHOULD BE PASSED A CHILDREN TO RENDER.
 * @type {React.FunctionComponentElement<React.ReactNode|React.ReactNodeArray>}
 * @param {React.ReactNode|ReactNodeArray} children - Content to be rendered within the container.
 */
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
