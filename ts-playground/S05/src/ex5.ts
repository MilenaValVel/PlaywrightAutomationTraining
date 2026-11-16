// Due date in days and hours
const days: number = 4;
const hours: number = 10;

// Convert to  hours
const totalHours: number = days * 24 + hours;

// Calculate full days left
const fullDaysLeft: number = Math.floor(totalHours / 24);

// Print results
console.log(`Total hours: ${totalHours}`);
console.log(`Full days left: ${fullDaysLeft}`);