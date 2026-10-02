import { useEffect, useRef, useState } from "react";
import "./Divider.css";
import SprayGun from "./icons/SprayGun";

// Full-width section divider. When it scrolls into view a gloved hand with a
// paint gun makes three passes: left to right painting the main stripe, right
// to left laying the thin second line, then left to right with a clear-coat
// shine, then rests at the right end. With reduced motion (or no
// IntersectionObserver) it shows the finished stripe with the gun at rest.
function Divider() {
  const ref = useRef(null);
  const [painted, setPainted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduce || !("IntersectionObserver" in window)) {
      setPainted(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPainted(true);
          io.disconnect();
        }
      },
      { threshold: 0.7 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="divider" aria-hidden="true">
      <div ref={ref} className={`divider__stage ${painted ? "is-painted" : ""}`}>
        <div className="divider__stripe">
          <span className="divider__line divider__line--main">
            <span className="divider__sheen" />
          </span>
          <span className="divider__line divider__line--fine" />
        </div>
        <div className="divider__rig">
          <span className="divider__mist" />
          <SprayGun className="divider__gun" />
        </div>
      </div>
    </div>
  );
}

export default Divider;
