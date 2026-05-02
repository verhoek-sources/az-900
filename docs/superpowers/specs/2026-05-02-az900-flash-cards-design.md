# AZ-900 Flash Cards — Design Spec

**Date:** 2026-05-02  
**Status:** Approved

---

## Overview

Add a **Flash Cards** study mode to the AZ-900 quiz app. Instead of answering multiple-choice questions, the user sees only the question text, then taps "Reveal Answer" to read the explanation. The user then self-marks each card as **Got it** or **Try again**, working through all questions. A results screen shows mastery percentage and lists every card that needs more practice, grouped by module with MS Learn links.

---

## Goals

- Complement the quiz mode with a low-pressure study tool
- Let users rehearse terminology and concepts before tackling the quiz
- Show which topics still need work (same module grouping as the existing app)

---

## App Screens

### Home Screen change

Add a secondary "Flash Cards" button below the existing "Start Quiz" button.

```
[ Start Quiz  ]          ← existing primary button
[ Flash Cards ]          ← new secondary button
```

### Flash Card Screen (`#screen-flashcards`)

Reuses the existing progress bar, quiz-meta bar, card layout, and restart button pattern.

| Element | Content |
|---|---|
| Progress bar | % of deck completed (sticky, top) |
| Topic badge | Domain color-coded badge (same as quiz) |
| Progress text | `Card N / 166` |
| Restart button | Confirms before discarding progress |
| Card body | Question text |
| Reveal button | "Reveal Answer" (secondary style), hidden after reveal |
| Answer area | Horizontal divider + explanation text + MS Learn link (hidden until revealed) |
| Action buttons | "✓ Got it" (green) and "↺ Try again" (amber outline), shown after reveal |

**Flow:** Question → tap Reveal → explanation appears → tap Got it or Try again → next card. After the last card the results screen is shown.

### Flash Card Results Screen (`#screen-fc-results`)

| Element | Content |
|---|---|
| Score display | `N / 166` and `X% mastered` |
| Banner | Green "✓ Great work — keep it up!" (≥ 70%) or amber "↺ Study the N cards below" (< 70%) |
| Review list card | Visible only when ≥ 1 card marked "Try again"; titled "↺ Review these" |
| Review list | Wrong-marked cards grouped by module, each with truncated question text (80 chars) + ↗ MS Learn link |
| Try Again button | Re-shuffles and restarts flash cards |
| Home button | Returns to home screen |

The banner thresholds and pass logic mirror the quiz results screen (≥ 70% = green).

---

## Data

No changes to `questions.js`. Flash cards use the existing `question`, `explanation`, `topic`, `module`, `pageUrl`, `learnUrl` fields. All 166 questions are included in the deck (both `"learning"` and `"exam"` types).

---

## CSS Additions

```css
/* Flash card answer reveal */
.fc-divider { height: 1px; background: var(--border); margin: 16px 0; }
.fc-explanation-text { font-size: 0.95rem; line-height: 1.65; color: var(--muted); }

/* Flash card action buttons */
.fc-actions { display: flex; gap: 12px; margin-top: 10px; }
.fc-btn-got-it { flex: 1; background: var(--green); color: #fff; border-color: var(--green); }
.fc-btn-got-it:hover { background: #0a6009; border-color: #0a6009; }
.fc-btn-retry { flex: 1; background: transparent; color: var(--amber); border-color: var(--amber); }
.fc-btn-retry:hover { background: #FFF8E6; }
```

---

## JavaScript

### State variables

```js
let fcDeck       = [];  // shuffled QUESTIONS array
let fcCurrentIdx = 0;
let fcKnown      = [];  // cards marked Got it
let fcRetry      = [];  // cards marked Try again
```

### Functions

| Function | Responsibility |
|---|---|
| `startFlashCards()` | Shuffle deck, reset state, show screen, render first card |
| `confirmFcRestart()` | Confirm dialog if progress > 0, then call `startFlashCards()` |
| `renderFlashCard()` | Update progress bar, badge, counter, question text; reset reveal state |
| `revealFlashCard()` | Show answer area, populate explanation + MS Learn link, swap buttons |
| `markFlashCard(known)` | Push card to `fcKnown` or `fcRetry`; advance or show results |
| `showFlashCardResults()` | Compute mastery %, populate results screen, call `showScreen()` |

---

## Files Changed

| File | Changes |
|---|---|
| `index.html` | CSS additions; home screen button; two new screen divs; flash card JS functions |

---

## Out of Scope

- Saving flash card session/history to localStorage
- Filtering deck by module or type
- Card flip animation
- Keyboard shortcuts
