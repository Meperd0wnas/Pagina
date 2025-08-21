export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* NAVBAR */}
      <header className="bg-green-600 text-white p-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mi Laboratorio</h1>
          <div className="space-x-6">
            <button className="hover:underline">Inicio</button>
            <button className="hover:underline">Servicios</button>
            <button className="hover:underline">Contacto</button>
          </div>
        </nav>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Bienvenido 🚀
          </h2>
          <p className="text-lg text-gray-600">
            Esta es la página inicial con Tailwind funcionando.
          </p>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-200 py-4 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          © 2025 Mi Laboratorio. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
