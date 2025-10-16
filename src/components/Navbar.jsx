
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { labs } from "../data/labs";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile
  const [isLabsOpen, setIsLabsOpen] = useState(false); // panel labs
  const navRef = useRef(null);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);
  const closeTimeout = useRef(null);

  const CLOSE_DELAY = 100; // ms 

  // Abrir el panel (se llama desde el trigger: onMouseEnter)
  const openLabs = () => {
    clearTimeout(closeTimeout.current);
    setIsLabsOpen(true);
  };

  // Forzar toggle desde click (útil en dispositivos táctiles)
  const toggleLabs = () => {
    clearTimeout(closeTimeout.current);
    setIsLabsOpen((s) => !s);
  };

  const scheduleCloseLabs = (delay = CLOSE_DELAY) => {
    clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => {
      setIsLabsOpen(false);
    }, delay);
  };

  // Comprueba si (x,y) está dentro del bounding rect de node
  const isInside = (node, x, y) => {
    if (!node) return false;
    const r = node.getBoundingClientRect();
    return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
  };

  useEffect(() => {
    // Usamos mousemove global solamente para mantener abierto/cerrar,
    // NO para abrir (abrir sólo por hover en trigger o click).
    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Si el panel está cerrado no hacemos nada aquí (no abrimos).
      if (!isLabsOpen) return;

      const inNav = isInside(navRef.current, x, y);
      const inPanel = isInside(panelRef.current, x, y);

      if (inNav || inPanel) {
        // cursor dentro -> cancelar cierre
        clearTimeout(closeTimeout.current);
      } else {
        // fuera de ambas -> programar cierre
        scheduleCloseLabs(CLOSE_DELAY);
      }
    };

    const handleTouchStart = (e) => {
      // en touch, si tocan fuera, cerramos
      const touch = e.touches?.[0];
      if (!touch) return;
      const x = touch.clientX;
      const y = touch.clientY;

      if (!isInside(navRef.current, x, y) && !isInside(panelRef.current, x, y) && isLabsOpen) {
        scheduleCloseLabs(0);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchstart", handleTouchStart);
      clearTimeout(closeTimeout.current);
    };
  }, [isLabsOpen]);

  const handleOverlayClick = () => {
    setIsLabsOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="bg-gradient-to-r from-[#00814b] to-green-600 text-white shadow fixed w-full top-0 z-40"
        aria-label="Main navigation"
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center md:justify-start space-x-2 h-12">
            <img src="/images/logos/logoHeader.png" alt="Logo" className="h-full w-auto object-contain" />
            <span className="text-xl font-bold text-white">{t("navbar.title", "Computer Lab")}</span>
          </div>

          {/* Menu desktop (centrado) */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 font-medium">
            <Link to="/" className="hover:text-gray-200 transition">{t("navbar.home")}</Link>

            {/* TRIGGER: solo aquí abrimos por hover */}
            <div
              ref={triggerRef}
              className="relative cursor-pointer"
              onMouseEnter={openLabs}     // abre al poner el cursor sobre "Laboratorios"
              onClick={toggleLabs}        // toggle con click (útil para touch)
              aria-haspopup="true"
              aria-expanded={isLabsOpen}
            >
              <span className="hover:text-gray-200 transition">{t("navbar.labs")}</span>
            </div>

            <Link to="/monitors" className="hover:text-gray-200 transition">{t("navbar.monitors")}</Link>
            <Link to="/contact" className="hover:text-gray-200 transition">{t("navbar.contact")}</Link>
          </div>

          {/* idiomas */}
          <div className="hidden md:flex justify-end space-x-2">
            <button onClick={() => i18n.changeLanguage("es")} className="hover:opacity-80 transition">🇪🇸</button>
            <button onClick={() => i18n.changeLanguage("en")} className="hover:opacity-80 transition">🇺🇸</button>
          </div>

          {/* boton movil */}
          <button
            className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-[#00814b] to-green-600 text-white px-4 pt-2 pb-4 space-y-2 shadow-lg text-center">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block w-full">{t("navbar.home")}</Link>
            <details className="w-full">
              <summary className="cursor-pointer text-lg font-semibold hover:text-gray-200">{t("navbar.labs")}</summary>
              <div className="mt-2 space-y-1 px-2">
                {labs.map((lab) => (
                  <Link key={lab.id} to={lab.path} onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm hover:text-green-200">
                    {t(`labs.${lab.id}`)}
                  </Link>
                ))}
              </div>
            </details>
            <Link to="/monitors" onClick={() => setIsMenuOpen(false)} className="block w-full">{t("navbar.monitors")}</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full">{t("navbar.contact")}</Link>
            <div className="flex justify-center space-x-2 pt-2">
              <button onClick={() => i18n.changeLanguage("es")} className="hover:opacity-80 transition">🇪🇸</button>
              <button onClick={() => i18n.changeLanguage("en")} className="hover:opacity-80 transition">🇺🇸</button>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay y panel izquierdo */}
      <div className="fixed inset-0 z-50 pointer-events-none" aria-hidden={!isLabsOpen}>
        {/* overlay: ocupa la pantalla (clic fuera cierra) */}
        <div
          onClick={handleOverlayClick}
          className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
          style={{
            opacity: isLabsOpen ? 1 : 0,
            pointerEvents: isLabsOpen ? "auto" : "none",
            zIndex: 10,
          }}
        />

        {/* panel izquierdo */}
        <div
          ref={panelRef}
          className="absolute top-0 left-0 h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out"
          style={{
            width: "42%",
            maxWidth: "720px",
            transform: isLabsOpen ? "translateX(0%)" : "translateX(-100%)",
            paddingTop: "72px", // espacio para navbar fija
            zIndex: 20,
            pointerEvents: isLabsOpen ? "auto" : "none",
          }}
        >
          <div className="h-full overflow-auto px-12 py-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-6">{t("navbar.labsTitle", "Conoce los Laboratorios")}</h3>

            <div className="flex flex-col space-y-6">
              {labs.map((lab) => (
                <Link
                  key={lab.id}
                  to={lab.path}
                  onClick={() => setIsLabsOpen(false)}
                  className="text-2xl font-semibold text-gray-900 hover:text-green-700 transition transform hover:translate-x-1 duration-150"
                >
                  {t(`labs.${lab.id}`)}
                </Link>
              ))}
            </div>

            <div className="mt-12 text-sm text-gray-500">
              {t("navbar.labsPanelNote", "Encuentra horarios, equipos y más información en cada laboratorio.")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
