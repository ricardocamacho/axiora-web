import Link from "next/link"

export default function SignIn(){
  return (
    <div>
      <Link href="/dashboard">
        inicia sesión
      </Link>
      <br/>
      <Link href="/record">
        Registrate
      </Link>
      <h1 className="flex justify-center text-3xl">SignIn</h1>
    </div>
  )
};