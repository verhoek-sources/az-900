# AZ-900 Study Insights Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add specific MS Learn page links to all 158 questions, color-code module rows by score, add a live "Focus on" weakness bar, and add a "Study these" card on results.

**Architecture:** All changes are in two files: `questions.js` (add `pageUrl` field via Node.js script) and `index.html` (CSS additions, HTML additions, JS function changes). No external dependencies. App runs in-browser from `file://`.

**Tech Stack:** Vanilla HTML5/CSS3/JavaScript, Node.js (at `C:/Users/coek/AppData/Local/nvm/v24.14.1/node.exe`) for the questions.js transform.

**Important — no git repo:** This project has no git repository. Skip all commit steps. Verify changes by opening `index.html` directly in a browser.

---

## File Structure

| File | Changes |
|---|---|
| `C:/Code/Boskalis/temp/az900/questions.js` | Add `pageUrl` field to all 158 questions |
| `C:/Code/Boskalis/temp/az900/index.html` | CSS, HTML, and JS changes (Tasks 1–6) |

---

## Task 1: Add CSS for focus bar and score-color classes

**Files:**
- Modify: `C:/Code/Boskalis/temp/az900/index.html:296`

The current last CSS rule is `.module-pct { ... }` ending around line 296. Insert the following new CSS rules immediately after that closing `}`, before the closing `</style>` tag.

- [ ] **Step 1: Open index.html and locate the end of the CSS block**

Find this existing CSS (currently the last rule in `<style>`):
```css
    .module-pct { color: var(--muted); white-space: nowrap; min-width: 32px; text-align: right; }
  </style>
```

- [ ] **Step 2: Insert new CSS rules between `.module-pct` and `</style>`**

Replace:
```css
    .module-pct { color: var(--muted); white-space: nowrap; min-width: 32px; text-align: right; }
  </style>
```

With:
```css
    .module-pct { color: var(--muted); white-space: nowrap; min-width: 32px; text-align: right; }

    /* ── Focus bar ───────────────────────────────── */
    .focus-bar {
      background: #FFF8E6;
      border: 1px solid var(--amber);
      border-radius: 8px;
      padding: 8px 14px;
      font-size: 0.8rem;
      color: var(--text);
      margin-bottom: 10px;
    }
    .focus-bar.on-track {
      background: #ECFDF5;
      border-color: var(--green);
    }

    /* ── Module score colors ─────────────────────── */
    .module-row.score-green .module-bar-fill { background: var(--green) !important; }
    .module-row.score-amber .module-bar-fill { background: var(--amber) !important; }
    .module-row.score-red   .module-bar-fill { background: var(--red)   !important; }

    /* ── Study these card ────────────────────────── */
    .study-module-header {
      font-size: 0.8rem;
      font-weight: 700;
      margin: 12px 0 4px;
      color: var(--text);
    }
    .study-module-header:first-child { margin-top: 0; }
    .study-item {
      display: flex;
      align-items: baseline;
      gap: 4px;
      padding: 3px 0 3px 8px;
      font-size: 0.85rem;
      color: var(--muted);
    }
    .study-item-text { flex: 1; }
    .study-item-link {
      color: var(--blue);
      text-decoration: none;
      font-size: 0.75rem;
      white-space: nowrap;
    }
    .study-item-link:hover { text-decoration: underline; }
  </style>
```

- [ ] **Step 3: Verify**

Open `index.html` in a browser. Open DevTools → Elements → verify the new CSS rules appear in the `<style>` block. No visual change yet (no elements use these classes yet).

---

## Task 2: Add HTML — focus-bar div and study-these card

**Files:**
- Modify: `C:/Code/Boskalis/temp/az900/index.html` (quiz screen + results screen)

Two HTML additions: a `#focus-bar` div on the quiz screen, and a `#study-these` card on the results screen.

### Part A: focus-bar on quiz screen

- [ ] **Step 1: Locate the live-scores div closing tag in the quiz screen**

