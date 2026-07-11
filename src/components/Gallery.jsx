import { useRef } from "react";
import "./Gallery.css";

// Auto-loads every image dropped into src/assets/gallery. No code changes
// needed to add/remove photos. Just drop a file in that folder.
const modules = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const MAX_PHOTOS = 100;

const photos = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .slice(0, MAX_PHOTOS)
  .map(([path, src]) => {
    const filename = path.split("/").pop().replace(/\.[^/.]+$/, "");
    const label = filename.replace(/[-_]/g, " ");
    return { src, label };
  });

function Gallery() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  if (photos.length === 0) return null;

  return (
    <section id="gallery" className="gallery section">
      <div className="container gallery__header">
        <div>
          <p className="eyebrow glow-text">Recent work</p>
          <h2>Before & After</h2>
        </div>
        <div className="gallery__controls">
          <button aria-label="Scroll left" onClick={() => scroll(-1)}>‹</button>
          <button aria-label="Scroll right" onClick={() => scroll(1)}>›</button>
        </div>
      </div>
      <div className="gallery__track" ref={trackRef}>
        {photos.map((photo) => (
          <figure className="gallery__card" key={photo.src}>
            <img src={photo.src} alt={photo.label} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
