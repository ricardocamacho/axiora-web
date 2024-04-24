import Link from "next/link"

export default function Record(){
    return (
        <div>
            <Link href="/signin">
               Si ya estas registrado inicia sesión
            </Link>
            <h1 className="flex justify-center text-3xl">Record</h1>
        </div>
    )
  };