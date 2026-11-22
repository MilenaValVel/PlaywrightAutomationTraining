
type RequestStatus = 'Submitted' | 'In Review' | 'Resolved';

type ServiceRequest = {
  readonly id: number;
  title: string;
  category: string;
  priority: number;
  status: RequestStatus;
  assignee?: string;
};

const requests: ServiceRequest[] = [
  { id: 1, title: 'Damaged park bench', category: 'Parks', priority: 4, status: 'Submitted' },
  { id: 2, title: 'Streetlight not working', category: 'Lighting', priority: 3, status: 'In Review' },
  { id: 3, title: 'Large pothole', category: 'Roads', priority: 2, status: 'Submitted' },
  { id: 4, title: 'Major water leak', category: 'Utilities', priority: 1, status: 'In Review' },
  { id: 5, title: 'Fallen tree blocking road', category: 'Roads', priority: 1, status: 'Submitted' },
  { id: 6, title: 'Repaired sidewalk', category: 'Roads', priority: 3, status: 'Resolved' },
];


function assign(
  request: ServiceRequest,
  clerk: string
): ServiceRequest {
  return {
    ...request,
    assignee: clerk
  };
}

const original = requests[0];
if (original !== undefined) {
  const assigned = assign(original, 'clerk2');

  console.log(original.assignee); // undefined
  console.log(assigned.assignee); // clerk2
  console.log(original === assigned); // false
}
