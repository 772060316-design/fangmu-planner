# Final Calorie Meal Sync Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make generated meal quantities for both genders converge on the final calculated calorie target.

**Architecture:** Keep the existing template builder as the food-selection layer, then run every template through one shared macro and calorie balancing pipeline. Apply no-breakfast removal before the final convergence pass so the remaining meals are sized against the reduced target.

**Tech Stack:** Vanilla JavaScript, HTML, local browser regression checks.

## Global Constraints

- Preserve the existing default foods and meal names.
- Use `state.result.targetCalories` as the only generated-meal calorie target.
- Apply the same balancing behavior to women and men.

---

### Task 1: Unify generated-meal balancing

**Files:**
- Modify: `app.js`

**Interfaces:**
- Consumes: `buildDefaultGramMeals(count, target, gender, preferences)` and the macro target object.
- Produces: generated meals whose totals converge on `target.targetCalories` for either gender and breakfast choice.

- [ ] Run the existing template with representative male/female and breakfast/no-breakfast inputs and record the calorie gaps.
- [ ] Add a shared final calorie convergence helper that reduces excess staple carbohydrates and tops up deficits.
- [ ] Remove the female-only bypass around the common balancing pipeline.
- [ ] Run no-breakfast redistribution before the final convergence pass.
- [ ] Verify syntax and all four gender/breakfast combinations.

### Task 2: Browser regression and deployment readiness

**Files:**
- Modify: `app.js` only if browser verification exposes a defect.

**Interfaces:**
- Consumes: the client form and generated meal view.
- Produces: matching displayed target calories and generated meal totals.

- [ ] Start the local static site.
- [ ] Verify women and men with breakfast selected.
- [ ] Verify women and men with no breakfast selected.
- [ ] Confirm saved/generated output uses the same meal quantities.
- [ ] Commit the verified change.
