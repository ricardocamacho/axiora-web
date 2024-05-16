import Link from "next/link"


export default function dashboard(){
    return (
        <section className="main-container">
            <div className="nav-content-main">
            <h1 className="text-3xl text-[#3A3A3A]">Cuentas</h1>
                <nav>
                    <ul className="text-sm">
                        <li>
                            <Link href={''} className="text-[#3A3A3A]">Inicio</Link>
                        </li>
                        <li className="right-line text-[#6C757D]">Cuentas</li>
                    </ul>
                </nav>
            </div>
            <div className="separator my-5"></div>
        </section>


    )
  };