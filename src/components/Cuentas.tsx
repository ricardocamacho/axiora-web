import { motion } from 'framer-motion';
import styles from "../styles/index.module.scss";

const Cuentas: React.FC = () => {
  return (
    <motion.div
      className="cuentas"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
    <section className={styles.cuentasContainer}>
    <h1>Cuentas</h1>
    <button>Agregar cuenta de Mercadolibre</button>
    <p>Para agregar una cuenta de Shopify por favor contáctanos</p>
    </section>
    </motion.div>
  );
};

export default Cuentas;
  