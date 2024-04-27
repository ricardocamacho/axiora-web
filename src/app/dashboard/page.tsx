import Link from "next/link"

export default function dashboard(){
    return (
        <div>
            <nav className="bg-blue-500 flex justify-end">
                <ul className="flex-col">
                    <li>User name</li>
                    <Link href="/signin">
                        cerrar sesión
                    </Link>
                </ul>
            </nav>
        </div>
    )
  };