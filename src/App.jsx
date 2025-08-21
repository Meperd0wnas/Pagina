import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* NAVBAR */}
      <header className="bg-gradient-to-r from-[#00814b] to-green-700 text-white p-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Laboratorio de informática</h1>
          <div className="space-x-6">
            <button className="hover:text-yellow-300 transition-colors">Inicio</button>
            <button className="hover:text-yellow-300 transition-colors">Servicios</button>
            <button className="hover:text-yellow-300 transition-colors">Contacto</button>
          </div>
        </nav>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <HomePage />

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-200 py-4 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          © Copyright 2025 Laboratorio de informática
        </div>
      </footer>
    </div>
  );
}

