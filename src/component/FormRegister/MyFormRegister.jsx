import Link from "next/link";
import Image from "next/image";
import "../FormSignIn/module.css"

export const MyFormRegister = () => {
  return (
    <form className="form-container">
      <div>
        <Image className="bg-img" src="logos/black-axiora.svg" alt="logo axiora" width={125} height={125} />
      </div>
      <h1 className="title">Registro</h1>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="links">
          <Link href="/register" className="record"></Link>
        <button>
          <Link href="/dashboard">
            Regístrate
          </Link>
      </button>
      </div>
    </form>
  );
};
