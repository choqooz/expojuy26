import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import { ConnectionGraphic } from "./components/ConnectionGraphic";
import { ContextImage } from "./components/ContextImage";
import { BrandMotionStage, EditorialVisual, SponsorMonogram } from "./components/EditorialVisual";
import { Header, type TicketOpenRequest } from "./components/Header";
import { MyExpo } from "./components/MyExpo";
import { SaveButton } from "./components/SaveButton";
import { SectionTitle } from "./components/SectionTitle";
import { Reveal } from "./components/Reveal";
import { AGENDA_ITEMS, CONTENT_LABEL, CONTEXT_IMAGES, EXHIBITORS, FAQ_ITEMS, PROVISIONAL_LABEL, publicAsset } from "./data";
import { useMyExpo } from "./hooks/useMyExpo";

const VALUES = [
  ["01", "Producción", "Un espacio para proyectar las capacidades que hacen crecer a la región."],
  ["02", "Tecnología", "Un punto de encuentro entre conocimiento, innovación y aplicación concreta."],
  ["03", "Vínculos", "Una trama para acercar iniciativas, instituciones, empresas y comunidades."],
] as const;

const MAP_ZONES = ["Ruta 9", "Quebrada", "Puna", "Ruta 52", "Paso de Jama"] as const;
const AGENDA_IMAGES = [CONTEXT_IMAGES.quebrada, CONTEXT_IMAGES.cauchari, CONTEXT_IMAGES.ruta52] as const;
const EXHIBITOR_IMAGES = [CONTEXT_IMAGES.olaroz, CONTEXT_IMAGES.cauchari, CONTEXT_IMAGES.pasoJama] as const;
const SPONSOR_MOCKS = [
  ["puna-energy", "Energía de la Puna", "Energía solar y transición productiva"],
  ["valleys-production", "Producción de los Valles", "Alimentos, agricultura y valor agregado"],
  ["quebrada-technology", "Tecnología de la Quebrada", "Conocimiento, conectividad e innovación"],
  ["jama-connection", "Conexión Paso de Jama", "Logística, comercio y corredores andinos"],
] as const;

