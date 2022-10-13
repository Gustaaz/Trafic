import styles from "./Rotas.module.css";
import Teach from "../../img/imagem2.jpg";


function Rotas() {
    return(
    <div className={styles.home_container}>
        <h2>Rotas</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam lacus non pretium pharetra. Maecenas aliquam nulla rutrum fringilla sodales. Duis condimentum sollicitudin augue, sit amet ornare eros pretium sit amet. Fusce lacinia aliquet est at dictum. Morbi pharetra, arcu eu convallis congue, odio dolor consequat arcu, vitae ornare nisl lacus non libero.
        </p>
        <img width="620px" src={Teach}></img>
    </div>
    )
}

export default Rotas
