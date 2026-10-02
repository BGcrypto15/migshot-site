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
| Reviews | `src/components/Reviews.jsx` |
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

Real reviews only. `REVIEWS` in `src/components/Reviews.jsx` is empty on
purpose. While it's empty, the section asks customers to leave a Google
review instead of showing fake cards.

- Copy real Google reviews into the `REVIEWS` array, or
- Replace the `<ul className="reviews__track">` block with an Elfsight or
  Google reviews widget embed.

When you have the direct "write a review" link from Google Business Profile,
put it in `googleListingUrl` in `src/data/shop.js`.

## Quote form

Sends through Formspree to contactus@migshotautosolutions.com. The free plan
covers 50 submissions a month and does not include file uploads, which is why
the site asks people to text photos instead. A hidden `_gotcha` field catches
spam bots.

## Deploying

Pushing to `main` deploys the live site automatically.
