// One place for the shop's details. Change a number or the hours here and
// every part of the site picks it up.

export const SHOP = {
  name: "Migshot Auto Solutions",
  owner: "Miguel Rodriguez",
  phoneDisplay: "215-833-1530",
  phoneHref: "tel:+12158331530",
  smsHref: "sms:+12158331530",
  email: "contactus@migshotautosolutions.com",
  street: "2701 E Butler St",
  cityLine: "Philadelphia, PA 19137",
  instagramHandle: "@MigshotAutoSolutions",
  instagramUrl: "https://www.instagram.com/MigshotAutoSolutions/",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=2701+E+Butler+St+Philadelphia+PA+19137",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=2701%20E%20Butler%20St%2C%20Philadelphia%2C%20PA%2019137&z=15&output=embed",
  // Opens the shop's Google listing, where people can leave a review.
  // Swap for the direct "write a review" link from Google Business Profile
  // when you have it.
  googleListingUrl:
    "https://www.google.com/maps/search/?api=1&query=Migshot+Auto+Solutions+2701+E+Butler+St+Philadelphia+PA",
  formspreeEndpoint: "https://formspree.io/f/xeebywka",
};

// day: 0 = Sunday. open/close are 24h hours. null = closed.
export const HOURS = [
  { day: 1, label: "Monday", open: 9, close: 17 },
  { day: 2, label: "Tuesday", open: 9, close: 17 },
  { day: 3, label: "Wednesday", open: 9, close: 17 },
  { day: 4, label: "Thursday", open: 9, close: 17 },
  { day: 5, label: "Friday", open: 9, close: 17 },
  { day: 6, label: "Saturday", open: 9, close: 13 },
  { day: 0, label: "Sunday", open: null, close: null },
];

export function formatHour(h) {
  const suffix = h >= 12 ? "PM" : "AM";
  const twelve = h % 12 === 0 ? 12 : h % 12;
  return `${twelve} ${suffix}`;
}

export function hoursText(row) {
  return row.open === null
    ? "Closed"
    : `${formatHour(row.open)} to ${formatHour(row.close)}`;
}

// Current day and hour at the shop (Philadelphia time), whatever time zone
// the visitor's phone is in.
function shopNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t)?.value;
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return {
    day: days.indexOf(get("weekday")),
    hour: Number(get("hour")) + Number(get("minute")) / 60,
  };
}

export function openStatus() {
  try {
    const { day, hour } = shopNow();
    const today = HOURS.find((h) => h.day === day);
    if (today.open !== null && hour >= today.open && hour < today.close) {
      return { open: true, text: `Open now until ${formatHour(today.close)}`, today: day };
    }
    // find the next opening
    for (let i = 0; i < 8; i++) {
      const d = (day + i) % 7;
      const row = HOURS.find((h) => h.day === d);
      if (row.open === null) continue;
      if (i === 0 && hour >= row.open) continue;
      const when = i === 0 ? "today" : i === 1 ? "tomorrow" : row.label;
      return { open: false, text: `Closed now. Opens ${when} at ${formatHour(row.open)}`, today: day };
    }
  } catch {
    // fall through
  }
  return null;
}
