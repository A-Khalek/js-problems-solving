// How to Flatter a multi-dimentional array
const fruites = [
  "Mango",
  "Banana",
  ["Orange", ["Dates", "Watermelon"], "Angur"],
  "Papia",
];

console.log(fruites.flat());
console.log(fruites.flat(Infinity));
