// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Bienvenido al Laboratorio IS
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Innovación y tecnología para tus proyectos académicos
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Explorar Laboratorios
        </button>
      </div>
    </section>
  );
}
