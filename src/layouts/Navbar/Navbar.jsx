import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import links from './Links';

/**
 * Full width navigation bar, containing an array of links for accessing
 * key application content.
 *
 * @type {React.FunctionComponent}
 */
const Navbar = () => (
  <header className={styles.navbar}>
    <nav className="flex h-full">
      <Link to="/" className={`${styles.navbar__home} h-full pr-4`}>
        <img
          className={`${styles.navbar__logo} h-full float-left`}
          src="/images/logo.svg"
          alt="navbar_logo"
        />
        <h4
          className={`${styles.navbar__title} h-full float-right hidden sm:block`}
        >
          React ToDo
        </h4>
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
  </header>
);

export default Navbar;
