import Link from "next/link";
import Image from "next/image";
import "./module.css"

export const MyForm = () => {
  return (
    <form className="form-container">
      <div>
        <Image className="bg-img" src="logos/black-axiora.svg" alt="logo axiora" width={125} height={125} />
      </div>
      <h1 className="title">Iniciar sesión</h1>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="links">
        <Link href="/register" className="text-register">
          Regístrate
        </Link>
        <Link href="/dashboard" className="button">
          INICIAR SESIÓN
        </Link>
      </div>
    </form>
  );
};

