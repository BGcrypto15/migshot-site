# Migshot Auto Solutions website

React + Vite, plain CSS. Static site, no database.

## Run it locally

```
npm install
npm run dev
```

Opens at http://localhost:5173

## Where things live

| What | File |
| --- | --- |
| Phone, address, hours, Instagram, form endpoint | `src/data/shop.js` |
| Services list | `src/components/Services.jsx` |
| How it works steps | `src/components/Process.jsx` |
| Miguel's story | `src/components/About.jsx` |
| Reviews | `src/data/reviews.js` |
| Fleet section (offers) | `src/components/Fleet.jsx` |
| Page title, Google description, share preview, business schema | `index.html` |

Change the phone or hours in `src/data/shop.js` and the whole site updates.
If the hours change, also update the `openingHoursSpecification` block in
`index.html` so Google gets the same hours.

## Gallery photos

Drop photos (.jpg, .jpeg, .png, .webp) into `src/assets/gallery/`. No code
changes needed. Full size phone photos are fine: they get resized and turned
into small WebP files when the site builds. Up to 100 photos, sorted by
filename, so name them `01-civic-bumper.jpg`, `02-f150-door.jpg` and so on to
control the order.

For a better description (it shows when someone taps a photo and it helps
Google), add the filename to `CAPTIONS` at the top of
`src/components/Gallery.jsx`.

## Reviews

Real Google reviews live in `src/data/reviews.js`, copied word for word.
The "5.0 from 6 Google reviews" line in the hero and the Reviews section is
worked out from that list, so keep the list in sync with Google. When a new
review comes in (good or bad), add it there. Never write or edit a review.

Each review has a "See it on Google" link (the review's Share > Copy link
URL from Google Maps) so anyone can check it's real. Names show as first
name and last initial. Reviews written in Spanish show the original words
with the English underneath.

If the list is ever emptied, the section switches to a "leave us a review"
panel. A Featurable or Elfsight widget could replace the
`<ul className="reviews__track">` block later.

When you have the direct "write a review" link from Google Business Profile,
put it in `googleListingUrl` in `src/data/shop.js`. The "5.0 from Google
reviews" link at the top of the page uses the same URL.

## Fleet

The Fleet section lists only what Miguel confirmed he offers: priority
scheduling, billing the company directly, pickup/towing, and repaints in
company colors. All work is done at the shop. Don't add turnaround times,
discounts or payment terms without checking with him.

The quote form has a "My vehicle / Company fleet" switch. Fleet requests
arrive with the subject "New FLEET inquiry from the website" plus company
name, fleet size and vehicle types.

## Quote form

Sends through Formspree to contactus@migshotautosolutions.com. The free plan
covers 50 submissions a month and does not include file uploads, which is why
the site asks people to text photos instead. A hidden `_gotcha` field catches
spam bots.

## Deploying

Pushing to `main` deploys the live site automatically.
