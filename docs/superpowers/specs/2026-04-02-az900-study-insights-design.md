# AZ-900 Study Insights — Design Spec

**Date:** 2026-04-02  
**Status:** Approved

---

## Overview

Two improvements to help the user know what to study while taking the quiz and after finishing:

1. **Specific MS Learn page links** — each question gets a `pageUrl` pointing to the exact MS Learn unit, replacing the module-root link in the explanation box and powering a new "Study these" section on the results screen.
2. **Weakness insight** — color-coded module panel rows + a "Focus on" bar showing the weakest 2–3 modules, updating live during the quiz.

---

## Part 1: Specific MS Learn Links

### Data change (`questions.js`)

Add a `pageUrl` field to all 158 questions. Value is a full MS Learn URL to the specific unit page most relevant to that question's content.

```js
{
  id: 1,
  topic: "Cloud Concepts",
  module: "Cloud Computing",
  learnUrl: "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/",  // unchanged
  pageUrl:  "https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/2-what-is-cloud-computing",  // new
  ...
}
```

`learnUrl` is unchanged — it is used for module identification in `MODULE_URL` lookups. `pageUrl` is the specific study link.

### MS Learn unit structure (reference)

| Module | Units available |
|---|---|
| describe-cloud-compute | /2-what-is-cloud-computing, /3-describe-shared-responsibility-model, /4-define-cloud-models, /5-describe-consumption-based-model |
| describe-benefits-use-cloud-services | /2-high-availability-scalability-cloud, /3-reliability-predictability-cloud, /4-security-governance-cloud, /5-manageability-cloud |
| describe-cloud-service-types | /2-describe-infrastructure-service, /3-describe-platform-service, /4-describe-software-service |
| describe-core-architectural-components-of-azure | /2-what-is-microsoft-azure, /3-get-started-azure-accounts, /5-describe-azure-physical-infrastructure, /6-describe-azure-management-infrastructure |
| describe-azure-compute-networking-services | /3-describe-azure-virtual-machines, /4-describe-azure-virtual-desktop, /5-describe-azure-containers, /6-describe-azure-functions, /7-describe-application-hosting-options, /8-describe-azure-virtual-networking, /9-describe-azure-virtual-private-networks, /10-describe-azure-expressroute, /11-describe-azure-dns |
| describe-azure-storage-services | /2-describe-azure-storage-accounts, /3-describe-azure-storage-redundancy, /4-describe-azure-storage-services, /5-identify-azure-data-migration-options, /6-identify-azure-file-movement-options |
| describe-azure-identity-access-security | /2-describe-directory-services, /3-describe-authentication-methods, /4-describe-external-identities, /5-describe-conditional-access, /6-describe-role-based-access-control, /7-describe-zero-trust-model, /8-describe-defense-depth, /9-describe-microsoft-defender-cloud |
| describe-cost-management-azure | /2-compare-pricing-purchase-options, /3-describe-azure-pricing-calculator, /4-describe-total-cost-of-ownership-calculator, /5-describe-azure-cost-management-billing-tool, /6-describe-purpose-tags |
| describe-features-tools-azure-for-governance-compliance | /2-describe-purpose-microsoft-purview, /3-describe-purpose-azure-policy, /4-describe-purpose-resource-locks, /6-describe-purpose-service-trust-portal |
| describe-features-tools-manage-deploy-azure-resources | /2-describe-interacting-azure-portal, /3-describe-azure-cloud-shell, /4-describe-purpose-azure-arc, /5-describe-azure-resource-manager-azure-arm-templates |
| describe-monitoring-tools-azure | /2-describe-purpose-azure-advisor, /3-describe-azure-service-health, /4-describe-azure-monitor |

Each question is assigned the unit most relevant to its specific topic. Questions about the same sub-topic share the same `pageUrl`.

### Explanation box change (`index.html`)

The existing "Learn more on Microsoft Learn ↗" link currently uses `q.learnUrl`. Change it to use `q.pageUrl` when available, falling back to `q.learnUrl`:

```js
const studyUrl = q.pageUrl || q.learnUrl;
if (studyUrl) {
  link.href = studyUrl;
  link.classList.remove('hidden');
}
```

### Results screen — "Study these" card

A new card at the bottom of the results screen (after the module breakdown card), visible only when at least one question was answered incorrectly. Title: **"Study these"**.

Content: wrong answers grouped by module, each shown as a truncated question text + `↗` link using `pageUrl`. Built with DOM API (no innerHTML for dynamic content).

```
📚 Study these
  Compute & Networking
    · What is the purpose of Azure Load Balancer? ↗
    · Which protocol does Azure VPN Gateway use? ↗
  Identity & Security
    · What is Conditional Access? ↗
```

Question text is truncated to 80 characters with `…` if longer.

---

## Part 2: Weakness Insight

### Color-coded module rows

Module rows in the live panel (and results module breakdown) get a colored left border based on current score percentage. Applied when `total >= 1`:

| Score | Color | CSS variable |
|---|---|---|
| ≥ 70% | Green | `var(--green)` = `#107C10` |
| 50–69% | Amber | `var(--amber)` = `#F59D00` |
| < 50% | Red | `var(--red)` = `#D13438` |
| No answers yet | Neutral | `var(--border)` = `#E5E7EB` |

The bar fill color also matches (green/amber/red instead of the fixed domain color).

Applied in:
- `updateLiveScores()` — updates live panel rows after each answer
- `renderModuleBreakdown()` — applied when building results screen rows

### "Focus on" bar

A compact strip rendered between the live type scores (`#live-scores`) and the module toggle button. Element id: `#focus-bar`.

- Hidden until `userAnswers.length >= 3`
- Shows the top 2–3 modules with the lowest score percentage (among modules with at least 1 answer)
- If all answered modules are green (≥70%), shows "✓ On track — keep going!"
- Format: `⚠ Focus on: Identity & Security · Storage · Monitoring`
- Module names are plain text (no links — links are in the panel)
- Updates after every answer via `updateLiveScores()`
- Reset and hidden when quiz restarts

```html
<div class="focus-bar hidden" id="focus-bar"></div>
```

### CSS additions

```css
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
.module-row.score-green .module-bar-fill { background: var(--green) !important; }
.module-row.score-amber .module-bar-fill { background: var(--amber) !important; }
.module-row.score-red   .module-bar-fill { background: var(--red)   !important; }
```

---

## Files Changed

| File | Changes |
|---|---|
| `questions.js` | Add `pageUrl` to all 158 questions |
| `index.html` | Add CSS; add `#focus-bar` HTML; update explanation link to use `pageUrl`; extend `updateLiveScores()` for color + focus bar; extend `renderModuleBreakdown()` for color; add `renderStudyThese()` called from `showResults()`; add `#study-these` card HTML to results screen |

---

## Out of Scope

- Saving weak topics to localStorage
- Filtering quiz by weak topics
- Showing the focus bar on the results screen
- Any changes to score history or pass/fail logic
