import { MyForm } from "@/component/FormSignIn/MyForms"
import Link from "next/link"

export default function SignIn(){

  return (
    <section className="bg-balloon-lg bg-no-repeat bg-center bg-cover h-lvh md:w-auto px-24 text-white flex items-center justify-center">
        <div className="lg:flex w-96 md:w-auto">
          <div className="h-full md:h-auto bg-balloon bg-cover bg-center bg-no-repeat py-20 px-10">
            <h1 className="text-3xl mb-3">AXIORA</h1>
            <p className="text-sm tracking-normal">Por favor ingresa tus credenciales para ingresar.
            <br/>
            Si aún no eres miembro, por favor <Link href="/register">Regrístrate.</Link></p>
          </div>
          <div>
           < MyForm />
          </div>
        </div>
    </section>
  )
};