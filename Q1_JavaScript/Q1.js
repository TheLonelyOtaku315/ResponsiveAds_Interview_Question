// You have an array.
// An item of the array has `name`, a string, and `types`, an array of strings.
// The length of `types` in a record can be 1-99 (not always 1-2)
// e.g. [{ name: "bulbasaur", types: ["grass", "poison"] }]
const pokes = getPokes();

console.log("Pokes", pokes);

// Problem 1: Filter by type
// - Populate `answer1` with Pokemon names that contain the type string
const type = "grass";
const answer1 = []; // TODO
for (let i = 0; i < pokes.length; i++) {
  const poke = pokes[i];
  for (let j = 0; j < poke.types.length; j++) {
    const pokeType = poke.types[j];
    if (pokeType === type) {
      answer1.push(poke.name);
      break; // No need to check other types for this Pokemon
    }
  }
}

// Problem 2: Filter by types (AND / OR)
// - Populate `answer2Or` with Pokemon names that satisfy AT LEAST ONE of the given types
// - Populate `answer2And` with Pokemon names that satisfy ALL of the given types
// (Note that the length of the given `types` can be 1-99. (not always 1-2))
const types = ["bug", "poison"];
const answer2Or = []; // TODO
for (let i = 0; i < pokes.length; i++) {
  const poke = pokes[i];
  for (let j = 0; j < poke.types.length; j++) {
    const pokeType = poke.types[j];
    if (types.includes(pokeType)) {
      answer2Or.push(poke.name);
      break; // No need to check other types for this Pokemon
    }
  }
}
const answer2And = []; // TODO
for (let i = 0; i < pokes.length; i++) {
  const poke = pokes[i];
  let foundAllTypes = true;
  for (let j = 0; j < types.length; j++) {
    const typeToCheck = types[j];
    if (!poke.types.includes(typeToCheck)) {
      foundAllTypes = false;
      break; 
    }
  }
  if (foundAllTypes) {
    answer2And.push(poke.name);
  }
}

// See your results in your DevTools console
console.log("Answer 1", answer1);
console.log("Answer 2 (OR)", answer2Or);
console.log("Answer 2 (AND)", answer2And);

// --------------------------------

// Use require to load pokes.json in Node.js
function getPokes() {
  const data = require("../pokes.json");
  return data;
}
