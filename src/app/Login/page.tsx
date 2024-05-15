'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/index.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de inicio de sesión
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const variants = {
    // hidden: { opacity: 0, y: 50 },
    // visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <motion.main 
      variants={variants}
      initial="hidden"
      animate="visible"
      className={styles.login_container}
      aria-label="Formulario de inicio de sesión"
    >
      <form onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            aria-required="true"
            aria-label="Ingrese su correo electrónico"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            aria-required="true"
            aria-label="Ingrese su contraseña"
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
        <p>
          ¿No tienes una cuenta?{' '}
          <a href="#" aria-label="Registrarse">
            Regístrate
          </a>
        </p>
      </form>
    </motion.main>
  );
};

export default Login;

