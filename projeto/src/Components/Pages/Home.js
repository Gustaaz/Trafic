import styles from "./Home.module.css";
import Teach from "../../img/imagem2.jpg";

function Home() {
    return (
        <div className={styles.home_container}>
            <div className={styles.area_postagens}>
                <div className={styles.postagem}>
                    <h2>Titulo da postagem 1</h2>
                    <spam className={styles.data_postagem}>Postado 10 de abril de 2022</spam>
                    <img width="620px" src={Teach}></img>
                    <p>
                        Et architecto itaque ut optio sunt ad illum sunt et distinctio cumque!
                        Cum dolorem laboriosam ut saepe eveniet et dolorem dolorem et iste dolor.
                        Et architecto itaque ut optio sunt ad illum sunt et distinctio cumque!
                        Cum dolorem laboriosam ut saepe eveniet et dolorem dolorem et iste dolor.
                        Et architecto itaque ut optio sunt ad illum sunt et distinctio cumque!
                        Cum dolorem laboriosam ut saepe eveniet et dolorem dolorem et iste dolor.
                    </p>
                    <a href="">Leia Mais</a>
                </div>

                <div className={styles.postagem}>
                    <h2>Titulo da postagem 2</h2>
                    <spam className={styles.data_postagem}>Postado 15 de abril de 2022</spam>
                    <img width="620px" src={Teach}></img>
                    <p>
                        Et architecto itaque ut optio sunt ad illum sunt et distinctio cumque!
                        Cum dolorem laboriosam ut saepe eveniet et dolorem dolorem et iste dolor.
                        Et architecto itaque ut optio sunt ad illum sunt et distinctio cumque!
                        Cum dolorem laboriosam ut saepe eveniet et dolorem dolorem et iste dolor.
                        Et architecto itaque ut optio sunt ad illum sunt et distinctio cumque!
                        Cum dolorem laboriosam ut saepe eveniet et dolorem dolorem et iste dolor.
                    </p>
                    <a href="">Leia Mais</a>
                </div>

            </div>
            <div className={styles.area_lateral}>
                <div className={styles.conteudo_lateral}>
                    <h3>Postagens Recentes</h3>
                    <div className={styles.postagem_lateral}>
                        <p>Et architecto itaque ut optio sunt ad illum sunt et distinctio cumque!
                        Cum dolorem laboriosam ut saepe eveniet et dolorem dolorem et iste dolor.</p>
                        <a href="">Leia Mais</a>  
                    </div>    
                    <div className={styles.postagem_lateral} styles="Border:bottom:none;">
                        <p>Et architecto itaque ut optio sunt ad illum sunt et distinctio cumque!
                        Cum dolorem laboriosam ut saepe eveniet et dolorem dolorem et iste dolor.</p>
                        <a href="">Leia Mais</a>  
                    </div>
                </div>
            </div>



            <div className={styles.area_lateral}>
                <div className={styles.conteudo_lateral}>
                    <h3>Últimas Notícias</h3>
                    <div className={styles.postagem_lateral}>
                        <p>Et architecto itaque ut optio sunt ad illum sunt et distinctio cumque!
                        Cum dolorem laboriosam ut saepe eveniet et dolorem dolorem et iste dolor.</p>
                        <a href="">Leia Mais</a>  
                    </div>    
                    <div className={styles.postagem_lateral}>
                        <p>Et architecto itaque ut optio sunt ad illum sunt et distinctio cumque!
                        Cum dolorem laboriosam ut saepe eveniet et dolorem dolorem et iste dolor.</p>
                        <a href="">Leia Mais</a>  
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home
