// Title with extra spaces and mixed case
let title: string = "   bRoKeN sTrEeT LiGhT   ";

// Remove extra spaces at the beginning and end
const trimmedTitle: string = title.trim();
console.log(`Trimmed title: ${trimmedTitle}`);

// Convert to lowercase
const lowerTitle: string = trimmedTitle.toLowerCase();
console.log(`Lowercase title: ${lowerTitle}`);

// Convert to uppercase
const upperTitle: string = trimmedTitle.toUpperCase();
console.log(`Uppercase title: ${upperTitle}`);

// Capitalize the first letter
const capitalizedTitle: string =
  lowerTitle.charAt(0).toUpperCase() + lowerTitle.slice(1);

console.log(`Capitalized title: ${capitalizedTitle}`);

// Check if the title includes a word
console.log(`Includes "street": ${lowerTitle.includes("street")}`);

// Replace a word
const replacedTitle: string = lowerTitle.replace("street", "road");
console.log(`Replaced title: ${replacedTitle}`);