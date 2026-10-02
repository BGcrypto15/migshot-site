import { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import { ChevronIcon, CloseIcon } from "./icons/Icons";

// Auto-loads every image dropped into src/assets/gallery. No code changes
// needed to add or remove photos. Big phone photos are fine: they get resized
// and converted to WebP when the site builds.
const thumbs = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}", {
  eager: true,
  import: "default",
  query: { w: "720", format: "webp", withoutEnlargement: "" },
});
const fulls = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}", {
  eager: true,
  import: "default",
  query: { w: "1600", format: "webp", withoutEnlargement: "" },
});

// Optional: a better description for a photo, keyed by filename (no extension).
// Anything not listed here gets a description made from its filename.
const CAPTIONS = {
  "honda-accord-before-after":
    "Honda Accord before and after: primer and bare panels on top, finished glossy black with copper wheels and trim on the bottom",
  "paint-booth": "Inside the paint booth, clean and ready to spray",
  "working-honda-accord": "Prep work on the Honda Accord in the paint booth",
};

const MAX_PHOTOS = 100;

const photos = Object.keys(thumbs)
  .sort((a, b) => a.localeCompare(b))
  .slice(0, MAX_PHOTOS)
  .map((path) => {
    const key = path.split("/").pop().replace(/\.[^/.]+$/, "");
    const words = key.replace(/^\d+[-_ ]*/, "").replace(/[-_]+/g, " ").trim();
    const label = CAPTIONS[key] || words.charAt(0).toUpperCase() + words.slice(1);
    return { thumb: thumbs[path], full: fulls[path], label };
  });

function Gallery() {
  const trackRef = useRef(null);
  const dialogRef = useRef(null);
  const [active, setActive] = useState(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".gallery__card");
    const step = card ? card.getBoundingClientRect().width + 16 : 320;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (active !== null && !dlg.open) dlg.showModal();
    if (active === null && dlg.open) dlg.close();
  }, [active]);

  if (photos.length === 0) return null;

  const show = (i) => setActive((i + photos.length) % photos.length);
  const current = active !== null ? photos[active] : null;

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="gallery__header">
          <div>
            <p className="eyebrow glow-text">Our work</p>
            <h2>Straight from the booth</h2>
          </div>
          {photos.length > 1 && (
            <div className="gallery__controls">
              <button aria-label="Previous photos" onClick={() => scroll(-1)}>
                <ChevronIcon dir="left" size={22} />
              </button>
              <button aria-label="Next photos" onClick={() => scroll(1)}>
                <ChevronIcon dir="right" size={22} />
              </button>
            </div>
          )}
        </div>

        <ul className="gallery__track" ref={trackRef}>
          {photos.map((photo, i) => (
            <li className="gallery__card" key={photo.thumb}>
              <button
                className="gallery__open"
                onClick={() => show(i)}
                aria-label={`View larger: ${photo.label}`}
              >
                <img src={photo.thumb} alt={photo.label} loading="lazy" decoding="async" />
              </button>
            </li>
          ))}
        </ul>
        <p className="gallery__hint">Tap a photo to see it bigger.</p>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Photo viewer"
        onClose={() => setActive(null)}
        onClick={(e) => e.target === e.currentTarget && setActive(null)}
      >
        {current && (
          <figure className="lightbox__figure">
            <img src={current.full} alt={current.label} />
            <figcaption>{current.label}</figcaption>
          </figure>
        )}
        <button className="lightbox__close" aria-label="Close" onClick={() => setActive(null)}>
          <CloseIcon size={24} />
        </button>
        {photos.length > 1 && (
          <>
            <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous photo" onClick={() => show(active - 1)}>
              <ChevronIcon dir="left" size={28} />
            </button>
            <button className="lightbox__nav lightbox__nav--next" aria-label="Next photo" onClick={() => show(active + 1)}>
              <ChevronIcon dir="right" size={28} />
            </button>
          </>
        )}
      </dialog>
    </section>
  );
}

export default Gallery;
