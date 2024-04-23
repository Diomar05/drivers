import React from 'react'
import Driver from "../Driver/Driver";
import { useEffect } from "react";
import { getDrivers } from '../../redux/actions';
import { useSelector, useDispatch } from "react-redux";
// import Paginacion from '../Paginacion/Paginacion'
// import styles from './Drivers.module.css'

const Drivers = () => {
    const dispatch = useDispatch();
    const drivers = useSelector((state) =>state.allDrivers)

    useEffect(() => {dispatch(getDrivers());}, [dispatch]);
    

  return (
    <div>
      <div>
        {drivers.map((driver) => {
          return (
            <Driver 
            // key={driver.id} 
            image={driver.image} 
            name={driver.name} 
            teams={driver.teams}
             />
          );
        })}
      </div>

      <div>
      {/* <Paginacion
              dogsPage={dogsPage}
              allDogs={allDogs.length}
              paginacion={paginacion}
              currentPage={currentPage}
          /> */}
      </div>
      
    </div>
  );
};

export default Drivers;
