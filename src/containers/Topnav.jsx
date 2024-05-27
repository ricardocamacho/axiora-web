import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "@/component/svg/MenuIcon";
import { MobileMenuIcon } from "@/component/svg/MobileMenuIcon";

export default function Topnav() {
  return (
    <nav className="shadow-nav flex justify-between items-center h-24 px-12 bg-white-primary">
      <Link className="h-3 gap-0.5 flex fill-[#6C757D]" href="#">
        <MenuIcon />
      </Link>
      <Link href="#" className="w-48 flex justify-end">
        <Image
          priority
          src="/logos/black-axiora.svg"
          alt="logo axiora"
          width={125}
          height={125}
          className="logo-nav"
        />
      </Link>
      <div className="flex items-center gap-3 list-none text-black-secondary text-sm cursor-pointer">
        <Link href="/signin">example@correo.com</Link>
        <Link href="/signin" className="text-black text-lg flex items-center justify-center rounded-full w-10 h-10 bg-rounded-user">Ex</Link>
      </div>
    </nav>
  );
}