Find this exact HTML (around line 348):
```html
      </div>

      <div class="card">
        <p class="question-text" id="question-text"></p>
```

The `</div>` here closes the `#live-scores` div. The `<div class="card">` is the question card.

- [ ] **Step 2: Insert focus-bar div between live-scores and question card**

Replace:
```html
      </div>

      <div class="card">
        <p class="question-text" id="question-text"></p>
```

With:
```html
      </div>

      <div class="focus-bar hidden" id="focus-bar"></div>

      <div class="card">
        <p class="question-text" id="question-text"></p>
```

### Part B: study-these card on results screen

- [ ] **Step 3: Locate the module breakdown card on the results screen**

Find this exact HTML (around line 388):
```html
      <div class="card">
        <h3>Score by Module</h3>
        <div id="module-breakdown"></div>
      </div>

      <button type="button" class="btn btn-primary" onclick="startQuiz()">Try Again</button>
```

- [ ] **Step 4: Insert study-these card after the module breakdown card**

Replace:
```html
      <div class="card">
        <h3>Score by Module</h3>
        <div id="module-breakdown"></div>
      </div>

      <button type="button" class="btn btn-primary" onclick="startQuiz()">Try Again</button>
```

With:
```html
      <div class="card">
        <h3>Score by Module</h3>
        <div id="module-breakdown"></div>
      </div>

      <div class="card hidden" id="study-these">
        <h3>&#128218; Study these</h3>
        <div id="study-these-content"></div>
      </div>

      <button type="button" class="btn btn-primary" onclick="startQuiz()">Try Again</button>
```

- [ ] **Step 5: Verify**

Open in browser. The focus-bar and study-these card should not be visible (both have class `hidden`). Inspect DOM to confirm both elements exist.

---

## Task 3: Update explanation link to use pageUrl

**Files:**
- Modify: `C:/Code/Boskalis/temp/az900/index.html` — `selectAnswer()` function (around line 723)

The explanation "Learn more" link currently uses only `q.learnUrl`. Change it to prefer `q.pageUrl` when available.

- [ ] **Step 1: Locate the learn-link code in selectAnswer()**

Find this exact code block (around line 723):
```js
      const link = document.getElementById('learn-link');
      if (q.learnUrl) {
        link.href = q.learnUrl;
        link.classList.remove('hidden');
      } else {
        link.classList.add('hidden');
      }
```

- [ ] **Step 2: Replace to use pageUrl with learnUrl fallback**

Replace:
```js
      const link = document.getElementById('learn-link');
      if (q.learnUrl) {
        link.href = q.learnUrl;
        link.classList.remove('hidden');
      } else {
        link.classList.add('hidden');
      }
```

With:
```js
      const link = document.getElementById('learn-link');
      const studyUrl = q.pageUrl || q.learnUrl;
      if (studyUrl) {
        link.href = studyUrl;
        link.classList.remove('hidden');
      } else {
        link.classList.add('hidden');
      }
```

- [ ] **Step 3: Verify**

Start quiz, answer a question. The "Learn more on Microsoft Learn ↗" link still appears in the explanation. After Task 8 adds `pageUrl` values, this link will point to a specific page instead of the module root.

---

## Task 4: Add scoreClass() helper and color-code module rows

**Files:**
- Modify: `C:/Code/Boskalis/temp/az900/index.html` — `modId()` area, `buildModuleRow()`, `updateLiveScores()`, `renderModuleBreakdown()`

Three changes: (1) add `scoreClass()` helper, (2) update `buildModuleRow` initial bar color, (3) add score classes in `updateLiveScores()`, (4) add score classes in `renderModuleBreakdown()`.

### Step 1: Add scoreClass() helper after modId()

- [ ] Find `modId()` (around line 456):
```js
    function modId(mod) {
      return mod.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    }
```

