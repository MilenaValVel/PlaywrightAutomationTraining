
const statuses: string[] = [
  'Submitted',
  'In Review',
  'Resolved',
  'Submitted'
];

function removeStatus(
  statuses: string[],
  status: string
): string[] {
  const result: string[] = [];

  for (const item of statuses) {
    if (item !== status) {
      result.push(item);
    }
  }

  return result;
}

console.log(removeStatus(statuses, 'Submitted'));
// ['In Review', 'Resolved']
