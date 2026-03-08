# 🚀 Akash's Developer Portfolio

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=vercel)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![MUI](https://img.shields.io/badge/Material_UI-v6-007FFF?style=for-the-badge&logo=mui)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**A modern, animated developer portfolio built with React, Material UI, and Framer Motion.**

[View Live](https://l1ner.netlify.app/) · [GitHub Profile](https://github.com/liner14) · [Report Bug](https://github.com/liner14/Portfolio/issues)

</div>

---

## ✨ Features

| Feature                         | Description                                                |
| ------------------------------- | ---------------------------------------------------------- |
| 🎨 **Material UI v6**           | Full MUI component library integration with custom theme   |
| 🌗 **Dark / Light Mode**        | Persistent theme toggle synced with MUI ThemeProvider      |
| 🎞️ **Framer Motion Animations** | Typing animation, scroll-triggered reveals, hover effects  |
| 📱 **Fully Responsive**         | Mobile-first design with MUI Drawer navigation             |
| 🔍 **Project Filtering**        | Filter projects by technology with animated transitions    |
| 📊 **Animated Skill Bars**      | MUI LinearProgress bars with gradient fills                |
| 📬 **Contact Form**             | MUI TextField form with validation and toast notifications |
| ⚡ **Vite Build**               | Lightning-fast dev server and optimised production builds  |
| 🪟 **Glassmorphism**            | Frosted glass effects on Navbar, Cards, and Contact form   |
| 🌀 **Gradient Orbs**            | Animated background orb effects in Hero section            |

---

## 🛠️ Tech Stack

### Core

- **[React 19](https://react.dev/)** — UI framework
- **[Vite 7](https://vitejs.dev/)** — Build tool & dev server
- **[TypeScript / JSX](https://react.dev/)** — Component authoring

### UI & Styling

- **[Material UI v6](https://mui.com/)** — Component library (AppBar, Card, TextField, Chip, LinearProgress, etc.)
- **[@emotion/react + styled](https://emotion.sh/)** — MUI's CSS-in-JS engine
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility classes for layout
- **[Inter Font](https://fonts.google.com/specimen/Inter)** — Typography

### Animation

- **[Framer Motion 12](https://www.framer.com/motion/)** — Page-enter animations, hover effects, AnimatePresence, typing animation

### Utilities

- **[react-hot-toast](https://react-hot-toast.com/)** — Toast notifications on form submit
- **[@mui/icons-material](https://mui.com/material-ui/material-icons/)** — Icon set

---

## 📂 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf              # Your resume (optional)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # MUI AppBar + Framer Motion entrance
│   │   ├── Footer.jsx          # MUI Stack + social links
│   │   ├── ProjectCard.jsx     # MUI Card with hover animation
│   │   ├── SectionWrapper.jsx  # Scroll-triggered fade-in wrapper
│   │   └── SkillBar.jsx        # Legacy skill bar (superseded by Skills.jsx)
│   ├── sections/
│   │   ├── Hero.jsx            # Typing animation + animated orbs
│   │   ├── About.jsx           # Bio, highlights, stat counters
│   │   ├── Projects.jsx        # Filterable project grid
│   │   ├── Skills.jsx          # MUI LinearProgress skill bars
│   │   └── Contact.jsx         # MUI TextField contact form
│   ├── App.jsx                 # Root with MUI ThemeProvider
│   ├── data.js                 # All content (projects, skills, bio)
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind + custom design tokens
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/liner14/Portfolio.git

# Navigate into the project
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder — ready to deploy to Vercel, Netlify, or GitHub Pages.

---

## 📸 Sections

### 🏠 Hero

- Animated gradient name text
- Typing animation cycling through roles (Frontend Developer, React Enthusiast, etc.)
- Animated pulsing gradient orbs in background
- CTA buttons with MUI + Framer Motion hover effects
- GitHub & LinkedIn social icon links

### 👤 About

- Bio paragraph with skill chips
- Stat counters (Projects, Repos, Tech Stack)
- Highlighted achievements with animated list items

### 🗂️ Projects

- Real projects from [github.com/liner14](https://github.com/liner14)
- Filter chips by technology (React, JavaScript, MUI, etc.)
- AnimatePresence for smooth filter transitions
- MUI Cards with gradient accent bars and Featured badges

### 💡 Skills & Technologies

- Grouped into Frontend, Backend, and Tools
- MUI LinearProgress bars with gradient fills
- Animated on scroll with stagger effect
- Tooltip showing exact proficiency percentage

### 📬 Contact

- MUI TextField form with icon adornments
- Client-side validation
- Toast notification on success
- Quick-access social links (GitHub, LinkedIn)

---

## 🎨 Customisation

All content is centralised in **`src/data.js`**. Update the following exports to personalise the portfolio:

```js
// Your personal info
export const heroInfo = { name: "YourName", ... };

// Your social links
export const socialLinks = { github: "...", linkedin: "..." };

// Your projects
export const projects = [ { title: "...", ... } ];

// Your skills
export const skills = { Frontend: [ ... ] };
```

The MUI theme is configured in **`src/App.jsx`** inside `createTheme()`. Adjust the primary colour palette there.

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "@emotion/react": "^11.x",
    "@emotion/styled": "^11.x",
    "@mui/icons-material": "^6.x",
    "@mui/material": "^6.x",
    "framer-motion": "^12.x",
    "react": "^19.x",
    "react-dom": "^19.x",
    "react-hot-toast": "^2.x",
    "react-icons": "^5.x"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.x",
    "@vitejs/plugin-react": "^5.x",
    "tailwindcss": "^4.x",
    "vite": "^7.x"
  }
}
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

### GitHub Pages

Add `base: '/Portfolio/'` to `vite.config.js`, then:

```bash
npm run build
# Push dist/ to gh-pages branch
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Akash** · [@liner14](https://github.com/liner14)

---

<div align="center">

Made with ❤️, React, MUI & Framer Motion

⭐ Star this repo if you found it helpful!

</div>
