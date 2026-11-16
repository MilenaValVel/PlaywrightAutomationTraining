// Convert 30 hours into full days and remaining hours
const totalHours: number = 30;

const fullDays: number = Math.floor(totalHours / 24);
const remainingHours: number = totalHours % 24;

// Convert hours into minutes
const totalMinutes: number = totalHours * 60;

console.log(`Full days: ${fullDays}`);
console.log(`Remaining hours: ${remainingHours}`);
console.log(`Total minutes: ${totalMinutes}`);

// Update a counter
let openRequests: number = 5;
console.log(`Initial open requests: ${openRequests}`);

// Add 3 new requests
openRequests += 3;
console.log(`After 3 new requests: ${openRequests}`);

// Resolve 2 requests
openRequests -= 2;
console.log(`After 2 resolved requests: ${openRequests}`);