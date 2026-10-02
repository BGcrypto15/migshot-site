import { useEffect, useState } from "react";
import "./Header.css";
import logo from "../assets/logo/logo-nav.jpg?w=200&format=webp";
import { SHOP } from "../data/shop";
import { PhoneIcon } from "./icons/Icons";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Our Work" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Free Quote" },
];

function Header() {
  const [open, setOpen] = useState(false);

  // Close the menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__brand" aria-label="Migshot Auto Solutions, back to top">
          <img src={logo} alt="" width="200" height="169" />
        </a>

        <nav
          id="site-nav"
          aria-label="Main"
          className={`header__nav ${open ? "header__nav--open" : ""}`}
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href={SHOP.phoneHref} className="header__call">
            <PhoneIcon size={18} />
            <span className="header__call-num">{SHOP.phoneDisplay}</span>
            <span className="header__call-short">Call</span>
          </a>

          <button
            className="header__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
