export function ConnectionGraphic() {
  return (
    <div className="connection-graphic" aria-hidden="true">
      <svg viewBox="0 0 620 470" role="presentation">
        <path className="jujuy-outline" d="M282 24l79 38 34 77-23 56 43 63-55 72 8 83-79 28-67-55-57-15 12-80-39-69 47-47 4-76 65-24z" />
        <path className="route route-one" d="M255 84C235 152 270 202 242 274s-54 71-70 109" />
        <path className="route route-two" d="M171 364c70-28 122-15 179-72s57-101 70-133" />
        <path className="route route-three" d="M235 147c54 14 91 2 135-28" />
        <circle className="node node-a" cx="255" cy="84" r="11" />
        <circle className="node node-b" cx="242" cy="274" r="14" />
        <circle className="node node-c" cx="350" cy="292" r="11" />
        <circle className="node node-d" cx="420" cy="159" r="10" />
      </svg>
      <span className="graphic-label label-one">Puna</span>
      <span className="graphic-label label-two">Ruta 9</span>
      <span className="graphic-label label-three">Ruta 52 · Paso de Jama</span>
    </div>
  );
}
