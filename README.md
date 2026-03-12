# Dr. SS Dental Care — Redesigned Website

Redesigned static website for Dr. SS Dental Care & Advanced Dental Implant Center, Bangalore. Built with HTML, CSS & JS. Features mega-nav, hero image slider, filterable gallery, appointment form, and 12 inner pages. Deployed on Netlify.

---

## Live Site

> Deployed via Netlify — [https://ssdental.netlify.app](https://ssdental.netlify.app) 

---

## About the Project

This is a complete visual redesign of [drssdental.com](https://drssdental.com), keeping all original content, images, and information intact while introducing a modern layout, refined typography, and improved user experience.

**Design direction:** Refined Luxury — Deep Navy (`#0a3d62`) + Warm Gold (`#c9820a`) palette, Cormorant Garamond serif headings paired with DM Sans body text.

---

## Pages

| File | Route | Description |
|------|-------|-------------|
| `index.html` | `/` | Homepage — hero slider, stats, about, services, videos, gallery, reviews, blog preview, appointment form |
| `pages/about.html` | `/pages/about.html` | About the clinic — history, values, stats |
| `pages/dr-shahul.html` | `/pages/dr-shahul.html` | Dr. Shahul's profile — qualifications, experience |
| `pages/team.html` | `/pages/team.html` | Full specialist team grid |
| `pages/services.html` | `/pages/services.html` | All 12+ dental services overview |
| `pages/dental-implants.html` | `/pages/dental-implants.html` | Dental Implants detail page |
| `pages/root-canal.html` | `/pages/root-canal.html` | Root Canal Treatment detail page |
| `pages/smile-designing.html` | `/pages/smile-designing.html` | Smile Designing detail page |
| `pages/orthodontics.html` | `/pages/orthodontics.html` | Orthodontics & Clear Aligners detail page |
| `pages/gallery.html` | `/pages/gallery.html` | Filterable image & video gallery |
| `pages/blog.html` | `/pages/blog.html` | Dental health tips & articles |
| `pages/contact.html` | `/pages/contact.html` | Contact info, message form, Google Map |
| `pages/appointment.html` | `/pages/appointment.html` | Appointment booking form |

---

## Project Structure

```
SSDental_website/
├── index.html              # Homepage
├── assets/
│   └── logo.png            # Clinic logo
├── css/
│   ├── style.css           # Main stylesheet (homepage)
│   └── pages.css           # Shared styles for all inner pages
├── js/
│   ├── main.js             # Homepage JS (slider, nav, gallery, modal)
│   └── pages.js            # Inner pages JS (nav, form feedback)
└── pages/
    ├── about.html
    ├── appointment.html
    ├── blog.html
    ├── contact.html
    ├── dental-implants.html
    ├── dr-shahul.html
    ├── gallery.html
    ├── orthodontics.html
    ├── root-canal.html
    ├── services.html
    ├── smile-designing.html
    └── team.html
```

---

## Features

- **Hero image slider** — uses real clinic slide images (`slides/1.jpg`, `slides/2.jpg`) with smooth fade transitions and auto-play every 5 seconds
- **Mega dropdown navigation** — Services menu with 4 categorized columns; slim dropdowns for About and Team
- **Mobile responsive** — hamburger menu with accordion dropdowns, fluid grid layouts across all breakpoints
- **Scrolling ticker** — animated service name marquee below the hero
- **Gallery filter** — All / Images / Videos tabs with smooth show/hide transitions
- **Video modal** — YouTube embed popup with ESC key and backdrop-click to close
- **Appointment form** — client-side validation with visual success feedback
- **Scroll reveal animations** — cards and sections fade up as they enter the viewport
- **WhatsApp floating button** — quick access chat shortcut
- **Sticky header** — shadow appears on scroll
- **Google Maps embed** — clinic location on the Contact page

---

## Fonts & Icons

- **Cormorant Garamond** — headings (loaded via Google Fonts)
- **DM Sans** — body text (loaded via Google Fonts)
- **DM Mono** — eyebrow labels (loaded via Google Fonts)
- **Font Awesome 6.5** — icons (loaded via CDN)

> All fonts and icons load from CDN. No local font files needed.

---

## Browser Support

Works in all modern browsers — Chrome, Firefox, Safari, Edge. No polyfills required.

---

## Credits

- **Clinic:** Dr. SS Dental Care & Advanced Dental Implant Center, HSR Layout, Bengaluru
- **Original website:** [drssdental.com](https://drssdental.com)
- **Designed by:** Endurance Tech
