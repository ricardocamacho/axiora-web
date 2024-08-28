"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/index.module.scss";
import dynamic from "next/dynamic";

const DynamicLogin = dynamic(() => import('../../components/LoginForm'));
const DynamicRegister = dynamic(() => import('../../components/RegisterForm'))

const LoginOrRegister = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const variantsLogin = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const variantsRegister = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="visible"
      className={styles.login_container}
      aria-label={
        isLoginForm
          ? "Formulario de inicio de sesión"
          : "Formulario de registro"
      }
    >
      <section>
        <header>
          <h1>AXIORA</h1>
          <p>
            {isLoginForm
              ? "Por favor ingresa tus credenciales para ingresar. Si aún no eres miembro, por favor Regístrate."
              : "Crea una cuenta para disfrutar de todos los beneficios de Axiora."}
          </p>
        </header>
        {isLoginForm ? (
          <motion.div variants={variantsLogin} initial="hidden" animate="visible">
            <DynamicLogin toggleForm={toggleForm} />
          </motion.div>
        ) : (
          <motion.aside variants={variantsRegister} initial="hidden" animate="visible">
            <DynamicRegister toggleForm={toggleForm} />
          </motion.aside>
        )}
      </section>
    </motion.main>
  );
};

export default LoginOrRegister;