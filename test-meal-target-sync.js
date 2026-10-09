const fs = require('fs')
const vm = require('vm')

let source = fs.readFileSync('app.js', 'utf8').replace(/bootApp\(\)\s*$/, '')
source += `
const testCases = []
for (const gender of ['female', 'male']) {
  for (const eatsBreakfast of [true, false]) {
    state.client.gender = gender
    state.client.eatsBreakfast = eatsBreakfast
    const deficit = eatsBreakfast ? 600 : 700
    const baseProtein = gender === 'female' ? 93 : 112
    const target = calculateMacroTargets(1600, baseProtein, deficit, gender)
    const meals = buildDefaultGramMeals(4, target, gender, {})
    const totals = totalsForMeals(meals)
    testCases.push({ gender, eatsBreakfast, target: target.targetCalories, actual: totals.cal })
  }
}
__testCases = testCases
`

const context = {
  console,
  localStorage: { getItem: () => null, setItem: () => {} },
  window: {},
  document: {},
  setTimeout,
  clearTimeout,
  requestAnimationFrame: callback => callback(),
  alert: () => {},
  confirm: () => true,
}

vm.createContext(context)
vm.runInContext(source, context)

context.__testCases.forEach(testCase => {
  const gap = Math.abs(testCase.actual - testCase.target)
  if (gap > 60) {
    throw new Error(`${testCase.gender}/${testCase.eatsBreakfast ? 'breakfast' : 'no-breakfast'} target ${testCase.target}, actual ${testCase.actual}`)
  }
})

console.table(context.__testCases)
