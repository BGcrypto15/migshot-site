// REAL GOOGLE REVIEWS ONLY. Copied word for word from Miguel's Google
// Business Profile. Never write or edit a review here.
//
// To add a new one, copy a block below and fill it in:
//   name:      first name + last initial
//   stars:     1 to 5, exactly what they gave
//   text:      their words, exactly as written
//   original:  only if they wrote it in another language (their exact words)
//   translationNote: "Translated by Google" if you copied Google's translation
//   tag:       short label for what the job was (optional)
//   url:       the review's share link from Google Maps (Share > Copy link)
//
// Order matters: the first ones show first.

export const REVIEWS = [
  {
    name: "Angelina W.",
    stars: 5,
    tag: "Accident repair, insurance claim",
    text: "The owner Miguel did a beyond amazing job on my car!!!! He was very professional and completed my car in a reasonable time frame! I had got in an accident and he completely transformed my car looking better than brand new. I was honestly shocked with how easy it was to work with him and how well he worked with my insurance. I was happy he made this process easy and made it so I didn't have yet another thing to worry about. Thank you so much Miguel!!!!! I definitely recommend Miguel for his service!",
    url: "https://maps.app.goo.gl/iYrGQqxJovZnGtvT8",
  },
  {
    name: "Jose R.",
    stars: 5,
    tag: "Corvette fiberglass repair",
    // Ben's call: the reviewer's em dash is shown as a period. Words unchanged.
    text: "I brought my 2016 Corvette Stingray (Red) to Migshot Solutions after my wife accidentally hit a curb, cracking the fiberglass underneath. Their team did an outstanding job. The repair was flawless, and the car looked brand-new again. Excellent craftsmanship and great service. Highly recommended",
    url: "https://maps.app.goo.gl/riDrb3DYLanN9MHt6",
  },
  {
    name: "Johan V.",
    stars: 5,
    tag: "Paint job",
    text: "Miguel did an amazing job painting my car. I'm really happy with the results, the paint came out beautiful, clean, and professional, and the car looks great. He did quality work and paid attention to the details. I had a great experience with Migshot Auto Solutions and would definitely recommend Miguel to anyone looking for a good paint job for their car. 5 stars!",
    url: "https://maps.app.goo.gl/mxeRK8VyXv75hsr29",
  },
  {
    name: "Dawill S.",
    stars: 5,
    tag: "Paint job",
    original:
      "El mejor pintor de autos que he visto, excellentes precios, mucha dedicatcon, y me entrego a tiempo tal cual lo acordado. Gracias a el me enamored nuevamente de mi auto.",
    text: "The best car painter I've ever seen, excellent prices, very dedicated, and he delivered on time exactly as agreed. Thanks to him, I fell in love with my car all over again.",
    translationNote: "Translated by Google",
    url: "https://maps.app.goo.gl/ZzZYAe9GXoGXBR6B8",
  },
  {
    name: "Nhat T.",
    stars: 5,
    text: "Unbelievable work! Highly recommend!",
    url: "https://maps.app.goo.gl/sQc71x7UxHvw39ji7",
  },
  {
    name: "Miguel F.",
    stars: 5,
    original: "Lo mejor de lo mejor el trabajo me encantó le doy 100 de 100 🔥🔥🔥🔥🔥🔥🔥🔥...",
    text: "The best of the best, I loved the work, I give it 100 out of 100 🔥🔥🔥🔥🔥🔥🔥🔥...",
    translationNote: "English translation",
    url: "https://maps.app.goo.gl/ndWwVtxne7DDm2qL8",
  },
];

// Summary line, worked out from the list above so it can't drift from it.
// Keep the list in sync with Google so this stays true.
export function reviewSummary() {
  if (!REVIEWS.length) return null;
  const avg = REVIEWS.reduce((s, r) => s + r.stars, 0) / REVIEWS.length;
  return {
    count: REVIEWS.length,
    average: (Math.round(avg * 10) / 10).toFixed(1),
  };
}
