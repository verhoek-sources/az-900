# AZ-900 Quiz App — Design Spec

**Date:** 2026-04-01  
**Status:** Approved

---

## Overview

A portable, offline-capable quiz app to help users with some cloud familiarity (but new to Azure) study for and pass the AZ-900 exam. Runs entirely in the browser with no server, no install, and no internet connection required. Can be copied to a zip drive and opened on Windows or Mac.

---

## Goals

- Practice AZ-900 exam questions with immediate right/wrong feedback
- Understand *why* answers are correct via explanations
- Track score history over multiple sessions to measure improvement
- Know which exam domains need more work (weighted by official exam percentages)

---

## Files

```
az900-quiz/
├── index.html       ← app shell, all styles and logic
└── questions.js     ← question bank (global QUESTIONS array)
```

No build step, no dependencies, no CDN calls. Works fully offline.

---

## Question Bank (`questions.js`)

Each question is an object in a global `QUESTIONS` array:

```js
{
  id: 1,
  topic: "Cloud Concepts",        // one of three AZ-900 domains
  question: "What is...",
  options: ["A", "B", "C", "D"],
  answer: 1,                       // zero-based index into options[]
  explanation: "Because..."
}
```

### Domain distribution (mirrors real exam weights)

| Domain | Exam Weight | Target Questions |
|---|---|---|
| Cloud Concepts | 25–30% | ~15 |
| Azure Architecture & Services | 35–40% | ~25 |
| Azure Management & Governance | 30–35% | ~20 |
| **Total** | **100%** | **~60** |

Questions are shuffled on each run.

---

## App Screens

### 1. Home Screen
- App title
- Total question count
- "Start Quiz" button
- Score history panel: last 5 runs (date + score %)

### 2. Quiz Screen (one question at a time)
- Thin progress bar at top (% complete)
- Topic badge (color-coded by domain)
- Progress counter: "Question 12 / 60"
- Question text
- 4 answer options as full-width clickable buttons
- On selection:
  - All buttons lock (no re-selection)
  - Correct answer highlights green
  - Selected wrong answer highlights red
  - Explanation text appears below options
- "Next" button to advance

### 3. Results Screen
- Large score display: "42 / 60 — 70%"
- Pass/fail banner (green = pass ≥ 70%, amber = fail)
- Topic breakdown: score per domain + official exam weight + CSS bar chart
- "Try Again" button (reshuffles questions)

---

## Score History

Stored in `localStorage` using a fixed key (`az900-quiz-history`). Persists across browser sessions on the same machine. Stores last 5 results: `{ date, score, total, percent }`.

---

## UI & Styling

- **Color scheme**: Azure blue (`#0078D4`) primary, dark header, white cards
- **Font**: System font stack (no external fonts)
- **Layout**: Single-column, centered, max-width 700px — works on any screen size
- **Domain badge colors**: one distinct color per domain
- **Topic breakdown bars**: pure CSS (no chart library)
- **Pass threshold**: 70% (≈ 700/1000 on the real exam)
- All styles inline in `index.html` — no external stylesheet

---

## Out of Scope

- Timer / timed exam mode
- Question import (JSON/CSV upload)
- Multiple quiz sets or categories beyond the three AZ-900 domains
- Backend, database, or any server component
