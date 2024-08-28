import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from "../styles/index.module.scss";

const Inventarios: React.FC = () => {
  const [sku, setSku] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Actualizando inventario:', { sku, cantidad });
  };

  return (
    <motion.div
      className="inventarios"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className={styles.inventarioContainer}>
        <h1>Inventarios</h1>
        <p>Actualice el inventario en todas sus cuentas vinculadas</p>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="sku">SKU</label>
            <input
              type="text"
              id="sku"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cantidad">Cantidad</label>
            <input
              type="number"
              id="cantidad"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
            />
          </div>
          <button type="submit">Actualizar Inventario</button>
        </form>
      </section>
    </motion.div>
  );
};

export default Inventarios;