// Gloved hand holding a gravity-feed paint gun, side view, nozzle on the left.
// Drawn on a fixed viewBox so it never stretches.
import { useId } from "react";

function SprayGun({ className }) {
  // unique gradient ids, since the divider appears more than once per page
  const id = useId().replace(/:/g, "");
  const metal = `sgm${id}`, cup = `sgc${id}`, glove = `sgg${id}`;
  return (
    <svg
      className={className}
      viewBox="0 0 96 80"
      width="96"
      height="80"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={metal} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2f2f2" />
          <stop offset="0.5" stopColor="#a9a9ad" />
          <stop offset="1" stopColor="#5b5b60" />
        </linearGradient>
        <linearGradient id={cup} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8d8d92" />
          <stop offset="0.45" stopColor="#e6e6e8" />
          <stop offset="1" stopColor="#7a7a7f" />
        </linearGradient>
        <linearGradient id={glove} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a3a3f" />
          <stop offset="1" stopColor="#141416" />
        </linearGradient>
      </defs>

      {/* paint cup on top */}
      <path d="M37 4h16l-2 18H39z" fill={`url(#${cup})`} stroke="#2b2b2e" strokeWidth="1.2" />
      <rect x="35" y="1.5" width="20" height="4" rx="1.5" fill="#d9d9dc" stroke="#2b2b2e" strokeWidth="1.2" />
      <path d="M40 9h10" stroke="#ff5a1f" strokeWidth="2" strokeLinecap="round" />
      <rect x="42" y="21" width="6" height="5" fill={`url(#${metal})`} stroke="#2b2b2e" strokeWidth="1" />

      {/* air cap + nozzle */}
      <rect x="6" y="27" width="8" height="12" rx="2" fill={`url(#${metal})`} stroke="#2b2b2e" strokeWidth="1.2" />
      <path d="M6 28l-3-3M6 38l-3 3" stroke="#bdbdc1" strokeWidth="2" strokeLinecap="round" />
      <rect x="2" y="31" width="5" height="4" rx="1" fill="#ff5a1f" />

      {/* gun body */}
      <path
        d="M13 26h46c4 0 7 3 7 7s-3 7-7 7H13z"
        fill={`url(#${metal})`}
        stroke="#2b2b2e"
        strokeWidth="1.2"
      />
      <path d="M18 29h38" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="70" cy="31" r="3" fill="#c4177c" stroke="#2b2b2e" strokeWidth="1" />

      {/* trigger */}
      <path d="M40 40c-2 8-1 14 3 20" fill="none" stroke="#cfcfd2" strokeWidth="3" strokeLinecap="round" />

      {/* handle */}
      <path d="M52 39h11l7 30h-11z" fill={`url(#${metal})`} stroke="#2b2b2e" strokeWidth="1.2" />
      <rect x="58" y="68" width="12" height="6" rx="1.5" fill="#5b5b60" stroke="#2b2b2e" strokeWidth="1" />

      {/* gloved hand wrapped around the handle, two fingers on the trigger */}
      <path
        d="M50 42c6-3 16-2 20 3l5 20c1 6-4 10-10 10H58c-5 0-8-3-8-7z"
        fill={`url(#${glove})`}
        stroke="#5a5a62"
        strokeWidth="1.2"
      />
      <rect x="37" y="43" width="17" height="6.5" rx="3.2" fill={`url(#${glove})`} stroke="#5a5a62" strokeWidth="1.1" />
      <rect x="38" y="50.5" width="16" height="6.5" rx="3.2" fill={`url(#${glove})`} stroke="#5a5a62" strokeWidth="1.1" />
      <rect x="44" y="58" width="12" height="6" rx="3" fill={`url(#${glove})`} stroke="#5a5a62" strokeWidth="1.1" />
      <path d="M64 46c3 1 6 4 7 8" fill="none" stroke="#ff5a1f" strokeOpacity="0.8" strokeWidth="1.4" strokeLinecap="round" />
      {/* cuff */}
      <path d="M64 75l18-6 6 9H66z" fill="#26262a" stroke="#5a5a62" strokeWidth="1.1" />
    </svg>
  );
}

export default SprayGun;
