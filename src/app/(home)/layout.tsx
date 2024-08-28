import type { Metadata } from "next";
import "../../styles/globals.scss";
import { nunito } from "../fonts";
import { MenuProvider } from "../../context/MenuContext";


export const metadata: Metadata = {
  title: "Axiora",
  description: "Esta es una app quete permite conectar tus diferenets cuentas de E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MenuProvider>
      <body className={nunito.className}>
        {children}</body>
      </MenuProvider>
    </html>
  );
}
