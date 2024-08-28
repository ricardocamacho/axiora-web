import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/index.module.scss";

const RegisterForm = ({ toggleForm }: { toggleForm: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleRegisterFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/register', {
        email,
        password,
      });
      console.log('User registered:', response.data);
      setRegistrationSuccess(true);
      setRegistrationError("");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 409) {
          setRegistrationError("El email ya existe");
        } else {
          setRegistrationError("Error durante el registro");
        }
      } else {
        setRegistrationError("Error desconocido durante el registro");
      }
      setRegistrationSuccess(false);
    }
  };

  return registrationSuccess ? (
    <div className={styles.registrationSuccess}>
      <p>Registro exitoso.</p>
      <Image
        src="/logos/black-axiora.svg"
        alt="logo"
        width={200}
        height={60}
      />
      <button onClick={toggleForm}>Iniciar Sesión</button>
    </div>
  ) : (
    <form onSubmit={handleRegisterFormSubmit}>
      <Image
        src="/logos/black-axiora.svg"
        alt="logo"
        width={150}
        height={60}
      />
      <h2>Registrarse</h2>
      {registrationError && <p className={styles.errorMessage}>{registrationError}</p>}
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
          className={
            isPasswordFocused || password ? styles.labelUp : ""
          }
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
  );
};

export default RegisterForm;
