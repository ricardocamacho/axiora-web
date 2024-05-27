import React from "react";

const date = new Date()

export default function Footer() {
  return (
    <div className="footer-dashboard">
      <p className="mx-12">© Axiora {date.getFullYear()}. Todos los derechos reservados.</p>
    </div>
  );
}