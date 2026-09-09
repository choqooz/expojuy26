import { useRef } from "react";

import { AGENDA_ITEMS, EXHIBITORS, INTERESTS, PROVISIONAL_LABEL } from "../data";
import { EditorialVisual } from "./EditorialVisual";

import type { AgendaItem, ExhibitorItem } from "../data";

interface MyExpoProps {
  agendaIds: string[];
  exhibitorIds: string[];
  interests: string[];
  onInterestToggle: (interest: string) => void;
  onReset: () => void;
}

function findAgendaItem(id: string): AgendaItem | undefined {
  return AGENDA_ITEMS.find((item) => item.id === id);
}

function findExhibitorItem(id: string): ExhibitorItem | undefined {
  return EXHIBITORS.find((item) => item.id === id);
}

export function MyExpo({ agendaIds, exhibitorIds, interests, onInterestToggle, onReset }: MyExpoProps) {
  const summaryHeadingRef = useRef<HTMLDivElement>(null);
  const savedAgenda = agendaIds.map(findAgendaItem).filter((item): item is AgendaItem => Boolean(item));
  const savedExhibitors = exhibitorIds.map(findExhibitorItem).filter((item): item is ExhibitorItem => Boolean(item));
  const summaryKey = `${agendaIds.join("-") || "empty"}:${exhibitorIds.join("-") || "empty"}`;
  const hasSelections = interests.length > 0 || agendaIds.length > 0 || exhibitorIds.length > 0;

  function handleReset() {
    onReset();
    window.requestAnimationFrame(() => summaryHeadingRef.current?.focus());
  }

  return (
    <section id="mi-expo" className="my-expo section-anchor" aria-labelledby="my-expo-title">
      <div className="shell my-expo-grid">
        <div>
          <p className="eyebrow">Planificador local</p>
          <h2 id="my-expo-title">Mi Expo</h2>
          <p className="my-expo-intro">Arma un recorrido de referencia según tus intereses. Se guarda solamente en este navegador, sin cuenta ni datos personales.</p>
          <fieldset className="interest-fieldset">
            <legend>¿Qué te interesa explorar?</legend>
            <div className="interest-list">
              {INTERESTS.map((interest) => {
                const isSelected = interests.includes(interest);
                return (
                  <button key={interest} className={isSelected ? "interest-button is-selected" : "interest-button"} type="button" aria-pressed={isSelected} onClick={() => onInterestToggle(interest)}>
                    <span aria-hidden="true">{isSelected ? "✓" : "+"}</span>{interest}
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>
        <aside className="plan-summary" aria-label="Resumen de Mi Expo">
          <div className="plan-summary-content" key={summaryKey}>
          <div ref={summaryHeadingRef} className="plan-summary-heading" tabIndex={-1}>
            <span className="plan-count">{savedAgenda.length + savedExhibitors.length}</span>
            <div><strong>Guardados</strong><span>{PROVISIONAL_LABEL}</span></div>
          </div>
          {savedAgenda.length === 0 && savedExhibitors.length === 0 ? (
            <p className="empty-plan">Todavía no guardaste propuestas. Elige actividades o expositores para construir tu recorrido.</p>
          ) : (
            <ul className="plan-list">
              {savedAgenda.map((item) => <li key={item.id}><span>Agenda</span>{item.title}</li>)}
              {savedExhibitors.map((item) => <li key={item.id}><span>Expositor</span>{item.name}</li>)}
            </ul>
          )}
          </div>
          <EditorialVisual variant="itinerary" />
          {hasSelections && <button className="reset-my-expo" type="button" onClick={handleReset}>Reiniciar Mi Expo</button>}
          <a className="text-link" href="#agenda">Explorar agenda <span aria-hidden="true">→</span></a>
        </aside>
      </div>
    </section>
  );
}
