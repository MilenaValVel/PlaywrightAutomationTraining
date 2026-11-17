let priority:number = 2;

if (priority === 1) {
  console.log('Critical: respond within 4 hours');
} else if (priority <= 3) {
  console.log('Normal: respond within 3 days');
} else {
  console.log('Low: schedule when possible');
}

const statuses = ['Submitted', 'In Review', 'Resolved'];

for (const status of statuses) {
  console.log(`Checking filter: ${status}`);
}

for (const [index, status] of statuses.entries()) {
  console.log(index, status);
}

const requests = [
  { id: 1, status: 'Submitted', priority: 2 },
  { id: 2, status: 'In Review', priority: 1 },
  { id: 3, status: 'Resolved', priority: 1 },
  { id: 4, status: 'Submitted', priority: 1 },
  { id: 5, status: 'In Review', priority: 2 },
  { id: 6, status: 'Resolved', priority: 3 }
];

for (const request of requests) {
  if (request.status === 'Resolved') {
    continue;              // skip resolved
  }
  if (request.priority === 1) {
    console.log(`First critical: ${request.id}`);
    break;                 // stop searching
  }
}


//ex 4
const roles = ['Citizen', 'Clerk', 'Supervisor'];
const pages = ['/requests', '/inbox', '/reports'];

for (const role of roles) {
  for (const page of pages) {
    console.log(`${role} opens ->  ${page}`);
  }
}