Add `scoreClass()` immediately after it:
```js
    function modId(mod) {
      return mod.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    }

    function scoreClass(pct) {
      if (pct >= 70) return 'score-green';
      if (pct >= 50) return 'score-amber';
      return 'score-red';
    }
```

### Step 2: Change buildModuleRow() initial bar color from domain color to neutral

- [ ] Find this line inside `buildModuleRow()` (around line 555):
```js
      barFill.style.background = DOMAIN_COLOR[domain] || '#0078D4';
```

Replace with:
```js
      barFill.style.background = 'var(--border)';
```

This sets the neutral (no answers yet) bar color to `var(--border)` = `#E5E7EB`. The CSS `!important` rules added in Task 1 will override this once a score class is applied.

### Step 3: Add score class updates to updateLiveScores()

- [ ] Find the end of `updateLiveScores()` — the module update loop (around line 683):
```js
      Object.entries(moduleData).forEach(([mod, d]) => {
        const id = modId(mod);
        const p  = Math.round((d.correct / d.total) * 100);
        const scoreEl = document.getElementById(`mod-score-${id}`);
        const barEl   = document.getElementById(`mod-bar-${id}`);
        const pctEl   = document.getElementById(`mod-pct-${id}`);
        if (scoreEl) scoreEl.textContent = `${d.correct}/${d.total}`;
        if (barEl)   barEl.style.width   = `${p}%`;
        if (pctEl)   pctEl.textContent   = `${p}%`;
      });
```

Replace with:
```js
      Object.entries(moduleData).forEach(([mod, d]) => {
        const id = modId(mod);
        const p  = Math.round((d.correct / d.total) * 100);
        const scoreEl = document.getElementById(`mod-score-${id}`);
        const barEl   = document.getElementById(`mod-bar-${id}`);
        const pctEl   = document.getElementById(`mod-pct-${id}`);
        if (scoreEl) scoreEl.textContent = `${d.correct}/${d.total}`;
        if (barEl)   barEl.style.width   = `${p}%`;
        if (pctEl)   pctEl.textContent   = `${p}%`;
        if (scoreEl) {
          const rowEl = scoreEl.closest('.module-row');
          if (rowEl) {
            rowEl.classList.remove('score-green', 'score-amber', 'score-red');
            if (d.total >= 1) rowEl.classList.add(scoreClass(p));
          }
        }
      });
```

### Step 4: Add score class to renderModuleBreakdown() rows

- [ ] Find the `modules.forEach` loop in `renderModuleBreakdown()` (around line 767):
```js
        modules.forEach(mod => {
          const d = moduleData[mod];
          container.appendChild(buildModuleRow(mod, domain, { withIds: false, correct: d.correct, total: d.total }));
        });
```

Replace with:
```js
        modules.forEach(mod => {
          const d = moduleData[mod];
          const row = buildModuleRow(mod, domain, { withIds: false, correct: d.correct, total: d.total });
          const p = Math.round((d.correct / d.total) * 100);
          row.classList.add(scoreClass(p));
          container.appendChild(row);
        });
```

- [ ] **Step 5: Verify**

Start quiz, answer several questions. Open the module panel — answered modules should show green/amber/red bars instead of the domain color. Modules not yet answered show a gray bar. Finish the quiz and check the results screen module breakdown — each row bar should be colored by score.

---

## Task 5: Implement updateFocusBar() and wire it up

**Files:**
- Modify: `C:/Code/Boskalis/temp/az900/index.html` — after `updateLiveScores()`, and in `startQuiz()`

### Step 1: Add updateFocusBar() function

- [ ] Find the closing `}` of `updateLiveScores()`. The function currently ends with the module update loop and a closing `}`. Insert `updateFocusBar()` as a new function immediately after `updateLiveScores()`.

Find the end of `updateLiveScores()` (around line 693):
```js
    }

    function confirmRestart() {
```

