import { Link } from "react-router-dom"
import styles from "./Cabacera.module.css"
import logo from "./logo.png"
import CabeceraLink from "../CabeceraLink/CabeceraLink"

function Cabecera(){
    return(
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Luciernaga_1111"/> <span>Luciernaga_1111</span>
                </section>
            </Link>
            <nav className={styles.nav}>
                <CabeceraLink url="./">Home</CabeceraLink>
                <CabeceraLink url="./Servicios">Servicios</CabeceraLink>
                <CabeceraLink url="./Talleres">Talleres</CabeceraLink>
                <CabeceraLink url="./Tarifas">Tarifas y Promociones</CabeceraLink>
                <CabeceraLink url="./About">Sobre mi</CabeceraLink>
                <CabeceraLink url="./Contacto">Contacto</CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera