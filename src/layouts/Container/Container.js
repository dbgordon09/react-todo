import React from "react";
import styles from "./Container.module.css";

export default ({ children }) => {
  return <div className={`${styles.container}`}>{children}</div>;
};
