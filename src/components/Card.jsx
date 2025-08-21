// src/components/Card.jsx
import React from "react";

export default function Card({ title, description, icon }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
        Ver más
      </button>
    </div>
  );
}