Insert the new function between them:
```js
    }

    function updateFocusBar() {
      const bar = document.getElementById('focus-bar');
      if (!bar) return;

      if (userAnswers.length < 3) {
        bar.classList.add('hidden');
        return;
      }

      // Compute per-module scores
      const moduleData = {};
      userAnswers.forEach(({ module: mod, correct: c }) => {
        if (!mod) return;
        if (!moduleData[mod]) moduleData[mod] = { correct: 0, total: 0 };
        moduleData[mod].total++;
        if (c) moduleData[mod].correct++;
      });

      const scoredModules = Object.entries(moduleData)
        .filter(([, d]) => d.total >= 1)
        .map(([mod, d]) => ({ mod, pct: Math.round((d.correct / d.total) * 100) }));

      if (scoredModules.length === 0) {
        bar.classList.add('hidden');
        return;
      }

      bar.classList.remove('hidden');

      const allGreen = scoredModules.every(({ pct }) => pct >= 70);
      if (allGreen) {
        bar.classList.add('on-track');
        bar.textContent = '\u2713 On track \u2014 keep going!';
      } else {
        bar.classList.remove('on-track');
        const weakest = scoredModules
          .filter(({ pct }) => pct < 70)
          .sort((a, b) => a.pct - b.pct)
          .slice(0, 3)
          .map(({ mod }) => mod);
        bar.textContent = '\u26A0 Focus on: ' + weakest.join(' \u00B7 ');
      }
    }

    function confirmRestart() {
```

### Step 2: Call updateFocusBar() at end of updateLiveScores()

- [ ] At the very end of `updateLiveScores()`, just before its closing `}`, add a call to `updateFocusBar()`.

Find the last lines of `updateLiveScores()` — after the `Object.entries(moduleData)` block (around line 693):
```js
      });
    }

    function updateFocusBar() {
```

Replace the `});` + `}` section at the end of `updateLiveScores` to add the call:
```js
      });
      updateFocusBar();
    }

    function updateFocusBar() {
```

### Step 3: Reset focus-bar in startQuiz()

- [ ] Find `startQuiz()` (around line 607). Locate the reset block at the start:
```js
      document.getElementById('live-scores').classList.add('hidden');
      document.getElementById('module-panel').classList.remove('hidden');
```

Add focus-bar reset lines after them:
```js
      document.getElementById('live-scores').classList.add('hidden');
      const focusBar = document.getElementById('focus-bar');
      focusBar.classList.add('hidden');
      focusBar.classList.remove('on-track');
      focusBar.textContent = '';
      document.getElementById('module-panel').classList.remove('hidden');
```

- [ ] **Step 4: Verify**

Start quiz. Answer 2 questions — focus bar should not appear. Answer a 3rd question — focus bar should appear, showing either "✓ On track — keep going!" (if all answered modules ≥70%) or "⚠ Focus on: [module names]". Deliberately answer several wrong to verify red/amber modules appear in the bar. Click Restart — bar disappears. Check bar background: amber/warning background for focus warning, green background for on-track.

---

## Task 6: Implement renderStudyThese() and call from showResults()

**Files:**
- Modify: `C:/Code/Boskalis/temp/az900/index.html` — after `renderModuleBreakdown()`, and in `showResults()`

### Step 1: Add renderStudyThese() function

- [ ] Find `renderModuleBreakdown()`. It ends with its closing `}` followed by:
```js
    // ── Results Screen ─────────────────────────────────────────────
    function showResults() {
```

