import React from "react";

export default function Stats() {
  const stats = [
    { label: "Laboratorios", value: "24" },
    { label: "Monitores", value: "50+" },
    { label: "Equipos", value: "600+" },
  ];

  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i} className="p-6">
            <p className="text-4xl md:text-5xl font-bold leading-none">{s.value}</p>
            <p className="mt-2 text-lg md:text-xl">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
