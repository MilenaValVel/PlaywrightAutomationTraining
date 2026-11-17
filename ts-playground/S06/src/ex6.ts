type Status = "Submitted" | "In Review" | "Resolved";

type Request = {
  id: number;
  status: Status;
  priority: number;
};


const requests: Request[] = [
  { id: 1, status: "Submitted", priority: 3 },
  { id: 2, status: "Resolved", priority: 1 },
  { id: 3, status: "In Review", priority: 1 },
  { id: 4, status: "Submitted", priority: 1 }
];

let firstCritical: Request | undefined;

for (const request of requests) {
  if (request.status === "Resolved") {
    continue;
  }

  if (request.priority === 1) {
    firstCritical = request;
    break;
  }
}

console.log(firstCritical);