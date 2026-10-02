import "./Reviews.css";
import { SHOP } from "../data/shop";
import { StarIcon } from "./icons/Icons";

// REAL REVIEWS ONLY. Leave this empty until customers actually leave them.
// While it's empty the section shows a "leave us a review" panel instead of
// fake cards. To add one, copy a real Google review in like this:
//   { name: "First name + last initial", text: "What they wrote", stars: 5 },
// Or drop an Elfsight / Google reviews widget in place of the
// <ul className="reviews__track"> block below. The section around it stays.
const REVIEWS = [];

function Reviews() {
  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <p className="eyebrow glow-text">Reviews</p>
        <h2>What customers say</h2>

        {REVIEWS.length > 0 ? (
          <ul className="reviews__track">
            {REVIEWS.map((r, i) => (
              <li className="review-card" key={i}>
                <div className="review-card__stars" aria-label={`${r.stars} out of 5 stars`}>
                  {"★".repeat(r.stars)}
                </div>
                <p>{r.text}</p>
                <span className="review-card__name">{r.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="reviews__empty">
            <StarIcon size={30} className="reviews__empty-icon" />
            <div>
              <h3>New name on the sign. Reviews are just getting started.</h3>
              <p>
                Migshot Auto Solutions opened under Miguel&rsquo;s own name, so
                the Google page is brand new. If we&rsquo;ve worked on your
                car, a quick review helps the next person find us.
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
