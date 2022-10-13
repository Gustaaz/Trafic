import styles from "./Contact.module.css";
import Teach from "../../img/imagem2.jpg";

function Contact() {

    return (
        <div className={styles.home_container}>
            <h2>Contato</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam lacus non pretium pharetra. Maecenas aliquam nulla rutrum fringilla sodales. Duis condimentum sollicitudin augue, sit amet ornare eros pretium sit amet. Fusce lacinia aliquet est at dictum. Morbi pharetra, arcu eu convallis congue, odio dolor consequat arcu, vitae ornare nisl lacus non libero.
            </p>
            <img width="620px" src={Teach}></img>
            <div>

            </div>
            <strong>e-mail:</strong> trafficeireli@gmail.com <br></br>
            <strong>telefone:</strong>  (69) 9999-9999
        </div>
    )
}

export default Contact