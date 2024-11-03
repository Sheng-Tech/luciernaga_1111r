import Imagen from "./perfil.png";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import styles from "./index.module.css";
import Redes from "components/Redes/Redes";

function Inicio() {

  return (
    <>
    <Banner img="banner" color="#154580" />
      <section className={styles.container}>
        
        <Titulo>
          <h1>Bienvenidos a Luciernaga_1111</h1>
            <span className={styles.span}>
              En esta página encontrarás un espacio dedicado al bienestar y la armonía interior, donde el Reiki es nuestro camino hacia la sanación y el equilibrio.
              El Reiki es una práctica de sanación energética que nos permite conectar con nuestra esencia y liberar bloqueos emocionales y físicos. A través de la transmisión de energía universal, Reiki ayuda a reducir el estrés, promover la relajación y fomentar una profunda paz interior. Con cada sesión, te ofrecemos un momento de conexión contigo mismo y un viaje hacia la renovación.
              Explora nuestros servicios y descubre cómo el Reiki puede ayudarte a alcanzar una vida en equilibrio, en paz y en sintonía con el mundo que te rodea.
              <Redes/>
            </span>

        </Titulo>
        <img className={styles.imagen} src={Imagen} alt="imagen de perfil" />
        
      </section>
      
    </>
  );
}

export default Inicio;
