# AZ-900 Module Breakdown Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add MS Learn module tracking to the quiz — a `module` field on every question, a collapsible live breakdown panel during the quiz, and a module breakdown card on the results screen.

**Architecture:** All changes are in two files: `questions.js` (add `module` field to all 158 questions using a Node.js transform script) and `index.html` (add constants, CSS, HTML, and JS logic). No new files are created. The module panel in the quiz screen updates live after each answer via the existing `updateLiveScores()` function, which is extended to also update module rows.

**Tech Stack:** Vanilla HTML5/CSS3/JavaScript, no dependencies. Node.js (at `C:/Users/coek/AppData/Local/nvm/v24.14.1/node.exe`) used only for the one-time data transform script.

---

## File Structure

| File | Change |
|---|---|
| `questions.js` | Add `module: "..."` field to all 158 question objects |
| `index.html` | Add `MODULE_URL` + `DOMAIN_MODULES` constants; extend `userAnswers` state; add CSS; add HTML toggle + panel; add `modId()`, `initModulePanel()`, `toggleModulePanel()`, `renderModuleBreakdown()` functions; extend `updateLiveScores()` and `startQuiz()`; extend `showResults()` |
| `add-modules.js` | Temporary transform script — delete after Task 1 |

---

## Reference: Current index.html structure

Key anchor points for edits:

- CSS ends at line ~243 (`</style>`)
- Quiz screen live-scores div ends at line ~295 (`</div>`)
- Results screen domain breakdown card at line ~327–330
- JS constants section: lines 339–356 (`DOMAIN_BADGE`, `DOMAIN_COLOR`, `DOMAIN_WEIGHT`, `HISTORY_KEY`, `PASS_THRESHOLD`)
- JS state: line 361 (`let userAnswers = [];`)
- `startQuiz()`: line 439
- `updateLiveScores()`: line 483
- `selectAnswer()` push: line 516
- `showResults()`: line 555

---

## Task 1: Add `module` field to all 158 questions

**Files:**
- Create: `C:/Code/Boskalis/temp/az900/add-modules.js` (temp script)
- Modify: `C:/Code/Boskalis/temp/az900/questions.js`

- [ ] **Step 1: Create the transform script**

Create `C:/Code/Boskalis/temp/az900/add-modules.js` with this exact content:

```js
const fs = require('fs');

const URL_TO_MODULE = {
  'describe-cloud-compute':                                    'Cloud Computing',
  'describe-benefits-use-cloud-services':                     'Cloud Benefits',
  'describe-cloud-service-types':                             'Service Types',
  'describe-core-architectural-components-of-azure':          'Core Architecture',
  'describe-azure-compute-networking-services':               'Compute & Networking',
  'describe-azure-storage-services':                          'Storage',
  'describe-azure-identity-access-security':                  'Identity & Security',
  'describe-cost-management-azure':                           'Cost Management',
  'describe-features-tools-azure-for-governance-compliance':  'Governance & Compliance',
  'describe-features-tools-manage-deploy-azure-resources':    'Resource Management',
  'describe-monitoring-tools-azure':                          'Monitoring',
};

function getModule(url) {
  for (const [slug, name] of Object.entries(URL_TO_MODULE)) {
    if (url.includes(slug)) return name;
  }
  return '';
}

let content = fs.readFileSync('questions.js', 'utf8');

// Process each question block: find its learnUrl, derive the module,
// then inject module: "..." on the line after topic:
content = content.replace(
  /(\{[\s\S]*?learnUrl:\s*"([^"]+)"[\s\S]*?\})/g,
  (block, _full, url) => {
    const mod = getModule(url);
    if (!mod) return block;
    // Only add if not already present
    if (block.includes('module:')) return block;
    return block.replace(
      /(    topic: "[^"]+",\n)/,
      `$1    module: "${mod}",\n`
    );
  }
);

fs.writeFileSync('questions.js', content, 'utf8');
console.log('Done. Verifying...');

// Verify: count module fields
const matches = content.match(/module:/g) || [];
console.log(`module fields added: ${matches.length} (expected 158)`);
```

- [ ] **Step 2: Run the script**

```bash
cd C:/Code/Boskalis/temp/az900
/c/Users/coek/AppData/Local/nvm/v24.14.1/node.exe add-modules.js
```

Expected output:
```
Done. Verifying...
module fields added: 158 (expected 158)
```

- [ ] **Step 3: Spot-check the output**

Run:
```bash
grep -A3 "id: 1," questions.js | head -6
grep -A3 "id: 100," questions.js | head -6
grep -A3 "id: 158," questions.js | head -6
```

