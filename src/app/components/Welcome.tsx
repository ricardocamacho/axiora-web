import styles from "../styles/index.module.scss";

const Welcome = () => {
    return(
        <>
            <main className={styles.welcome}>
                <h2>¿Estás list@?</h2>
                <p>Axiora es la plataforma de sincronización de canales de venta que se destaca por su sencillez pero al mismo tiempo por su robustez y eficiencia</p>
                <span>¿Tienes más dudas?</span>
                <button>CONTÁCTANOS</button>
            </main>
        </>
    )
}
export default Welcome;