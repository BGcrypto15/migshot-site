// Fixed-size spray can glyph used in the section divider. Drawn at a fixed
// viewBox so it never stretches or distorts regardless of container width.
function SprayCanIcon({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 5h4l1 2h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1z" />
      <path d="M9 5V3h4v2" />
      <path d="M11 12h2" />
      <path d="M11 15h2" />
      <path d="M11 18h2" />
      <path d="M17 7l2-1" />
      <path d="M17 10h2.5" />
      <path d="M17 4l2 1" />
    </svg>
  );
}

export default SprayCanIcon;
