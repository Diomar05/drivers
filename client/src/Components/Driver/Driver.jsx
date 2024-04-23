import React from "react";
import { NavLink } from "react-router-dom";

const Driver = ({id, name, image, teams}) => {
    return ( 
        <div>
           <NavLink to={`/detail/${id}`}>
            <div>
                <div>
                    <img src={image} alt={image} />
                    <h2>{name}</h2>
                    <h3>{teams}</h3>
                </div>
            </div>
           </NavLink>
        </div>
     );
}
 
export default Driver;