Insert the new function between them:
```js
    function renderStudyThese() {
      const card    = document.getElementById('study-these');
      const content = document.getElementById('study-these-content');

      // Collect wrong answers with their question object (userAnswers[i] matches shuffled[i])
      const wrongItems = [];
      userAnswers.forEach((a, i) => {
        if (!a.correct) {
          wrongItems.push({ q: shuffled[i], module: a.module });
        }
      });

      if (wrongItems.length === 0) {
        card.classList.add('hidden');
        return;
      }

      card.classList.remove('hidden');
      content.innerHTML = '';

      // Group by module, maintaining domain order
      DOMAIN_ORDER.forEach(domain => {
        (DOMAIN_MODULES[domain] || []).forEach(mod => {
          const items = wrongItems.filter(item => item.module === mod);
          if (items.length === 0) return;

          const header = document.createElement('div');
          header.className = 'study-module-header';
          header.textContent = mod;
          content.appendChild(header);

          items.forEach(({ q }) => {
            const studyUrl = q.pageUrl || q.learnUrl;
            const row  = document.createElement('div');
            row.className = 'study-item';

            const text = document.createElement('span');
            text.className = 'study-item-text';
            const truncated = q.question.length > 80
              ? q.question.slice(0, 80) + '\u2026'
              : q.question;
            text.textContent = '\u00B7 ' + truncated;
            row.appendChild(text);

            if (studyUrl) {
              const link = document.createElement('a');
              link.href      = studyUrl;
              link.target    = '_blank';
              link.rel       = 'noopener noreferrer';
              link.className = 'study-item-link';
              link.textContent = '\u2197';
              row.appendChild(link);
            }

            content.appendChild(row);
          });
        });
      });
    }

    // ── Results Screen ─────────────────────────────────────────────
    function showResults() {
```

### Step 2: Call renderStudyThese() from showResults()

- [ ] Find the end of `showResults()` where `renderModuleBreakdown()` is called (around line 855):
```js
      renderModuleBreakdown();

      showScreen('screen-results');
```

Add `renderStudyThese()` call:
```js
      renderModuleBreakdown();
      renderStudyThese();

      showScreen('screen-results');
```

- [ ] **Step 3: Verify**

Complete a quiz answering some questions wrong. On the results screen, verify:
- "📚 Study these" card appears below "Score by Module"
- Wrong answers are grouped by module name
- Each entry shows truncated question text (≤80 chars + "…" if longer) + "↗" link
- "↗" link opens the question's `learnUrl` (since `pageUrl` not added yet — that's Task 8)
- If all answers are correct: "Study these" card is hidden
- Click Restart → complete quiz with all correct → results show no "Study these" card

---

## Task 7: Add pageUrl to all 158 questions in questions.js

**Files:**
- Create: `C:/Code/Boskalis/temp/az900/add-page-urls.js` (temporary transform script)
- Modify: `C:/Code/Boskalis/temp/az900/questions.js`

The script reads `questions.js`, finds each question by its `id:` field, and inserts a `pageUrl:` line after the `learnUrl:` line for that question.

### Step 1: Create the transform script

- [ ] Create `C:/Code/Boskalis/temp/az900/add-page-urls.js` with this content:

