# Pranjal — AI & ML Engineer Portfolio

A premium, recruiter-focused portfolio engineered for an ambitious AI/ML undergraduate building practical applications, agent workflows, and computer vision systems.

Live local preview: **http://localhost:4173** (or run `npm run dev` for dev server).

---

## 🧭 Positioning & Identity

- **Name:** Pranjal
- **Degree:** B.E. Computer Science Engineering (AI & ML)
- **Institution:** Chitkara University (2024 – 2028)
- **CGPA:** 9.66 / 10.00
- **Positioning:** *An AI/ML engineering student building practical AI applications and intelligent systems.*
- **Honest Engineering Integrity:** Clearly distinguishes real implementations (WebSockets, Azure Voice Live, Tesseract OCR, dynamic QR generation) from simulated elements (mock banking settlement, local SQLite demo stores), with zero exaggerated metrics or false claims.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** React 18, TypeScript, Vite
- **Styling & Design System:** Tailwind CSS with custom obsidian/deep-navy theme, electric cyan accents (`#38BDF8`), monospace telemetry badges, accessible contrast, and zero layout shift.
- **Icons:** Lucide React
- **Document Viewer:** Native PDF embedding + 1-click download of `pranjal-resume.pdf`.

---

## 📁 Project Structure

```text
pranjal-ai-portfolio/
├── public/
│   ├── pranjal-resume.pdf     # Verified 1-page resume
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                   # Sticky blur header + mobile sheet + status indicator
│   │   ├── Hero.tsx                     # Headline + pitch + Interactive AI Telemetry Console
│   │   ├── ProjectCard.tsx              # Rich project card with role & verified GitHub link
│   │   ├── ProjectFilter.tsx            # Filter pills (All, GenAI & Agents, CV & ML, Full-Stack)
│   │   ├── CaseStudyModal.tsx           # In-depth technical dossier + architecture + real vs mock audit
│   │   ├── InteractiveArchitecture.tsx  # Interactive system diagram (Maya, RAG, Attendance)
│   │   ├── SkillsSection.tsx            # Categorized skills matrix + real-time search filter
│   │   ├── ExperienceSection.tsx        # SCRS Executive, Smart Attendance Hackathon Award, GDG
│   │   ├── EducationCertifications.tsx  # Chitkara 9.66 CGPA + 3x Azure certifications (AI/DP/AZ-900)
│   │   ├── AdditionalRepos.tsx          # 5 additional public GitHub repositories
│   │   ├── ContactSection.tsx           # 1-click email/phone copy + direct email composer
│   │   ├── ResumeModal.tsx              # In-browser PDF previewer + download
│   │   └── Footer.tsx                   # Technical footer + back-to-top
│   ├── data/
│   │   └── portfolioData.ts             # Truthful, verified source of truth for all projects & skills
│   ├── types/
│   │   └── portfolio.ts                 # Strict TypeScript schemas
│   ├── App.tsx                          # App layout & active modal management
│   ├── index.css                        # Tailwind directives + custom glow & grid styles
│   └── main.tsx                         # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ (verified with Node.js v22.13.0)
- npm

### 2. Development Mode
```bash
npm install
npm run dev
```
Starts Vite dev server at `http://localhost:3000`.

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```
Runs production bundle preview on `http://localhost:4173`.

---

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push repository to GitHub.
2. Import project in [Vercel](https://vercel.com).
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.

### Azure Static Web Apps
```bash
az staticwebapp create \
  --name pranjal-portfolio \
  --resource-group rg-portfolio \
  --source https://github.com/Pb-Pranjal/portfolio \
  --location "eastus2" \
  --branch main \
  --app-location "/" \
  --output-location "dist"
```

---

## 📄 Updating Resume & Data

- **Resume PDF:** Replace `public/pranjal-resume.pdf` with any updated PDF.
- **Project Data & Skills:** Edit `src/data/portfolioData.ts`. All case study fields, metrics, code snippets, and skills will update reactively.
