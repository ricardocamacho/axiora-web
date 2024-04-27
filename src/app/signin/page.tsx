import { MyForm } from "@/component/MyForms"
import Link from "next/link"

export default function SignIn(){

  return (
    <section className="bg-balloon-lg bg-no-repeat bg-center bg-cover h-[100vh] text-white font-sans flex items-center justify-center">
        <div className="flex">
          <div className="h-[455px] bg-balloon bg-cover bg-center bg-no-repeat py-20 px-12">
            <div className="">
              <h1 className="text-3xl mb-3">AXIORA</h1>
              <p className="text-sm tracking-normal">Por favor ingresa tus credenciales para ingresar.
              <br/>
              Si aún no eres miembro, por favor <Link href="/record">Regrístrate.</Link></p>
            </div> 
          </div>
          <div>
           < MyForm />
          </div>
        </div>
    </section>
  )
};