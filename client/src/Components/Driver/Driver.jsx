import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Driver.module.css";

const Driver = ({ id, name, lastname, image, teams }) => {
  return (
    <div className={styles.bloque}>
      <NavLink to={`/detail/${id}`} >
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.imgBx}>
              <img src={image} alt={image} />
              <div className={styles.contentBx}>
                <h2>{name}</h2>
                <h2>{lastname}</h2>
                <div className={styles.color}>
                  <h3>{teams}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Driver;
