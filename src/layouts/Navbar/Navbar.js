import React from "react";
import styles from "./Navbar.module.scss";
import links from "./Links";
import { Link } from "react-router-dom";

export default () => {
  return (
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
        {links.map((link, index) => (
          <div className="h-full table" key={index}>
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
};
