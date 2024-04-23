import React from "react";
import Styl from './Header.module.css'
import Logo from '../../assets/Logo.png'
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
    return ( 
        <div className={Styl.container}>
            <div className={Styl.nav}>
                <a href="/home" className={Styl.button}>Home</a>
                <a href="/create" className={Styl.button}>Create</a>
                <a href="/about" className={Styl.button}>About</a>
            </div>

            <div >
                <a href="/"><img src={Logo} alt="" className={Styl.Logo} /></a>
            </div>
            
            <div className={Styl.Search}>
                <SearchBar/>
            </div>

        </div>
     );
}
 
export default Header;