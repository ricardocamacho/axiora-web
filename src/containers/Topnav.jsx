import Link from "next/link";
import Image from "next/image";

export default function Topnav() {
  return (
    <nav className="flex justify-between items-center h-24 px-12 bg-[#ffffff]">
      <div>🍔</div>
      <Link href="#">
        <Image
          src="logos/black-axiora.svg"
          alt="logo axiora"
          width={125}
          height={125}
        />
      </Link>
      <ul className="flex-col">
        <li>User name</li>
        <Link href="/signin">cerrar sesión</Link>
      </ul>
    </nav>
  );
}
