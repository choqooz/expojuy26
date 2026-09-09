import { useEffect, useState } from "react";

import type { AgendaItem, ExhibitorItem } from "../data";

const STORAGE_KEY = "expojuy26-my-expo";

interface StoredPlan {
  interests: string[];
  agendaIds: string[];
  exhibitorIds: string[];
}

const EMPTY_PLAN: StoredPlan = { interests: [], agendaIds: [], exhibitorIds: [] };

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isStoredPlan(value: unknown): value is StoredPlan {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Record<string, unknown>;
  return (
    isStringArray(candidate.interests) &&
    isStringArray(candidate.agendaIds) &&
    isStringArray(candidate.exhibitorIds)
  );
}

function readPlan(): StoredPlan {
  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    if (!storedValue) return EMPTY_PLAN;
    const parsedValue: unknown = JSON.parse(storedValue);
    return isStoredPlan(parsedValue) ? parsedValue : EMPTY_PLAN;
  } catch {
    return EMPTY_PLAN;
  }
}

export function useMyExpo() {
  const [plan, setPlan] = useState<StoredPlan>(EMPTY_PLAN);
  const [isReady, setIsReady] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    setPlan(readPlan());
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    try {
      const hasSelections = plan.interests.length > 0 || plan.agendaIds.length > 0 || plan.exhibitorIds.length > 0;
      if (hasSelections) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
      else window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      setAnnouncement("Tu selección funciona durante esta visita, pero no pudo guardarse en este dispositivo.");
    }
  }, [isReady, plan]);

  function toggleInterest(interest: string) {
    setPlan((currentPlan) => {
      const selected = currentPlan.interests.includes(interest);
      setAnnouncement(selected ? `Se quitó ${interest} de tus intereses.` : `Se sumó ${interest} a tus intereses.`);
      return {
        ...currentPlan,
        interests: selected
          ? currentPlan.interests.filter((item) => item !== interest)
          : [...currentPlan.interests, interest],
      };
    });
  }

  function toggleAgenda(item: AgendaItem) {
    setPlan((currentPlan) => {
      const selected = currentPlan.agendaIds.includes(item.id);
      setAnnouncement(selected ? `Se quitó ${item.title} de Mi Expo.` : `Se guardó ${item.title} en Mi Expo.`);
      return {
        ...currentPlan,
        agendaIds: selected
          ? currentPlan.agendaIds.filter((id) => id !== item.id)
          : [...currentPlan.agendaIds, item.id],
      };
    });
  }

  function toggleExhibitor(item: ExhibitorItem) {
    setPlan((currentPlan) => {
      const selected = currentPlan.exhibitorIds.includes(item.id);
      setAnnouncement(selected ? `Se quitó ${item.name} de Mi Expo.` : `Se guardó ${item.name} en Mi Expo.`);
      return {
        ...currentPlan,
        exhibitorIds: selected
          ? currentPlan.exhibitorIds.filter((id) => id !== item.id)
          : [...currentPlan.exhibitorIds, item.id],
      };
    });
  }

  function resetMyExpo() {
    setPlan(EMPTY_PLAN);
    setAnnouncement("Se reinició Mi Expo y se eliminó la selección guardada en este dispositivo.");
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      setAnnouncement("Se reinició Mi Expo durante esta visita, pero no se pudo actualizar el almacenamiento de este dispositivo.");
    }
  }

  return { plan, announcement, toggleAgenda, toggleExhibitor, toggleInterest, resetMyExpo };
}