```js
const fs = require('fs');
const path = require('path');

const PAGE_URLS = {
  // Cloud Computing
  1:   'https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/2-what-is-cloud-computing',
  2:   'https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/4-define-cloud-models',
  3:   'https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/5-describe-consumption-based-model',
  7:   'https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/5-describe-consumption-based-model',
  8:   'https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/3-describe-shared-responsibility-model',
  12:  'https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/4-define-cloud-models',
  61:  'https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/3-describe-shared-responsibility-model',
  62:  'https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/5-describe-consumption-based-model',
  64:  'https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/4-define-cloud-models',
  70:  'https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/4-define-cloud-models',
  // Cloud Benefits
  4:   'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/2-high-availability-scalability-cloud',
  5:   'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/2-high-availability-scalability-cloud',
  6:   'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/2-high-availability-scalability-cloud',
  13:  'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/3-reliability-predictability-cloud',
  14:  'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/5-manageability-cloud',
  15:  'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/5-manageability-cloud',
  63:  'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/2-high-availability-scalability-cloud',
  67:  'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/5-manageability-cloud',
  68:  'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/3-reliability-predictability-cloud',
  69:  'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/2-high-availability-scalability-cloud',
  101: 'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/3-reliability-predictability-cloud',
  102: 'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/3-reliability-predictability-cloud',
  103: 'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/5-manageability-cloud',
  105: 'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/3-reliability-predictability-cloud',
  106: 'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/4-security-governance-cloud',
  // Service Types
  9:   'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service',
  10:  'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service',
  11:  'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/3-describe-platform-service',
  65:  'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service',
  66:  'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service',
  143: 'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service',
  144: 'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service',
  145: 'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service',
  146: 'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service',
  147: 'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service',
  148: 'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service',
  149: 'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/4-describe-software-service',
  150: 'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/2-describe-infrastructure-service',
  // Core Architecture
  16:  'https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/5-describe-azure-physical-infrastructure',
  17:  'https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/5-describe-azure-physical-infrastructure',
  18:  'https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/6-describe-azure-management-infrastructure',
  36:  'https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/2-what-is-microsoft-azure',
  44:  'https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/6-describe-azure-management-infrastructure',
  59:  'https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/6-describe-azure-management-infrastructure',
  71:  'https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/5-describe-azure-physical-infrastructure',
  90:  'https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/6-describe-azure-management-infrastructure',
  122: 'https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/5-describe-azure-physical-infrastructure',
  137: 'https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/5-describe-azure-physical-infrastructure',
  141: 'https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/6-describe-azure-management-infrastructure',
  142: 'https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/3-get-started-azure-accounts',
  // Compute & Networking
  19:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/3-describe-azure-virtual-machines',
  20:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/7-describe-application-hosting-options',
  24:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/8-describe-azure-virtual-networking',
  25:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/8-describe-azure-virtual-networking',
  26:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/8-describe-azure-virtual-networking',
  28:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/6-describe-azure-functions',
  29:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/5-describe-azure-containers',
  30:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/3-describe-azure-virtual-machines',
  31:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/10-describe-azure-expressroute',
  32:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/9-describe-azure-virtual-private-networks',
  33:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/5-describe-azure-containers',
  38:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/4-describe-azure-virtual-desktop',
  39:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/11-describe-azure-dns',
  76:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/7-describe-application-hosting-options',
  77:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/5-describe-azure-containers',
  78:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/6-describe-azure-functions',
  82:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/10-describe-azure-expressroute',
  83:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/7-describe-application-hosting-options',
  85:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/5-describe-azure-containers',
  86:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/3-describe-azure-virtual-machines',
  109: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/7-describe-application-hosting-options',
  118: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/6-describe-azure-functions',
  119: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/5-describe-azure-containers',
  120: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/7-describe-application-hosting-options',
  131: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/8-describe-azure-virtual-networking',
  132: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/8-describe-azure-virtual-networking',
  133: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/3-describe-azure-virtual-machines',
  134: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/3-describe-azure-virtual-machines',
  140: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/8-describe-azure-virtual-networking',
  // Storage
  21:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services',
  22:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services',
  23:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services',
  37:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/3-describe-azure-storage-redundancy',
  72:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/3-describe-azure-storage-redundancy',
  73:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/5-identify-azure-data-migration-options',
  74:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/3-describe-azure-storage-redundancy',
  75:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services',
  79:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services',
  80:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/6-identify-azure-file-movement-options',
  84:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/3-describe-azure-storage-redundancy',
  104: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services',
  107: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/3-describe-azure-storage-redundancy',
  108: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services',
  123: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services',
  138: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/2-describe-azure-storage-accounts',
  139: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/4-describe-azure-storage-services',
  // Identity & Security
  27:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/2-describe-directory-services',
  43:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/6-describe-role-based-access-control',
  50:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/9-describe-microsoft-defender-cloud',
  51:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/3-describe-authentication-methods',
  56:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/6-describe-role-based-access-control',
  81:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/2-describe-directory-services',
  87:  'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/3-describe-authentication-methods',
  112: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/8-describe-defense-depth',
  113: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/7-describe-zero-trust-model',
  114: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/3-describe-authentication-methods',
  115: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/3-describe-authentication-methods',
  116: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/5-describe-conditional-access',
  117: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/4-describe-external-identities',
  135: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/2-describe-directory-services',
  136: 'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/3-describe-authentication-methods',
  // Cost Management
  41:  'https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/5-describe-azure-cost-management-billing-tool',
  45:  'https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/3-describe-azure-pricing-calculator',
  46:  'https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/4-describe-total-cost-of-ownership-calculator',
  49:  'https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/6-describe-purpose-tags',
  55:  'https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/2-compare-pricing-purchase-options',
  91:  'https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/3-describe-azure-pricing-calculator',
  92:  'https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/5-describe-azure-cost-management-billing-tool',
  95:  'https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/2-compare-pricing-purchase-options',
  96:  'https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/2-compare-pricing-purchase-options',
  97:  'https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/6-describe-purpose-tags',
  127: 'https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/5-describe-azure-cost-management-billing-tool',
  128: 'https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/2-compare-pricing-purchase-options',
  // Governance & Compliance
  42:  'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/3-describe-purpose-azure-policy',
  52:  'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/4-describe-purpose-resource-locks',
  53:  'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/3-describe-purpose-azure-policy',
  54:  'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/6-describe-purpose-service-trust-portal',
  57:  'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/6-describe-purpose-service-trust-portal',
  60:  'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/6-describe-purpose-service-trust-portal',
  88:  'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/4-describe-purpose-resource-locks',
  89:  'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/3-describe-purpose-azure-policy',
  98:  'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/6-describe-purpose-service-trust-portal',
  99:  'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/3-describe-purpose-azure-policy',
  124: 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/2-describe-purpose-microsoft-purview',
  125: 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/3-describe-purpose-azure-policy',
  126: 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/4-describe-purpose-resource-locks',
  129: 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/2-describe-purpose-microsoft-purview',
  // Resource Management
  34:  'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/4-describe-purpose-azure-arc',
  48:  'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/5-describe-azure-resource-manager-azure-arm-templates',
  100: 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/5-describe-azure-resource-manager-azure-arm-templates',
  121: 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/3-describe-azure-cloud-shell',
  130: 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/5-describe-azure-resource-manager-azure-arm-templates',
  151: 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/2-describe-interacting-azure-portal',
  152: 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/3-describe-azure-cloud-shell',
  153: 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/5-describe-azure-resource-manager-azure-arm-templates',
  154: 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/3-describe-azure-cloud-shell',
  155: 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/3-describe-azure-cloud-shell',
  156: 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/3-describe-azure-cloud-shell',
  157: 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/5-describe-azure-resource-manager-azure-arm-templates',
  158: 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/5-describe-azure-resource-manager-azure-arm-templates',
  // Monitoring
  35:  'https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/4-describe-azure-monitor',
  40:  'https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/3-describe-azure-service-health',
  47:  'https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/2-describe-purpose-azure-advisor',
  58:  'https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/2-describe-purpose-azure-advisor',
  93:  'https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/3-describe-azure-service-health',
  94:  'https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/3-describe-azure-service-health',
  110: 'https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/4-describe-azure-monitor',
  111: 'https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/4-describe-azure-monitor',
};

const filePath = path.join(__dirname, 'questions.js');
let src = fs.readFileSync(filePath, 'utf8');

let modified = 0;

// For each question id, insert pageUrl after the learnUrl line.
// Strategy: find each occurrence of "  id: N," then find the next learnUrl line
// and insert pageUrl after it (if not already present).
for (const [idStr, pageUrl] of Object.entries(PAGE_URLS)) {
  const id = Number(idStr);
  // Match the learnUrl line for this specific question block.
  // We locate "  id: N," then within the next 600 chars find the learnUrl line.
  const idPattern = new RegExp(`(  id:\\s*${id},\\b[\\s\\S]{1,600}?)(    learnUrl:\\s*"[^"]*")(\\s*)(?!\\s*pageUrl)`, 'g');
  const replacement = `$1$2$3    pageUrl: "${pageUrl}"$3`;
  const before = src;
  src = src.replace(idPattern, replacement);
  if (src !== before) modified++;
}

