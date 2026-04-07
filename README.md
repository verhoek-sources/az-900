# AZ-900 Quiz — Azure Fundamentals

A portable, offline-capable quiz app to help you study for and pass the **Microsoft AZ-900: Azure Fundamentals** exam. Runs entirely in the browser — no install, no server, no internet connection required.

## Features

- **158 questions** across all three AZ-900 exam domains
- Two question modes: **Learning** (conceptual) and **Exam** (scenario-based)
- Immediate right/wrong feedback with detailed explanations
- **MS Learn links** on every question — jump straight to the relevant study page
- Live **score by domain** and **score by module** during the quiz
- **"Focus on"** bar highlighting your weakest modules as you go
- **"Study these"** section on the results screen listing questions you got wrong
- Score history stored in `localStorage` — tracks your last 5 runs across sessions
- Pass/fail result at the 70% threshold (matching the real exam)
- Works fully offline; can be copied to a USB drive and opened on any computer

## Question bank

Questions are distributed to mirror the official AZ-900 exam weights:

| Domain | Questions | Exam weight |
|---|---|---|
| Cloud Concepts | 39 | 25–30% |
| Azure Architecture & Services | 69 | 35–40% |
| Azure Management & Governance | 50 | 30–35% |
| **Total** | **158** | **100%** |

Each question includes:
- Question text and four answer options
- Zero-based `answer` index
- `explanation` shown after answering
- `module` — one of the 11 MS Learn modules
- `learnUrl` — link to the module root on MS Learn
- `pageUrl` — link to the specific unit most relevant to that question

## Usage

1. Clone or download this repository
2. Open `index.html` in any modern browser
3. Click **Start Quiz** and answer questions one at a time
4. Review your results and weak areas at the end
5. Click **Try Again** to reshuffle and retake

No build step, no dependencies, no CDN calls.

## File structure

```
az900-quiz/
├── index.html               ← App shell: all HTML, CSS, and JavaScript
├── questions.js             ← Question bank (global QUESTIONS array, 158 questions)
├── favicon.svg              ← App icon (SVG)
├── favicon.ico              ← App icon (ICO fallback)
├── favicon-16x16.png        ← App icon 16×16
├── favicon-32x32.png        ← App icon 32×32
├── apple-touch-icon.png     ← iOS home screen icon
├── site.webmanifest         ← PWA manifest
└── az900-knowledge-summary.md ← Study reference (all 11 MS Learn modules summarised)
```

## Tech stack

Vanilla HTML5, CSS3, and JavaScript (ES6). Zero external dependencies. Zero build step.

## License

This project is provided for personal study purposes. Question content is based on publicly available Microsoft Learn material.
