interface SaveButtonProps {
  isSaved: boolean;
  label: string;
  onClick: () => void;
}

export function SaveButton({ isSaved, label, onClick }: SaveButtonProps) {
  return (
    <button className={isSaved ? "save-button is-saved" : "save-button"} type="button" onClick={onClick} aria-pressed={isSaved}>
      <span aria-hidden="true">{isSaved ? "✓" : "+"}</span>
      {isSaved ? "Guardado" : label}
    </button>
  );
}
