const requests: string[] = [
  "Submitted",
  "In Review",
  "Resolved",
  "Submitted",
  "In Review",
  "Resolved",
  "Resolved",
  "Submitted",
  "In Review",
];

let submitted = 0;
let inReview = 0;
let resolved = 0;

for (const status of requests) {
  if (status === "Submitted") {
    submitted++;
  } else if (status === "In Review") {
    inReview++;
  } else if (status === "Resolved") {
    resolved++;
  }
}

console.log("Submitted:", submitted);
console.log("In Review:", inReview);
console.log("Resolved:", resolved);