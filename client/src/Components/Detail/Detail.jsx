// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from '../../redux/actions';
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () =>{

  const dispatch = useDispatch(getDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const driver = useSelector((state) => state.details);

  return (
    <>
    {
      driver ? (
        <div className={styles.container}>
          <div>
            <h2>{driver.name}</h2>
            <h2>{driver.lastname}</h2>
            <img src={driver.image} alt={driver.image} />
            <div>
              <p>{driver.nationality}</p>
              <p>{driver.birthdate}</p>
              <p>{driver.description}</p>
              <p>{driver.teams}</p>
            </div>
          </div>
      </div>
      ) : (

          <div>
        
          </div>

      )
    } 
    </>
  );
}

export default Detail;