// Safety check: if some questions already had pageUrl, the pattern won't match — that's fine.
// Count actual pageUrl fields in result.
const pageUrlCount = (src.match(/pageUrl:/g) || []).length;

fs.writeFileSync(filePath, src, 'utf8');
console.log(`Modified ${modified} questions. Total pageUrl fields in file: ${pageUrlCount}`);
```

### Step 2: Run the transform script

- [ ] Run in terminal:

```bash
C:/Users/coek/AppData/Local/nvm/v24.14.1/node.exe C:/Code/Boskalis/temp/az900/add-page-urls.js
```

Expected output:
```
Modified 158 questions. Total pageUrl fields in file: 158
```

If the count is less than 158, some questions were not matched. Check the script pattern against the actual file structure.

### Step 3: Verify questions.js

- [ ] Open `C:/Code/Boskalis/temp/az900/questions.js` and spot-check a few questions:

Question id 1 should now have:
```js
    learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/",
    pageUrl:  "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/2-what-is-cloud-computing",
```

Question id 82 should have:
```js
    pageUrl:  "https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/10-describe-azure-expressroute",
```

### Step 4: Verify in browser

- [ ] Open `index.html` in browser. Start quiz. Answer a question. Check explanation box — "Learn more on Microsoft Learn ↗" link should now point to a specific page URL (not just the module root). Open DevTools → Network tab or hover over the link to verify the URL ends with a unit path like `/2-what-is-cloud-computing`.

- [ ] On results screen, answer some wrong. Check "Study these" — "↗" links should now point to specific page URLs.

### Step 5: Clean up

- [ ] Delete the temporary script:

```bash
del C:/Code/Boskalis/temp/az900/add-page-urls.js
```

---

## Task 8: Re-zip and deploy

**Files:**
- Create: `C:/Code/Boskalis/temp/az900/az900-quiz.zip`

- [ ] **Step 1: Create updated zip**

Run in terminal (PowerShell):
```powershell
Compress-Archive -Path C:/Code/Boskalis/temp/az900/index.html, C:/Code/Boskalis/temp/az900/questions.js -DestinationPath C:/Code/Boskalis/temp/az900/az900-quiz.zip -Force
```

- [ ] **Step 2: Upload to tiiny.host**

Drag-and-drop `C:/Code/Boskalis/temp/az900/az900-quiz.zip` onto the tiiny.host upload area (same process as before: tiiny.host → drag zip → upload).

- [ ] **Step 3: Smoke-test the live URL**

Open the tiiny.host URL. Start quiz. Verify:
- Focus bar appears after 3+ answers
- Module bars are green/amber/red based on score
- "Study these" card shows on results with working ↗ links pointing to specific MS Learn pages

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Task |
|---|---|
| `pageUrl` field on all 158 questions | Task 7 |
| Explanation box uses `pageUrl \|\| learnUrl` | Task 3 |
| "Study these" card on results (wrong answers, grouped by module, 80-char truncation, pageUrl links) | Tasks 2 + 6 |
| Color-coded module rows: green ≥70%, amber 50-69%, red <50% when total ≥ 1 | Tasks 1 + 4 |
| Bar fill color matches score color (not fixed domain color) | Tasks 1 + 4 |
| `#focus-bar` HTML element | Task 2 |
| Focus bar hidden until 3+ answers | Task 5 |
| Focus bar shows 2-3 weakest modules (<70%) | Task 5 |
| Focus bar shows "✓ On track" when all ≥70% | Task 5 |
| Reset focus bar and study-these on restart | Task 5 (focus-bar in startQuiz) + Task 6 (renderStudyThese rebuilds each time) |
| CSS: `.focus-bar`, `.focus-bar.on-track`, score color rules, study-these styles | Task 1 |
