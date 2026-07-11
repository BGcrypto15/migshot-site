import "./Reviews.css";

// PLACEHOLDER CONTENT — these are sample cards, not real customer reviews.
// Swap this block out for an Elfsight or Google Reviews embed widget later;
// the section wrapper and layout stay the same either way.
const SAMPLE_REVIEWS = [
  {
    name: "Sample Customer",
    text: "This is a placeholder review. Real customer feedback will go here once we start collecting it.",
    stars: 5,
  },
  {
    name: "Sample Customer",
    text: "Another placeholder card. Swap these out for real reviews or drop in a Google/Elfsight widget.",
    stars: 5,
  },
  {
    name: "Sample Customer",
    text: "Layout is ready for a live review feed — this text is just holding the space for now.",
    stars: 5,
  },
];

function Reviews() {
  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <p className="eyebrow">Reviews</p>
        <h2>What people are saying</h2>
        <p className="reviews__note">
          Sample content below — real reviews coming soon.
        </p>
        <div className="reviews__track">
          {SAMPLE_REVIEWS.map((r, i) => (
            <div className="review-card" key={i}>
              <span className="review-card__badge">Sample review</span>
              <div className="review-card__stars">{"★".repeat(r.stars)}</div>
              <p>{r.text}</p>
              <span className="review-card__name">{r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
