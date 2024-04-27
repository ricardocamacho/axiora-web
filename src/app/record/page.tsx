import Link from "next/link"
import Image from "next/image"

export default function Record(){
    return (
        <section>
            <Image 
                src="/login/balloon-lg.jpg" 
                alt="fondo de pantalla" 
                width={1920} height={1080} 
                priority={false}
                className="h-[100vh] absolute -z-10" />
            <div className="text-white">
                <Link href="/signin">
                    Si ya estas registrado inicia sesión
                </Link>
            </div>
            
        </section>
    )
  };