import React, { useState } from "react";
import styles from "./NavBar.module.css"
import { Link  } from "react-router-dom";
import { useRef } from "react";
import * as AllImages from '../../media/realMedia/indexMedia.js';
const NavBar = () => {

    return(
        <div className={styles.container}>
            <div className={styles.logo}>
            <img className={styles.img} src={AllImages.logo} alt="none"></img>
            <img className={styles.span} src={AllImages.logoSpan} alt="none"></img>
            </div>
        <nav className={styles.nav}>
            <Link to = "/">Inicio</Link>
            <Link to="/">Nuestros Productos</Link>
            <Link to="/contact">Contacto</Link>
        </nav>
    </div>
    )
}   
export default NavBar;