Expected: each block shows `topic:` line immediately followed by `module:` line with the correct value. For example id 1 should show `module: "Cloud Computing"`, id 100 should show `module: "Resource Management"`.

- [ ] **Step 4: Delete the temp script**

```bash
rm C:/Code/Boskalis/temp/az900/add-modules.js
```

- [ ] **Step 5: Commit**

```bash
cd C:/Code/Boskalis/temp/az900
git add questions.js
git commit -m "feat: add module field to all 158 questions"
```

---

## Task 2: Add MODULE_URL and DOMAIN_MODULES constants

**Files:**
- Modify: `C:/Code/Boskalis/temp/az900/index.html` (JS constants section, after `PASS_THRESHOLD`)

- [ ] **Step 1: Add constants after the `PASS_THRESHOLD` line**

Find this in `index.html`:
```js
    const HISTORY_KEY    = 'az900-quiz-history';
    const PASS_THRESHOLD = 0.70;
```

Replace with:
```js
    const HISTORY_KEY    = 'az900-quiz-history';
    const PASS_THRESHOLD = 0.70;

    const MODULE_URL = {
      'Cloud Computing':         'https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/',
      'Cloud Benefits':          'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/',
      'Service Types':           'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/',
      'Core Architecture':       'https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/',
      'Compute & Networking':    'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/',
      'Storage':                 'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/',
      'Identity & Security':     'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/',
      'Cost Management':         'https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/',
      'Governance & Compliance': 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/',
      'Resource Management':     'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/',
      'Monitoring':              'https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/'
    };

    const DOMAIN_MODULES = {
      'Cloud Concepts':                ['Cloud Computing', 'Cloud Benefits', 'Service Types'],
      'Azure Architecture & Services': ['Core Architecture', 'Compute & Networking', 'Storage', 'Identity & Security'],
      'Azure Management & Governance': ['Cost Management', 'Governance & Compliance', 'Resource Management', 'Monitoring']
    };
```

- [ ] **Step 2: Verify**

