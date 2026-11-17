type Status =
  | "Submitted"
  | "In Review"
  | "Waiting for Info"
  | "Resolved";

const requests = [
  { id: 1, title: "Broken street light", priority: 1, status: "Submitted" },
  { id: 2, title: "Damaged sign", priority: 2, status: "In Review" },
  { id: 3, title: "Crosswalk repair", priority: 1, status: "Resolved" },
  { id: 4, title: "Hole in the road", priority: 3, status: "Waiting for Info" }
];

console.log(
  "ID".padEnd(5) +
  "Title".padEnd(25) +
  "Priority".padEnd(10) +
  "Status"
);

console.log("-".repeat(70));

for (const request of requests) {
  console.log(
    String(request.id).padEnd(5) +
    request.title.padEnd(25) +
    String(request.priority).padEnd(10) +
    request.status
  );
}