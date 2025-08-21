import React from "react";

export default function ContactCta() {
  return (
    <section className="py-12 bg-green-700 text-white text-center">
      <p className="mb-4 text-lg">¿Listo para explorar? Contáctanos para más información.</p>
      <a href="/contacto" className="bg-white text-green-700 hover:bg-gray-100 font-medium py-2 px-5 rounded">
        Ir a Contacto
      </a>
    </section>
  );
}
