import React from 'react';
import styles from './Navbar.module.scss';
import links from './Links';

export default () => {
  return (
    <header className={styles.navbar}>
      <nav className="flex h-full">
        <a href="/" className={`${styles.navbar__home} h-full pr-4`}>
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
        </a>
        {links.map((link, index) => (
          <div className="h-full table" key={index}>
            <a
              href={link.url}
              className={`${styles.navbar__links} h-full table-cell align-middle`}
            >
              {link.title}
            </a>
          </div>
        ))}
      </nav>
    </header>
  );
};
