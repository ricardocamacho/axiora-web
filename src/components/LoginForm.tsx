import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/index.module.scss";

const LoginForm = ({ toggleForm }: { toggleForm: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleLoginFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError("");

    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });
      console.log('User logged in:', response.data);
      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userEmail', email);

      setTimeout(() => {
        router.push('/dashboard');
      }, 1000);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401) {
          setLoginError("Credenciales inválidas");
        } else {
          setLoginError("Error durante el inicio de sesión");
        }
      } else {
        setLoginError("Error desconocido durante el inicio de sesión");
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleLoginFormSubmit}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <Image
            src="/logos/black-axiora.svg"
            alt="logo"
            width={150}
            height={60}
          />
        </Link>
      </div>
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
      {loginError && <p className={styles.errorMessage}>{loginError}</p>}
      <div className={styles.sesion_registor}>
        <button type="submit" disabled={isLoading}>
          {isLoading ? (
            <span className={styles.loader}></span>
          ) : (
            "INICIAR SESIÓN"
          )}
        </button>
        <Link href="#" onClick={toggleForm} aria-label="Registrarse">
          Regístrate
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;