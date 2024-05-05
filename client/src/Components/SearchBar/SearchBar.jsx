import styles from './SearchBar.module.css'
import React, { useState }from "react";
import { useDispatch } from "react-redux";
import { getDriversByName } from "../../redux/actions";

const SearchBar = () => {

    const [driversState, setDriversState] = useState("");
    const dispatch = useDispatch();
  
    function handleClick(e){
      e.preventDefault();
     if (driversState.length === 0) {
      return alert("Por Favor Escribe un nombre para iniciar la Busqueda")
    } else{
      dispatch(getDriversByName(driversState))
      setDriversState()
    }
  }
    return ( 
      <div className={styles.container}>
        <div className={styles.searchform} >
          <input
            className={styles.searchtext }
            placeholder="Buscar..."
            type="text"
            value={driversState}
            onChange={(d) => setDriversState(d.target.value)}
          />
          
          <button className={styles.searchbutton} type="submit" onClick={handleClick}>
            <span>Search</span>
          </button>
        </div>  
      </div>
     );
  }
 
export default SearchBar;