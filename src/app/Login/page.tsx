"use client";

import Image from "next/image";
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/index.module.scss";
import Link from "next/link";

const LoginOrRegister = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [name, setName] = useState("");
  const [isNameFocused, setIsNameFocused] = useState(false);

  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value);
  const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value);
  const handleNameChange = (e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value);

  const handleLoginFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleRegisterFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    // Limpiar los campos al cambiar de formulario
    setEmail("");
    setPassword("");
    setName("");
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
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
        <figure>
          <h1>AXIORA</h1>
          <p>
            {isLoginForm
              ? "Por favor ingresa tus credenciales para ingresar. Si aún no eres miembro, por favor Regístrate."
              : "Crea una cuenta para disfrutar de todos los beneficios de Axiora."}
          </p>
        </figure>
        {isLoginForm ? (
          <form onSubmit={handleLoginFormSubmit}>
            <Image
              src="/logos/black-axiora.svg"
              alt="logo"
              width={150}
              height={60}
            />
            <h2>Iniciar Sesión</h2>
            <div className={styles.formGroup}>
              <label
                className={isEmailFocused || email ? styles.labelUp : ""}
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                required
                aria-required="true"
                aria-label="Ingrese su correo electrónico"
              />
            </div>
            <div className={styles.formGroup}>
              <label
                className={isPasswordFocused || password ? styles.labelUp : ""}
                htmlFor="password"
              >
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                required
                aria-required="true"
                aria-label="Ingrese su contraseña"
              />
            </div>
            <div className={styles.sesion_registor}>
              <button type="submit">INICIAR SESIÓN</button>
              <Link href="#" onClick={toggleForm} aria-label="Registrarse">
                Regístrate
              </Link>
            </div>
          </form>
        ) : (
          <form
            onSubmit={handleRegisterFormSubmit}
          >
            <Image
              src="/logos/black-axiora.svg"
              alt="logo"
              width={150}
              height={60}
            />
            <h2>Registrarse</h2>
            <div className={styles.formGroup}>
              <label
                className={isEmailFocused || email ? styles.labelUp : ""}
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                required
                aria-required="true"
                aria-label="Ingrese su correo electrónico"
              />
            </div>
            <div className={styles.formGroup}>
              <label
                className={isPasswordFocused || password ? styles.labelUp : ""}
                htmlFor="password"
              >
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                required
                aria-required="true"
                aria-label="Ingrese su contraseña"
              />
            </div>
            <div className={styles.sesion_registor}>
              <button type="submit">REGISTRARSE</button>
              <Link href="#" onClick={toggleForm} aria-label="Iniciar Sesión">
                Iniciar Sesión
              </Link>
            </div>
          </form>
        )}
      </section>
    </motion.main>
  );
};

export default LoginOrRegister;
