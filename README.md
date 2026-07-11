# Migshot Auto Solutions — Website

Built with React + Vite. Static site, no database or backend needed.

## Running it locally

```
npm install
npm run dev
```

Opens at http://localhost:5173

## How to update things yourself

### Add or remove gallery photos
Drop image files (.jpg, .jpeg, .png, .webp) directly into:

```
src/assets/gallery/
```

That's it — no code changes needed. The gallery finds every image in that
folder automatically, up to 100 photos, sorted by filename. To control the
order they appear in, name files with a number prefix, e.g. `01-honda.jpg`,
`02-truck.jpg`.

To remove a photo, just delete the file from that folder.

### Swap in real reviews
Right now `src/components/Reviews.jsx` shows placeholder "Sample review"
cards so it's obvious nothing there is real yet. When you're ready:

- **Quick option:** edit the `SAMPLE_REVIEWS` array at the top of that file
  with real review text.
- **Better option:** sign up for a free Elfsight or Google Reviews widget,
  and replace the `<div className="reviews__track">...</div>` block with
  the embed code they give you. The section title/layout around it can stay
  as-is.

### Update hours, phone, address, services
All in plain text near the top of these files:
- `src/components/Contact.jsx` — hours, address, phone
- `src/components/Services.jsx` — services list
- `src/components/Header.jsx` — phone number in the nav bar

### Update the contact form recipient
The form sends to Formspree, which forwards to
contactus@migshotautosolutions.com. To change the destination email or see
submissions, log into your Formspree account at formspree.io — the endpoint
is already wired into `src/components/Contact.jsx`.

## Deploying

See the deployment steps Claude walked through in chat. Short version:
push this folder to GitHub, connect the repo in Vercel, then point your
GoDaddy domain at Vercel's nameservers.
