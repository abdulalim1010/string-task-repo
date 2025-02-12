let sentence = "Example text with x and X. y and Y";

function replaceXWithY(str) {
  // Replace both 'x' with 'y' and 'X' with 'Y'
  return str.replace(/x/g, 'y').replace(/X/g, 'Y');
}

// Example usage
console.log(replaceXWithY(sentence));  // "Eyample teyt with y and Y."
