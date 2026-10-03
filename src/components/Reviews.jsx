import { useCallback, useEffect, useRef, useState } from "react";
import "./Reviews.css";
import { SHOP } from "../data/shop";
import { REVIEWS, reviewSummary } from "../data/reviews";
import { StarIcon, ChevronIcon } from "./icons/Icons";

// Real Google reviews live in src/data/reviews.js. If that list is ever
// emptied, this section falls back to a "leave us a review" panel instead of
// showing anything fake. An Elfsight / Featurable widget could also replace
// the <ul className="reviews__track"> block later.

function Stars({ count }) {
  return (
    <span className="review-card__stars" role="img" aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}
      <span className="review-card__stars-off" aria-hidden="true">{"★".repeat(5 - count)}</span>
    </span>
  );
}

// Long reviews get trimmed with a "Read more" button so cards stay even.
const LONG = 220;

function Reviews() {
  const summary = reviewSummary();
  const [open, setOpen] = useState({});
  const toggle = (key) => setOpen((o) => ({ ...o, [key]: !o[key] }));

  // Carousel arrows: move one card at a time, disable at either end.
  const trackRef = useRef(null);
  const [ends, setEnds] = useState({ start: true, end: false });
  const updateEnds = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    setEnds({
      start: t.scrollLeft <= 4,
      end: t.scrollLeft + t.clientWidth >= t.scrollWidth - 4,
    });
  }, []);
  useEffect(() => {
    updateEnds();
    window.addEventListener("resize", updateEnds);
    return () => window.removeEventListener("resize", updateEnds);
  }, [updateEnds]);
  const scroll = (dir) => {
    const t = trackRef.current;
    if (!t) return;
    const card = t.querySelector(".review-card");
    const gap = parseFloat(getComputedStyle(t).columnGap) || 16;
    const step = card ? card.getBoundingClientRect().width + gap : t.clientWidth;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    t.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <div className="reviews__header">
          <div>
            <p className="eyebrow glow-text">Reviews</p>
            <h2>What customers say</h2>
          </div>
          {summary && REVIEWS.length > 1 && (
            <div className="reviews__controls">
              <button
                type="button"
                aria-label="Previous reviews"
                onClick={() => scroll(-1)}
                disabled={ends.start}
              >
                <ChevronIcon dir="left" size={22} />
              </button>
              <button
                type="button"
                aria-label="Next reviews"
                onClick={() => scroll(1)}
                disabled={ends.end}
              >
                <ChevronIcon dir="right" size={22} />
              </button>
            </div>
          )}
        </div>

        {summary ? (
          <>
            <p className="reviews__summary">
              <span className="reviews__summary-stars" aria-hidden="true">
                {"★".repeat(Math.round(Number(summary.average)))}
              </span>
              <strong>{summary.average}</strong> from{" "}
              <a href={SHOP.googleListingUrl} target="_blank" rel="noopener noreferrer">
                Google reviews
              </a>
            </p>

            <ul className="reviews__track" ref={trackRef} onScroll={updateEnds}>
              {REVIEWS.map((r) => (
                <li
                  className={`review-card ${
                    r.text.length > LONG ? "is-long" : ""
                  } ${open[r.url] ? "is-open" : ""}`}
                  key={r.url}
                >
                  <div className="review-card__top">
                    <Stars count={r.stars} />
                    {r.tag && <span className="review-card__tag">{r.tag}</span>}
                  </div>

                  {r.original && (
                    <blockquote className="review-card__text" lang="es">
                      <p>&ldquo;{r.original}&rdquo;</p>
                    </blockquote>
                  )}
                  <blockquote
                    className={`review-card__text ${r.original ? "review-card__text--translation" : ""}`}
                  >
                    <p>&ldquo;{r.text}&rdquo;</p>
                  </blockquote>
                  {r.translationNote && (
                    <p className="review-card__note">{r.translationNote}</p>
                  )}
                  {r.text.length > LONG && (
                    <button
                      type="button"
                      className="review-card__more"
                      aria-expanded={!!open[r.url]}
                      onClick={() => toggle(r.url)}
                    >
                      {open[r.url] ? "Show less" : "Read more"}
                    </button>
                  )}

                  <div className="review-card__foot">
                    <span className="review-card__name">{r.name}</span>
                    <a
                      className="review-card__link"
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See it on Google<span className="visually-hidden">: review by {r.name}</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            {REVIEWS.length > 1 && (
              <p className="reviews__hint">Swipe for more reviews.</p>
            )}

            <div className="reviews__actions">
              <a
                className="btn btn--outline"
                href={SHOP.googleListingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read or leave a review on Google
              </a>
            </div>
          </>
        ) : (
          <div className="reviews__empty">
            <StarIcon size={30} className="reviews__empty-icon" />
            <div>
              <h3>New name on the sign. Reviews are just getting started.</h3>
              <p>
                If we&rsquo;ve worked on your car, a quick Google review helps
                the next person find us.
              </p>
              <a
                className="btn btn--outline"
                href={SHOP.googleListingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Google review
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Reviews;
