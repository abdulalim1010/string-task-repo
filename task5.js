let sentence = "no body lovu  is important";

function containsAllVowels(str) {
  const vowels = ['a','e',  'i', 'o', 'u'];
  // Convert the string to lowercase to handle case-insensitivity
  str = str.toLowerCase();
  
  // Check if every vowel is in the string
  for (let vowel of vowels) {
    if (!str.includes(vowel)) {
      return false;  // If any vowel is missing, return false
    }
  }
  return true;  // All vowels are present
}

// Example usage
console.log(containsAllVowels(sentence));  // true
