# Prathvik Mehra — Portfolio

A modern, dark-themed personal portfolio built with **React + Vite**, featuring premium olive-green aesthetics, glassmorphism, smooth animations, and a polished dark/light theme toggle.

## 🌐 Live Site

> Deployed via Vercel / GitHub Pages

---

## ✨ Features

- **Hero Section** — Dynamic greeting with typewriter animation and social links
- **About & Skills** — Split layout with animated skill progress bars
- **Projects** — Cards with live demo and YouTube video links
- **Hackathons** — Staggered preview cards with full-screen modal detail view:
  - Certificate display on the left
  - About + Experience on the right
  - Flip to view photo memories (actual hackathon photos)
  - Problem Statement, GitHub repo, and Live Project buttons
- **Certificates** — Infinite auto-scrolling marquee of achievements
- **Education** — Academic timeline
- **Contact** — Email form with EmailJS integration
- **Navbar** — Floating capsule navbar with icon links, live clock, and theme toggle

---

## 🏆 Hackathons Showcased

### Electrosphere 2k25
- **Event:** Electrosphere 2025 — 12-hour hackathon
- **Project:** [KrishiSaathi v2.0](https://github.com/Jivan-Patel/KrishiSaathi_v2.0) — A comprehensive agri-tech platform for Indian farmers
- **Live Demo:** [krishi-saathi-elite-hack.vercel.app](https://krishi-saathi-elite-hack.vercel.app/)
- **Role:** UI/UX Designer

---

## 🛠️ Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Framework | React 18 + Vite                   |
| Styling   | Vanilla CSS (custom design system)|
| Animation | Framer Motion                     |
| Icons     | React Icons (HI, FA)              |
| Email     | EmailJS                           |
| Routing   | react-scroll (smooth anchor nav)  |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Prathvikmehra/PortFolio.git

# Navigate into the project
cd portfolio/project

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📁 Project Structure

```
project/
├── public/
│   └── games/              # Mini browser games
├── src/
│   ├── assets/             # Images, certificates, hackathon photos
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── AboutSkills.jsx
│   │   ├── Projects.jsx
│   │   ├── Hackathons.jsx  # New — interactive hackathon cards
│   │   ├── Certificates.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── App.css             # Global design system & all component styles
└── README.md
```

---

## 📄 License

MIT — feel free to use this as inspiration for your own portfolio!
