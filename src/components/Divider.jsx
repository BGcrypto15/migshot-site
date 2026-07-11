import "./Divider.css";
import SprayCanIcon from "./icons/SprayCanIcon";

// Car-themed section divider: a spray-can glyph glowing in the accent color,
// with a tire-tread tick pattern trailing off on each side. Built with plain
// CSS (repeating-gradient), not SVG viewBox math, so it never stretches or
// distorts at any screen width.
function Divider() {
  return (
    <div className="divider container" aria-hidden="true">
      <span className="divider__line" />
      <span className="divider__icon">
        <SprayCanIcon size={26} />
      </span>
      <span className="divider__line" />
    </div>
  );
}

export default Divider;
