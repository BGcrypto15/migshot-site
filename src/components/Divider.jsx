import "./Divider.css";

// Car-themed section divider: a tire-tread line with a spray-paint nozzle
// at center, glowing in the brand accent. Pure SVG, no image asset needed.
function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <svg
        className="divider__svg"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="30" x2="520" y2="30" className="divider__line" />
        <line x1="680" y1="30" x2="1200" y2="30" className="divider__line" />

        {/* tire tread ticks */}
        {Array.from({ length: 14 }).map((_, i) => (
          <rect
            key={`l-${i}`}
            x={20 + i * 34}
            y="24"
            width="10"
            height="12"
            rx="2"
            className="divider__tick"
            style={{ opacity: 0.15 + (i / 14) * 0.5 }}
          />
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <rect
            key={`r-${i}`}
            x={1180 - i * 34 - 10}
            y="24"
            width="10"
            height="12"
            rx="2"
            className="divider__tick"
            style={{ opacity: 0.15 + (i / 14) * 0.5 }}
          />
        ))}

        {/* spray nozzle mark, center */}
        <g className="divider__nozzle">
          <circle cx="600" cy="30" r="14" className="divider__glow-circle" />
          <path
            d="M580 30 L610 22 L610 38 Z"
            className="divider__nozzle-body"
          />
          <circle cx="600" cy="30" r="4" className="divider__nozzle-dot" />
        </g>
      </svg>
    </div>
  );
}

export default Divider;