Open `index.html` in a browser (file://). Open the browser console. Run:
```js
console.log(Object.keys(MODULE_URL).length);    // expected: 11
console.log(Object.keys(DOMAIN_MODULES).length); // expected: 3
```

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add MODULE_URL and DOMAIN_MODULES constants"
```

---

## Task 3: Extend userAnswers state and selectAnswer()

**Files:**
- Modify: `C:/Code/Boskalis/temp/az900/index.html`

- [ ] **Step 1: Update the state comment**

Find:
```js
    let userAnswers = [];  // [{ topic, type, correct }]
```

Replace with:
```js
    let userAnswers = [];  // [{ topic, type, module, correct }]
```

- [ ] **Step 2: Update selectAnswer() push**

Find:
```js
      userAnswers.push({ topic: q.topic, type: q.type || 'learning', correct });
```

Replace with:
```js
      userAnswers.push({ topic: q.topic, type: q.type || 'learning', module: q.module || '', correct });
```

- [ ] **Step 3: Verify**

Open `index.html`, start a quiz, answer one question. In the browser console:
```js
console.log(userAnswers[0]);
// Expected: { topic: "...", type: "...", module: "...", correct: true/false }
// module should be a non-empty string like "Cloud Computing"
```

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: track module per answer in userAnswers"
```

---

## Task 4: Add CSS for module panel

**Files:**
- Modify: `C:/Code/Boskalis/temp/az900/index.html` (CSS section, before `</style>`)

- [ ] **Step 1: Add module panel CSS before `</style>`**

Find:
```css
  </style>
```

Replace with:
```css
    /* ── Module panel ───────────────────────────── */
    .btn-module-toggle {
      display: block;
      width: 100%;
      padding: 10px 14px;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 8px;
      text-align: left;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--text);
      cursor: pointer;
      font-family: inherit;
      margin-bottom: 10px;
    }
    .btn-module-toggle:hover { background: #EBF4FF; border-color: var(--blue); }
    .module-panel {
      background: var(--card);
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.08);
    }
    .module-domain-header {
      font-size: 0.8rem;
      font-weight: 700;
      padding: 5px 0 5px 10px;
      margin: 10px 0 4px;
      border-left: 3px solid #ccc;
      color: var(--text);
    }
    .module-domain-header:first-child { margin-top: 0; }
    .module-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 0 4px 14px;
      font-size: 0.8rem;
    }
    .module-name { flex: 1; color: var(--text); }
    .module-learn-link {
      color: var(--blue);
      text-decoration: none;
      font-size: 0.7rem;
      margin-left: 3px;
    }
    .module-learn-link:hover { text-decoration: underline; }
    .module-score { color: var(--muted); white-space: nowrap; min-width: 36px; text-align: right; }
    .module-bar-wrap { width: 60px; }
    .module-bar-track { height: 6px; background: var(--border); border-radius: 99px; overflow: hidden; }
    .module-bar-fill  { height: 6px; border-radius: 99px; transition: width 0.4s ease; }
    .module-pct { color: var(--muted); white-space: nowrap; min-width: 32px; text-align: right; }
  </style>
```

- [ ] **Step 2: Verify CSS loads**

Open `index.html` in a browser. Open DevTools → Elements. Confirm no CSS parse errors in the console.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add CSS for module breakdown panel"
```

---

## Task 5: Add HTML toggle button and panel to quiz screen

**Files:**
- Modify: `C:/Code/Boskalis/temp/az900/index.html` (quiz screen, after `#live-scores` div)

- [ ] **Step 1: Add toggle button and panel div**

Find:
```html
      <div class="card">
        <p class="question-text" id="question-text"></p>
```

Replace with:
```html
      <button type="button" class="btn-module-toggle hidden" id="module-toggle" onclick="toggleModulePanel()">&#9658; Modules</button>
      <div class="module-panel hidden" id="module-panel"></div>

      <div class="card">
        <p class="question-text" id="question-text"></p>
```

Note: `&#9658;` is the ▶ character. The toggle starts hidden and is shown when `initModulePanel()` runs on quiz start.

- [ ] **Step 2: Verify HTML structure**

Open `index.html` in a browser, start a quiz. The toggle button should NOT be visible yet (it will appear after Task 6 wires up `initModulePanel()`). Inspect the DOM and confirm `#module-toggle` and `#module-panel` exist in the quiz screen.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add module panel HTML to quiz screen"
```

---

## Task 6: Add modId(), initModulePanel(), and toggleModulePanel()

**Files:**
- Modify: `C:/Code/Boskalis/temp/az900/index.html` (JS utilities section and startQuiz())

- [ ] **Step 1: Add modId() helper to Utilities section**

Find:
```js
    function showScreen(id) {
```

Insert before it:
```js
    function modId(mod) {
      return mod.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    }

```

- [ ] **Step 2: Add initModulePanel() and toggleModulePanel() before startQuiz()**

Find:
```js
    // ── Quiz Screen ────────────────────────────────────────────────
    function startQuiz() {
```

Insert before it:
```js
    function initModulePanel() {
      const panel = document.getElementById('module-panel');
      panel.innerHTML = '';
      const DOMAIN_ORDER = ['Cloud Concepts', 'Azure Architecture & Services', 'Azure Management & Governance'];
      DOMAIN_ORDER.forEach(domain => {
        const header = document.createElement('div');
        header.className = 'module-domain-header';
        header.textContent = domain;
        header.style.borderLeftColor = DOMAIN_COLOR[domain] || '#ccc';
        panel.appendChild(header);

        (DOMAIN_MODULES[domain] || []).forEach(mod => {
          const id = modId(mod);

          const row = document.createElement('div');
          row.className = 'module-row';

          const nameSpan = document.createElement('span');
          nameSpan.className = 'module-name';
          nameSpan.textContent = mod;
          if (MODULE_URL[mod]) {
            const link = document.createElement('a');
            link.href = MODULE_URL[mod];
            link.className = 'module-learn-link';
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = '\u2197';
            nameSpan.appendChild(link);
          }

          const scoreSpan = document.createElement('span');
          scoreSpan.className = 'module-score';
          scoreSpan.id = `mod-score-${id}`;
          scoreSpan.textContent = '0/0';

          const barWrap = document.createElement('div');
          barWrap.className = 'module-bar-wrap';
          const barTrack = document.createElement('div');
          barTrack.className = 'module-bar-track';
          const barFill = document.createElement('div');
          barFill.className = 'module-bar-fill';
          barFill.id = `mod-bar-${id}`;
          barFill.style.width = '0%';
          barFill.style.background = DOMAIN_COLOR[domain] || '#0078D4';
          barTrack.appendChild(barFill);
          barWrap.appendChild(barTrack);

          const pctSpan = document.createElement('span');
          pctSpan.className = 'module-pct';
          pctSpan.id = `mod-pct-${id}`;
          pctSpan.textContent = '0%';

          row.appendChild(nameSpan);
          row.appendChild(scoreSpan);
          row.appendChild(barWrap);
          row.appendChild(pctSpan);
          panel.appendChild(row);
        });
      });
    }

    function toggleModulePanel() {
      const panel  = document.getElementById('module-panel');
      const toggle = document.getElementById('module-toggle');
      const isHidden = panel.classList.toggle('hidden');
      toggle.textContent = isHidden ? '\u25B6 Modules' : '\u25BC Modules';
    }

```

- [ ] **Step 3: Call initModulePanel() from startQuiz() and show the toggle button**

Find:
```js
    function startQuiz() {
      shuffled    = shuffle(QUESTIONS);
      currentIdx  = 0;
      userAnswers = [];
      answered    = false;
      document.getElementById('live-scores').classList.add('hidden');
      showScreen('screen-quiz');
      renderQuestion();
    }
```

Replace with:
```js
    function startQuiz() {
      shuffled    = shuffle(QUESTIONS);
      currentIdx  = 0;
      userAnswers = [];
      answered    = false;
      document.getElementById('live-scores').classList.add('hidden');
      document.getElementById('module-panel').classList.add('hidden');
      document.getElementById('module-toggle').textContent = '\u25B6 Modules';
      document.getElementById('module-toggle').classList.remove('hidden');
      initModulePanel();
      showScreen('screen-quiz');
      renderQuestion();
    }
```

- [ ] **Step 4: Verify toggle works**

Open `index.html`, start a quiz. You should see a `▶ Modules` button below the live type score chips. Click it — the panel should expand showing all 11 modules grouped under 3 domains, each with `0/0` and `0%`. All module names should have a `↗` link. Click again — panel collapses, button shows `▶ Modules`.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: add module panel toggle and init logic"
```

---

## Task 7: Extend updateLiveScores() to update module rows

**Files:**
- Modify: `C:/Code/Boskalis/temp/az900/index.html` (updateLiveScores function)

- [ ] **Step 1: Append module update logic to updateLiveScores()**

Find the closing brace of `updateLiveScores()`:
```js
      [['learning', 'Foundation'], ['exam', 'Exam-style']].forEach(([key]) => {
        const d   = typeData[key];
        const chip = document.getElementById(`live-score-${key}`);
        if (d.total === 0) { chip.classList.add('hidden'); return; }
        chip.classList.remove('hidden');
        const p = Math.round((d.correct / d.total) * 100);
        document.getElementById(`ls-val-${key}`).textContent = `${d.correct}/${d.total}`;
        document.getElementById(`ls-pct-${key}`).textContent = `${p}%`;
      });
    }
```

Replace with:
```js
      [['learning', 'Foundation'], ['exam', 'Exam-style']].forEach(([key]) => {
        const d   = typeData[key];
        const chip = document.getElementById(`live-score-${key}`);
        if (d.total === 0) { chip.classList.add('hidden'); return; }
        chip.classList.remove('hidden');
        const p = Math.round((d.correct / d.total) * 100);
        document.getElementById(`ls-val-${key}`).textContent = `${d.correct}/${d.total}`;
        document.getElementById(`ls-pct-${key}`).textContent = `${p}%`;
      });

      // Update module rows (update even when panel is collapsed so it's current when opened)
      const moduleData = {};
      userAnswers.forEach(({ module: mod, correct: c }) => {
        if (!mod) return;
        if (!moduleData[mod]) moduleData[mod] = { correct: 0, total: 0 };
        moduleData[mod].total++;
        if (c) moduleData[mod].correct++;
      });
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
    }
```

- [ ] **Step 2: Verify live updates**

Open `index.html`, start a quiz. Open the module panel (`▶ Modules`). Answer several questions. After each answer the module row matching the current question's module should update its score and bar immediately. Answer a Cloud Concepts question — one of the top 3 module rows should update.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: update module scores live after each answer"
```

---

## Task 8: Add module breakdown to results screen

**Files:**
- Modify: `C:/Code/Boskalis/temp/az900/index.html` (results screen HTML + showResults() JS)

- [ ] **Step 1: Add module breakdown card HTML to results screen**

Find:
```html
      <button type="button" class="btn btn-primary" onclick="startQuiz()">Try Again</button>
      <button type="button" class="btn btn-secondary" onclick="goHome()">Home</button>
```

Replace with:
```html
      <div class="card">
        <h3>Score by Module</h3>
        <div id="module-breakdown"></div>
      </div>

      <button type="button" class="btn btn-primary" onclick="startQuiz()">Try Again</button>
      <button type="button" class="btn btn-secondary" onclick="goHome()">Home</button>
```

- [ ] **Step 2: Add renderModuleBreakdown() function before showResults()**

Find:
```js
    // ── Results Screen ─────────────────────────────────────────────
    function showResults() {
```

Insert before it:
```js
    function renderModuleBreakdown() {
      const moduleData = {};
      userAnswers.forEach(({ module: mod, correct: c }) => {
        if (!mod) return;
        if (!moduleData[mod]) moduleData[mod] = { correct: 0, total: 0 };
        moduleData[mod].total++;
        if (c) moduleData[mod].correct++;
      });

      const container = document.getElementById('module-breakdown');
      container.innerHTML = '';
      const DOMAIN_ORDER = ['Cloud Concepts', 'Azure Architecture & Services', 'Azure Management & Governance'];

      DOMAIN_ORDER.forEach(domain => {
        const modules = (DOMAIN_MODULES[domain] || []).filter(mod => (moduleData[mod] || {}).total > 0);
        if (modules.length === 0) return;

        const header = document.createElement('div');
        header.className = 'module-domain-header';
        header.textContent = domain;
        header.style.borderLeftColor = DOMAIN_COLOR[domain] || '#ccc';
        container.appendChild(header);

        modules.forEach(mod => {
          const d = moduleData[mod];
          const p = Math.round((d.correct / d.total) * 100);

          const row = document.createElement('div');
          row.className = 'module-row';

          const nameSpan = document.createElement('span');
          nameSpan.className = 'module-name';
          nameSpan.textContent = mod;
          if (MODULE_URL[mod]) {
            const link = document.createElement('a');
            link.href = MODULE_URL[mod];
            link.className = 'module-learn-link';
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = '\u2197';
            nameSpan.appendChild(link);
          }

          const scoreSpan = document.createElement('span');
          scoreSpan.className = 'module-score';
          scoreSpan.textContent = `${d.correct}/${d.total}`;

          const barWrap = document.createElement('div');
          barWrap.className = 'module-bar-wrap';
          const barTrack = document.createElement('div');
          barTrack.className = 'module-bar-track';
          const barFill = document.createElement('div');
          barFill.className = 'module-bar-fill';
          barFill.style.width = `${p}%`;
          barFill.style.background = DOMAIN_COLOR[domain] || '#0078D4';
          barTrack.appendChild(barFill);
          barWrap.appendChild(barTrack);

          const pctSpan = document.createElement('span');
          pctSpan.className = 'module-pct';
          pctSpan.textContent = `${p}%`;

          row.appendChild(nameSpan);
          row.appendChild(scoreSpan);
          row.appendChild(barWrap);
          row.appendChild(pctSpan);
          container.appendChild(row);
        });
      });
    }

```

- [ ] **Step 3: Call renderModuleBreakdown() from showResults()**

Find the last line inside `showResults()` before the `showScreen` call:

```js
      showScreen('screen-results');
    }
```

Replace with:
```js
      renderModuleBreakdown();

      showScreen('screen-results');
    }
```

- [ ] **Step 4: Verify results screen**

Open `index.html`, complete a short quiz (answer 5–10 questions spanning multiple modules). On the results screen, a "Score by Module" card should appear below "Score by Domain". It should show only modules where you answered at least one question, grouped under domains, each with name + `↗` link + score + bar + %. Clicking a `↗` link should open the correct MS Learn module page.

- [ ] **Step 5: Full end-to-end verification**

1. Start quiz — `▶ Modules` toggle is visible
2. Answer a question — module panel (if open) updates for that module
3. Open module panel mid-quiz — all 11 modules shown, answered ones have real scores
4. Restart quiz — panel resets to all `0/0`
5. Complete quiz — results screen shows type scores, domain breakdown, AND module breakdown
6. All `↗` links in module breakdown open correct MS Learn pages

- [ ] **Step 6: Commit**

```bash
git add index.html
git commit -m "feat: add module breakdown card to results screen"
```

---

## Task 9: Rebuild zip

**Files:**
- Modify: `C:/Code/Boskalis/temp/az900/az900-quiz.zip`

- [ ] **Step 1: Rebuild the zip**

```bash
cd C:/Code/Boskalis/temp/az900
powershell -Command "Compress-Archive -Path index.html,questions.js -DestinationPath az900-quiz.zip -Force"
ls -lh az900-quiz.zip
```

Expected: zip file updated, size around 40–45 KB.

- [ ] **Step 2: Commit**

```bash
git add az900-quiz.zip
git commit -m "chore: rebuild zip with module breakdown feature"
```
