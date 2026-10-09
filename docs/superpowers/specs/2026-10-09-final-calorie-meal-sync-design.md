# Final Calorie Meal Sync Design

## Goal

Use the final calculated calorie target as the single source of truth for macro targets and generated meal quantities for both women and men, including the 700 kcal no-breakfast deficit.

## Design

- The fixed female and male templates continue to choose the default foods and meal structure.
- Food quantities are recalculated against `state.result.targetCalories`, `protein`, `carbs`, and `fat` after the template is assembled.
- Both genders run through the same calorie and macro balancing pipeline.
- No-breakfast plans remove breakfast first, then rebalance the remaining meals against the already reduced final target.
- A final calorie convergence pass reduces removable carbohydrates first and adds staple carbohydrates only when the plan is under target.

## Acceptance Criteria

- A displayed target of 900 kcal never generates a meal plan using the former 1400-1500 kcal quantities.
- Women and men use the same final-target balancing path.
- Eating breakfast uses the 600 kcal deficit target; skipping breakfast uses the 700 kcal deficit target.
- Generated meal calories remain close to the final target after practical food-weight rounding.
- Saved and reported plans retain the same calculated target and meal quantities.
