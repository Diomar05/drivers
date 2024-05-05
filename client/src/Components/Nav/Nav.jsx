import React, { useEffect } from "react";
import styles from "./Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getDrivers,
  getTeams,
  orderByName,
  orderByBirthdate,
  orderByTeams,
  filterCreated
  
} from "../../redux/actions";

const Nav = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) =>
    state.teams.sort((a, b) => a.name.localeCompare(b.name))
  );
  const allDrivers = useSelector((state) => state.allDrivers);

  useEffect(() => {
    dispatch(getDrivers());
    dispatch(getTeams());
  }, [dispatch]);


  function handleReset() {
    dispatch(getDrivers()); // Volver a cargar los conductores
    dispatch(getTeams()); // Volver a cargar los equipos si es necesario
  }

  function handleClickOrderByName(order) {
    dispatch(orderByName(order));
  
}

function handleClickorderByBirthdate(order) {
  dispatch(orderByBirthdate(order));
}

function handleClickorderByTeams(order) {
  dispatch(orderByTeams(order));
}

function handleClickCreated(order) {
  dispatch(filterCreated(order));
}

  

  return (
    <div className={styles.container}>
      <div>
        <h4>Buscar por filtros</h4>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
        ></div>
      </div>

      <hr />

      <div>
        <button onClick={handleReset}>Reiniciar</button>{" "}
        {/* Botón para reiniciar */}
      </div>

      <div>
        <h5>Orden por Nombre</h5>
        <button onClick={() => handleClickOrderByName("asc")}>A - Z</button>
        <button onClick={() => handleClickOrderByName("desc")}>Z - A</button>
      </div>

      <div>
        <h5>Orden de Nacimiento</h5>
        <button onClick={() => handleClickorderByBirthdate('asc')}>Cumpleaños</button>
        {/* <button onClick={() => handleClickorderByBirthdate('desc')}>Z - A</button> */}
      </div>

      <div>
        <h5>Orden de Equipos</h5>
        <button onClick={() => handleClickorderByTeams('asc')}>Equipos</button>
        {/* <button onClick={() => handleClickorderByTeams('desc')}>Z - A</button> */}
      </div>

      <div>
        <h5>Ordenar por Fuente </h5>
        <button onClick={() => handleClickCreated('Api')}>Api</button>
        <button onClick={() => handleClickCreated('creados')}>DB</button>
      </div>

     

   
      
    </div>
  );
};
export default Nav;
