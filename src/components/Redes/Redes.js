import styles from "./Redes.module.css";

function Redes () {
    return (
        <>
        <ul className={styles.title}>
            <li className={styles.items}><a href="https://wa.me/13616943361/?text=Hola%20,%20estoy%20interesado/a%20en… " target="_blank"><i class="fa-brands fa-whatsapp redesSociales__img fa-2x"></i></a></li>
            <li className={styles.items}><a href="https://www.tiktok.com/@luciernaga_1133" target="_blank"><i class="fa-brands fa-tiktok redesSociales__img fa-2x"></i></a></li>
            <li className={styles.items}><a href="https://www.instagram.com/luciernaga_1111/" target="_blank"><i class="fa-brands fa-instagram redesSociales__img fa-2x"></i></a></li>
        </ul>
        </>
    )
    
}

export default Redes