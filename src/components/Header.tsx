import { useEffect, useRef, useState } from "react";

import { NAV_ITEMS, publicAsset } from "../data";

export interface TicketOpenRequest {
  trigger: HTMLButtonElement;
  restoreFocusTo: HTMLButtonElement;
}

interface HeaderProps {
  onTicketsClick: (request: TicketOpenRequest) => void;
}

export function Header({ onTicketsClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function handleNavigation() {
    setIsMenuOpen(false);
  }

  function openTicketsFromMobileMenu(trigger: HTMLButtonElement) {
    const menuButton = menuButtonRef.current;
    if (!menuButton) return;
    handleNavigation();
    onTicketsClick({ trigger, restoreFocusTo: menuButton });
  }

  return (
    <header className="site-header">
      <a className="skip-link" href="#contenido">Saltar al contenido principal</a>
      <div className="shell header-inner">
        <a className="brand" href="#inicio" aria-label="ExpoJuy 2026, ir al inicio" onClick={handleNavigation}>
          <img src={publicAsset("brand/expojuy26-horizontal.png")} alt="ExpoJuy 2026, conectando países, creando oportunidades" />
        </a>
        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
          <span className="sr-only">{isMenuOpen ? "Cerrar" : "Abrir"} navegación</span>
        </button>
        <nav id="primary-navigation" className={isMenuOpen ? "primary-nav is-open" : "primary-nav"} aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <a key={item.target} href={`#${item.target}`} onClick={handleNavigation}>{item.label}</a>
          ))}
          <button className="button button-primary nav-ticket" type="button" onClick={(event) => openTicketsFromMobileMenu(event.currentTarget)}>
            Entradas
          </button>
        </nav>
        <button className="button button-primary header-ticket" type="button" onClick={(event) => onTicketsClick({ trigger: event.currentTarget, restoreFocusTo: event.currentTarget })}>Entradas</button>
      </div>
    </header>
  );
}
