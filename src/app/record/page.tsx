import { MyFormRecord } from "@/component/FormRecord/MyFormRecord"
import Link from "next/link"

export default function Register(){

  return (
    <section className="bg-balloon-lg bg-no-repeat bg-center bg-cover h-lvh md:w-auto px-24 text-white font-sans flex items-center justify-center">
        <div className="lg:flex w-96 md:w-auto">
          <div className="h-full md:h-auto bg-balloon bg-cover bg-center bg-no-repeat py-20 px-10">
            <h1 className="text-3xl mb-3">AXIORA</h1>
            <p className="text-sm tracking-normal">Por favor completa el formulario para registrarte.
            <br/>
            Si ya eres miembro, por favor <Link href="/signin">inicia sesión</Link></p>
          </div>
          <div>
            <MyFormRecord />
          </div>
        </div>
    </section>
  )
};