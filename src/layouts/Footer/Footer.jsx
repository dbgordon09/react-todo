import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import links from './Links';

/**
 * Full width footer, containing an array of links as well as other important information.
 *
 * @type {React.FunctionComponent}
 */
export default () => (
  <footer className={styles.navbar}>
    <nav className="flex h-full">
      <Link to="/" className={`${styles.navbar__home} h-full pr-4`}>
        <img
          className={`${styles.navbar__logo} h-full float-left`}
          src="/images/logo.svg"
          alt="navbar_logo"
        />
      </Link>
      {links.map((link) => (
        <div className="h-full table" key={link.url}>
          <Link
            to={link.url}
            className={`${styles.navbar__links} h-full table-cell align-middle`}
          >
            {link.title}
          </Link>
        </div>
      ))}
    </nav>
  </footer>
);