export function App() {
  const [isTicketPanelOpen, setIsTicketPanelOpen] = useState(false);
  const ticketDialogRef = useRef<HTMLDialogElement>(null);
  const ticketCloseButtonRef = useRef<HTMLButtonElement>(null);
  const ticketRestoreFocusRef = useRef<HTMLButtonElement>(null);
  const { announcement, plan, toggleAgenda, toggleExhibitor, toggleInterest, resetMyExpo } = useMyExpo();

  useEffect(() => {
    const dialog = ticketDialogRef.current;
    if (!dialog) return;

    if (isTicketPanelOpen) {
      dialog.showModal();
      window.requestAnimationFrame(() => ticketCloseButtonRef.current?.focus());
      return;
    }

    if (dialog.open) {
      dialog.close();
      const restoreFocusTarget = ticketRestoreFocusRef.current;
      ticketRestoreFocusRef.current = null;
      window.requestAnimationFrame(() => restoreFocusTarget?.focus());
    }
  }, [isTicketPanelOpen]);

  function openTicketPanel({ restoreFocusTo }: TicketOpenRequest) {
    ticketRestoreFocusRef.current = restoreFocusTo;
    setIsTicketPanelOpen(true);
  }

  function closeTicketPanel() {
    setIsTicketPanelOpen(false);
  }

  function trapTicketFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    event.preventDefault();
    ticketCloseButtonRef.current?.focus();
  }

  return (
    <>
      <Header onTicketsClick={openTicketPanel} />
      <main id="contenido">
        <section id="inicio" className="hero section-anchor" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-content">
              <p className="eyebrow hero-eyebrow">ExpoJuy 2026 · {PROVISIONAL_LABEL}</p>
              <h1 id="hero-title">Jujuy conecta<br /><em>lo que viene.</em></h1>
              <p className="hero-copy">Un punto de encuentro para imaginar conexiones entre producción, tecnología, conocimiento, territorio y negocios.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#mi-expo">Construir Mi Expo <span aria-hidden="true">→</span></a>
                <a className="button button-secondary" href="#expojuy">Conocer la propuesta</a>
              </div>
              <p className="provisional-note"><span aria-hidden="true">●</span> Este es un prototipo conceptual. La programación, participantes y datos operativos se confirmarán oficialmente.</p>
            </div>
            <ConnectionGraphic />
          </div>
          <Reveal className="shell"><BrandMotionStage /></Reveal>
          <div className="shell quick-actions" aria-label="Accesos rápidos">
            <a href="#agenda"><span>01</span>Agenda demostrativa <b aria-hidden="true">↘</b></a>
            <a href="#expositores"><span>02</span>Expositores <b aria-hidden="true">↘</b></a>
            <a href="#mapa"><span>03</span>Mapa conceptual <b aria-hidden="true">↘</b></a>
          </div>
        </section>

        <section id="expojuy" className="section section-anchor values" aria-labelledby="values-title">
          <div className="shell">
            <Reveal><SectionTitle eyebrow="Una Expo en movimiento" title="Conectar es abrir posibilidades." description="Este prototipo relaciona producción, tecnología, conocimiento, comercio y territorio. Las imágenes de Jujuy funcionan como contexto ilustrativo, no como registro de ExpoJuy 2026." /></Reveal>
            <ContextImage asset={CONTEXT_IMAGES.purmamarca} className="territory-anchor" />
            <div className="value-grid">
              {VALUES.map(([number, title, description]) => (
                <article key={number} className="value-item"><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
              ))}
            </div>
          </div>
        </section>

        <MyExpo agendaIds={plan.agendaIds} exhibitorIds={plan.exhibitorIds} interests={plan.interests} onInterestToggle={toggleInterest} onReset={resetMyExpo} />

        <section id="agenda" className="section section-anchor agenda" aria-labelledby="agenda-title">
          <div className="shell">
            <SectionTitle eyebrow="Agenda demostrativa" title="Ideas para sumar a tu recorrido." description="Selección demostrativa inspirada en temas del ecosistema jujeño. Las actividades reales, fechas, horarios y ubicaciones se publicarán cuando la agenda oficial esté confirmada." />
            <div className="agenda-list">
              {AGENDA_ITEMS.map((item, index) => {
                const isSaved = plan.agendaIds.includes(item.id);
                return (
                    <article className="agenda-item" key={item.id}>
                      <div className="agenda-index">0{index + 1}</div>
                      <ContextImage asset={AGENDA_IMAGES[index]} className="agenda-image" />
                      <div><span className="content-tag">Agenda demostrativa</span><p className="agenda-category">{item.category}</p><h3>{item.title}</h3><p>{item.description}</p></div>
                    <div className="agenda-action"><span>{item.format}</span><SaveButton isSaved={isSaved} label="Guardar" onClick={() => toggleAgenda(item)} /></div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="expositores" className="section section-anchor exhibitors" aria-labelledby="exhibitors-title">
          <div className="shell">
            <SectionTitle eyebrow="Expositores demostrativos" title="Sectores que pueden conversar." description="Estas fichas representan contextos de producción, tecnología y comercio vinculados a Jujuy. No corresponden a participantes confirmados." />
            <div className="exhibitor-grid">
              {EXHIBITORS.map((item, index) => {
                const isSaved = plan.exhibitorIds.includes(item.id);
                return (
                    <article className="exhibitor-card" key={item.id}>
                      <div className="exhibitor-mark"><ContextImage asset={EXHIBITOR_IMAGES[index]} /><span>{String(index + 1).padStart(2, "0")}</span></div>
                      <span className="content-tag">Expositor demostrativo</span><p>{item.sector}</p><h3>{item.name}</h3><p className="card-copy">{item.description}</p>
                    <SaveButton isSaved={isSaved} label="Sumar a Mi Expo" onClick={() => toggleExhibitor(item)} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="mapa" className="section section-anchor map-section" aria-labelledby="map-title">
          <div className="shell map-layout">
            <SectionTitle eyebrow="Mapa conceptual" title="Orientarse también es conectar." description="Esquema conceptual de vínculos territoriales de Jujuy. No representa un predio, una sede, una ubicación ni un proveedor de mapas." />
            <div className="map-card" aria-label="Esquema conceptual de corredores de Jujuy">
              <span className="content-tag">{CONTENT_LABEL}</span>
              <div className="map-diagram" aria-hidden="true"><i className="zone zone-one">01</i><i className="zone zone-two">02</i><i className="zone zone-three">03</i><i className="zone zone-four">04</i><i className="zone zone-five">05</i><i className="map-route-one" /><i className="map-route-two" /><i className="map-route-three" /></div>
              <ol className="map-legend">{MAP_ZONES.map((zone, index) => <li key={zone}><span>{String(index + 1).padStart(2, "0")}</span>{zone}</li>)}</ol>
            </div>
          </div>
        </section>

        <section id="noticias" className="section section-anchor news" aria-labelledby="news-title">
          <div className="shell">
            <SectionTitle eyebrow="Noticias" title="La información, cuando esté lista." description="Un espacio diseñado para actualizaciones oficiales, sin anticipar anuncios ni publicaciones inexistentes. La imagen es un contexto ilustrativo de Jujuy." />
            <div className="news-grid">
              <article className="news-lead"><ContextImage asset={CONTEXT_IMAGES.salinas} className="news-image" /><span className="provisional-tag">{PROVISIONAL_LABEL}</span><p>Próxima actualización</p><h3>Las novedades oficiales de ExpoJuy 2026 se comunicarán por sus canales confirmados.</h3><a href="#contacto" className="text-link">Ver canales de contacto <span aria-hidden="true">→</span></a></article>
              <div className="news-rail"><article><span>Comunidad</span><p>Espacio reservado para una futura comunicación oficial.</p></article><article><span>Programa</span><p>Espacio reservado para una futura comunicación oficial.</p></article></div>
            </div>
          </div>
        </section>

        <section id="sponsors" className="section section-anchor sponsors" aria-labelledby="sponsors-title">
          <div className="shell sponsor-layout">
            <SectionTitle eyebrow="Instituciones y sponsors de muestra" title="Roles claros para construir confianza." description="Organización y acompañamiento institucional son roles confirmados. Las siguientes marcas son identidades demostrativas creadas para este prototipo, no sponsors confirmados." />
            <div className="institution-groups" aria-label="Roles institucionales y patrocinios">
              <div className="institution-group"><p className="institution-label">Organizadores</p><div className="institution-cards"><article><span className="institution-monogram" aria-hidden="true">MD</span><strong>Ministerio de Desarrollo Económico y Producción de Jujuy</strong><p>Dirección Provincial de Servicios Basados en el Conocimiento</p></article><article><span className="institution-monogram" aria-hidden="true">CC</span><strong>Cámara de Comercio Exterior de Jujuy</strong></article></div></div>
              <div className="institution-group"><p className="institution-label">Acompañamiento institucional</p><div className="institution-cards"><article><span className="institution-monogram" aria-hidden="true">CA</span><strong>ClusteAR</strong><p>Cámara de Empresas TICs</p></article></div></div>
              <div className="institution-group sponsorship-group"><p className="institution-label">Sponsors de muestra</p><p className="sponsorship-intro">Identidades originales inspiradas en sectores productivos de Jujuy.</p><div className="sponsor-mock-grid">{SPONSOR_MOCKS.map(([mark, name, sector]) => <article className={`sponsor-mock-card sponsor-${mark}`} key={name}><SponsorMonogram variant={mark} /><div><span>Marca demostrativa</span><strong>{name}</strong><p>{sector}</p></div></article>)}</div></div>
            </div>
          </div>
        </section>

        <section id="preguntas" className="section section-anchor faq" aria-labelledby="faq-title">
          <div className="shell faq-layout">
            <SectionTitle eyebrow="Preguntas frecuentes" title="Respuestas claras, sin anticipar información." description="Las condiciones definitivas serán publicadas por los canales oficiales de ExpoJuy 2026." />
            <div className="faq-side"><EditorialVisual variant="wayfinding" /><div className="faq-list">{FAQ_ITEMS.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div>
          </div>
        </section>

        <section id="contacto" className="contact section-anchor" aria-labelledby="contact-title">
          <div className="shell contact-inner">
            <div><p className="eyebrow">Contacto</p><h2 id="contact-title">Seguimos en conexión.</h2><p>Los canales de atención, redes y vías de participación se enlazarán aquí al momento de su confirmación oficial.</p><div className="contact-brand"><img src={publicAsset("brand/expojuy26-isologotipo.png")} alt="ExpoJuy 2026" /><span>Identidad local autorizada</span></div></div>
            <div className="contact-state"><span className="provisional-tag">{PROVISIONAL_LABEL}</span><strong>Canales oficiales próximamente</strong><p>Este prototipo no incluye enlaces, formularios ni integraciones de contacto.</p></div>
          </div>
        </section>
      </main>
      <footer><div className="shell footer-inner"><img src={publicAsset("brand/expojuy26-isologotipo.png")} alt="ExpoJuy 2026" /><p>Prototipo conceptual de navegación · Contenido demostrativo</p><a href="#inicio">Volver arriba ↑</a></div></footer>
      <p className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</p>
      <dialog
        ref={ticketDialogRef}
        className="ticket-panel"
        aria-labelledby="ticket-panel-title"
        onCancel={(event) => { event.preventDefault(); closeTicketPanel(); }}
        onKeyDown={trapTicketFocus}
      >
        <div className="ticket-panel-inner"><span className="provisional-tag">Próximamente</span><h2 id="ticket-panel-title">Entradas para ExpoJuy 2026</h2><p>El canal oficial de entradas se enlazará cuando esté confirmado. Este prototipo no procesa pagos ni simula proveedores.</p><button ref={ticketCloseButtonRef} className="button button-secondary" type="button" onClick={closeTicketPanel}>Entendido</button></div>
      </dialog>
    </>
  );
}
