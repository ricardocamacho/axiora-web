import Image from "next/image"
import Link from "next/link"



export default function dashboard(){
    return (
        <section className="main-container">
            <div className="nav-content-main">
                <h1 className="text-3xl text-black-primary mb-5">Cuentas</h1>
                <ul className="text-sm">
                    <li>
                        <Link href="#" className="text-black-primary">Inicio</Link>
                    </li>
                    <li className="right-line text-black-secondary">Cuentas</li>
                </ul>
            </div>
            <div className="separator mb-8"></div>
            <button className="bg-button-color text-white text-sm rounded-full px-5 py-2 mb-5 hover:bg-hover-button-color">
                <Link href="#">
                    Agregar cuenta de Mercadolibre
                </Link>
            </button>
            <p className="text-sm text-black-primary mb-6">Para agregar una cuenta de Shopify por favor <Link href="#" className="hover:text-hover-text-color">contáctanos</Link></p>
            {/* pasar esta parte a componentes */}
            <div className="shadow-card flex items-center px-8 py-3 bg-white-primary w-full">
                <div className="flex items-center w-1/2 gap-12 text-black-primary text-md">
                    <Image src="logos/mobile-axiora.svg" alt="logo" width={70} height={70}/>
                    <h2>Jhonatan Villamizar</h2>
                </div>
                <div className="flex items-center justify-evenly w-full text-black-secondary text-xs">
                    <p>MercadoLibre</p>
                    <p>01/02/2000</p>
                    <p className="rounded-full bg-button-color text-white px-3 py-1 font-bold text-[10px]">ACTIVA</p>
                </div>
            </div>
        </section>
    )
  };