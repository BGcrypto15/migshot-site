import { useEffect, useRef, useState } from "react";
import "./Divider.css";
import SprayGun from "./icons/SprayGun";

// Section divider: a gloved hand with a paint gun sweeps across and lays down
// a sharp two-tone pinstripe when it scrolls into view. With reduced motion
// turned on (or no IntersectionObserver), it just shows the finished stripe.
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
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="divider container" aria-hidden="true">
      <div ref={ref} className={`divider__stage ${painted ? "is-painted" : ""}`}>
        <div className="divider__stripe">
          <span className="divider__line divider__line--main" />
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
