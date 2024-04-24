import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Link href="/signin">cerrar sesión</Link>
            <nav>Navegación de las categorías</nav>
            { children }
        </main>
    )
}