# AZ-900 Module Breakdown — Design Spec

**Date:** 2026-04-02  
**Status:** Approved

---

## Overview

Add MS Learn module tracking to the AZ-900 quiz app. Each question gets a `module` field (one of 11 short names). The quiz screen gains a collapsible live module breakdown panel; the results screen gains a module breakdown card below the existing domain breakdown.

---

## Goals

- Show live score per MS Learn module during the quiz (collapsible)
- Show full module breakdown on the results screen
- Link each module name to its MS Learn page (where available)
- Group modules under their parent domain in both views

---

## Data Changes (`questions.js`)

Add `module` field to all 142 questions. Value is one of 11 short names listed below.

### Module registry

| Module name | Domain | MS Learn URL slug |
|---|---|---|
| Cloud Computing | Cloud Concepts | `describe-cloud-compute` |
| Cloud Benefits | Cloud Concepts | `describe-benefits-use-cloud-services` |
| Service Types | Cloud Concepts | `describe-cloud-service-types` |
| Core Architecture | Azure Architecture & Services | `describe-core-architectural-components-of-azure` |
| Compute & Networking | Azure Architecture & Services | `describe-azure-compute-networking-services` |
| Storage | Azure Architecture & Services | `describe-azure-storage-services` |
| Identity & Security | Azure Architecture & Services | `describe-azure-identity-access-security` |
| Cost Management | Azure Management & Governance | `describe-cost-management-azure` |
| Governance & Compliance | Azure Management & Governance | `describe-features-tools-azure-for-governance-compliance` |
| Resource Management | Azure Management & Governance | `describe-features-tools-manage-deploy-azure-resources` |
| Monitoring | Azure Management & Governance | `describe-monitoring-tools-azure` |

Full MS Learn base URL: `https://learn.microsoft.com/en-us/training/modules/<slug>/`

All 11 modules have a URL. The link renders as a small `↗` superscript next to the module name.

### Question object shape (after change)

```js
{
  id: 1,
  type: "learning",
  topic: "Cloud Concepts",
  module: "Cloud Computing",        // ← new field
  question: "...",
  options: ["A", "B", "C", "D"],
  answer: 1,
  explanation: "...",
  learnUrl: "https://..."
}
```

---

## App Changes (`index.html`)

### 1. Module constants

Add two lookup objects in the JS constants section:

```js
const MODULE_URL = {
  'Cloud Computing':       'https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/',
  'Cloud Benefits':        'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/',
  'Service Types':         'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/',
  'Core Architecture':     'https://learn.microsoft.com/en-us/training/modules/describe-core-architectural-components-of-azure/',
  'Compute & Networking':  'https://learn.microsoft.com/en-us/training/modules/describe-azure-compute-networking-services/',
  'Storage':               'https://learn.microsoft.com/en-us/training/modules/describe-azure-storage-services/',
  'Identity & Security':   'https://learn.microsoft.com/en-us/training/modules/describe-azure-identity-access-security/',
  'Cost Management':       'https://learn.microsoft.com/en-us/training/modules/describe-cost-management-azure/',
  'Governance & Compliance': 'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-azure-for-governance-compliance/',
  'Resource Management':   'https://learn.microsoft.com/en-us/training/modules/describe-features-tools-manage-deploy-azure-resources/',
  'Monitoring':            'https://learn.microsoft.com/en-us/training/modules/describe-monitoring-tools-azure/'
};

const DOMAIN_MODULES = {
  'Cloud Concepts':                  ['Cloud Computing', 'Cloud Benefits', 'Service Types'],
  'Azure Architecture & Services':   ['Core Architecture', 'Compute & Networking', 'Storage', 'Identity & Security'],
  'Azure Management & Governance':   ['Cost Management', 'Governance & Compliance', 'Resource Management', 'Monitoring']
};
```

### 2. State tracking

`userAnswers` already stores `{ topic, type, correct }` per answer. Extend to `{ topic, type, module, correct }`.

In `selectAnswer()`:
```js
userAnswers.push({ topic: q.topic, type: q.type || 'learning', module: q.module || '', correct });
```

### 3. Quiz screen — collapsible module panel

**HTML:** Add a toggle button and panel div below `#live-scores`:

```html
<button type="button" class="btn-module-toggle" id="module-toggle" onclick="toggleModulePanel()">
  ▶ Modules
</button>
<div class="module-panel hidden" id="module-panel"></div>
```

**Behaviour:**
- Panel starts collapsed (hidden). Toggle button shows `▶ Modules` / `▼ Modules`.
- `toggleModulePanel()` toggles the hidden class and flips the arrow.
- Panel is populated once on `startQuiz()` with all 11 modules at 0/0, then updated after each answer via `updateLiveScores()` (which already runs after every `selectAnswer()`).

**Panel layout (grouped):**

```
▼ Cloud Concepts
    Cloud Computing ↗      0/0   ░░░░░   0%
    Cloud Benefits ↗        0/0   ░░░░░   0%
    Service Types ↗         0/0   ░░░░░   0%
▼ Azure Architecture & Services
    ...
```

Domain headers use the existing domain badge colors. Module rows show: name + `↗` link (opens MS Learn in new tab) + `correct/total` + mini bar + `%`.

**CSS additions:**
- `.btn-module-toggle` — full-width secondary-style toggle button, small padding
- `.module-panel` — white card styling, padding
- `.module-domain-header` — bold domain label with colored left border matching domain color
- `.module-row` — flex row: name-link | score | bar | pct
- `.module-bar-track` / `.module-bar-fill` — mini progress bar (6px height)
- `.module-learn-link` — small `↗` link, blue, opens in new tab

### 4. `updateLiveScores()` — extend for modules

After updating the type score chips, also update each module row in the panel (if panel exists). Compute `{ correct, total }` per module from `userAnswers`.

### 5. Results screen — module breakdown card

Add a new card after the domain breakdown card:

```html
<div class="card">
  <h3>Score by Module</h3>
  <div id="module-breakdown"></div>
</div>
```

Populated in `showResults()` using the same grouped layout as the quiz panel. Each module row has the same name + `↗` link + score + bar + %. Domain headers styled the same way.

---

## UI Details

- `↗` link: `<a href="..." target="_blank" rel="noopener noreferrer">↗</a>` — inline after module name, color `var(--blue)`, font-size `0.75rem`
- Module rows with `total === 0` still show on quiz screen (show `0/0`, empty bar, `0%`) but are omitted on results screen
- Domain color mapping reuses existing `DOMAIN_COLOR` constant
- No changes to home screen, history, pass/fail logic, or score saving

---

## Out of Scope

- Filtering questions by module
- Module-level pass/fail threshold
- Sorting modules by score
- Any change to the 3-domain breakdown (it stays as-is)
