// Remove falsy from any array
const fruites = [
  false,
  "Bangladesh",
  null,
  "Iran",
  NaN,
  "USA",
  undefined,
  "UK",
  0,
  "Tukis",
  "",
];

const removeFalsyValue = fruites.filter(Boolean);
console.log(removeFalsyValue);
