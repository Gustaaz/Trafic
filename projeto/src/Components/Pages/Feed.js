import styles from "./Feed.module.css";
import Teach from "../../img/imagem2.jpg";


function Feed() {
    return (
        <div className={styles.home_container}>
            <h3>Crie sua Postagem</h3>
            <form className={styles.formulario}>
                <input type="text" name="tituloPostagem" className={styles.campo_formulario} placeholder="Título Da Postagem" />
                <input type="text" name="email" className={styles.campo_formulario} placeholder="E-mail" />
                <textarea name="postagem" className={styles.campo_formulario} placeholder="Postagem" ></textarea>
                <button type="submit" className={styles.botao_formulario}> Enviar </button>
            </form>

            <div className={styles.feed_postagem}>
                <h2>Feed De Notícias</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam lacus non pretium pharetra. 
                    Maecenas aliquam nulla rutrum fringilla sodales. Duis condimentum sollicitudin augue, sit amet ornare eros pretium sit amet. 
                    Fusce lacinia aliquet est at dictum. Morbi pharetra, arcu eu convallis congue, odio dolor consequat arcu, vitae ornare nisl 
                    lacus non libero.
                </p>
                <img width="620px" src={Teach}></img>
            </div>


            <div className={styles.feed_postagem}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam lacus non pretium pharetra. 
                    Maecenas aliquam nulla rutrum fringilla sodales. Duis condimentum sollicitudin augue, sit amet ornare eros pretium sit amet. 
                    Fusce lacinia aliquet est at dictum. Morbi pharetra, arcu eu convallis congue, odio dolor consequat arcu, vitae ornare nisl 
                    lacus non libero.
                </p>
                <img width="620px" src={Teach}></img>
            </div>


            <div className={styles.feed_postagem}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam lacus non pretium pharetra. 
                    Maecenas aliquam nulla rutrum fringilla sodales. Duis condimentum sollicitudin augue, sit amet ornare eros pretium sit amet. 
                    Fusce lacinia aliquet est at dictum. Morbi pharetra, arcu eu convallis congue, odio dolor consequat arcu, vitae ornare nisl 
                    lacus non libero.
                </p>
                <img width="620px" src={Teach}></img>
            </div>
        </div>
    )
}

export default Feed
