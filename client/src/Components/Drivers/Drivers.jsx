import React from 'react'
import Driver from "../Driver/Driver";
import { useEffect, useState } from "react";
import { getDrivers } from '../../redux/actions';
import { useSelector, useDispatch } from "react-redux";
import Paginacion from '../Paginacion/Paginacion'
import styles from './Drivers.module.css'

const Drivers = () => {
    const dispatch = useDispatch();
    const allDrivers = useSelector((state) =>state.allDrivers)

    const [actualPage, setActualPage] = useState(1)

    const [driverPage] = useState(9);

    const driverFinal = actualPage * driverPage;

    const driverInicial = driverFinal - driverPage;

    const driver = allDrivers.slice(driverInicial, driverFinal)

    const paginacion = (pageNumber) => {setActualPage(pageNumber);}


    useEffect(() => {dispatch(getDrivers());}, [dispatch]);
    

  return (
    <div className={styles.container}>
      <div className={styles.card} >
        {driver.map((driver) => {
          return (
            <Driver 
            key={driver.id} 
            id={driver.id}
            image={driver.image} 
            name={driver.name} 
            lastname={driver.lastname}
            teams={driver.teams}
             />
          );
        })}
      </div>

      <div>
      <Paginacion
        driverPage={driverPage}
        allDrivers={allDrivers.length}
        paginacion={paginacion}
        actualPage={actualPage}
              
          />
      </div>
      
    </div>
  );
};

export default Drivers;
