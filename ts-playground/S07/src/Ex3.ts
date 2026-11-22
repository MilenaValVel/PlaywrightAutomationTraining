
const priorities: number[] = [3, 1, 5, 2, 4, 1, 4, 3, 2, 5, 1];

// Count urgent priorities
function countUrgent(priorities: number[]): number {
  let count: number = 0;

  for (const priority of priorities) {
    if (priority <= 2) {
      count++;
    }
  }
    return count;
}

// Highest priority
function highestPriority(priorities: number[]): number {
  if (priorities.length === 0) {
    throw new Error("Array cannot be empty");
  }
  
  let highest: number = priorities[0];

  for (const priority of priorities) {
    if (priority < highest) {
      highest = priority;
    }
  }

  return highest;
}

// Sorted copy
function sortedPriorities(
  priorities: number[]
): number[] {
  return [...priorities].sort((a, b) => a - b);
}

console.log(countUrgent(priorities));      // 3
console.log(highestPriority(priorities));  // 1
console.log(sortedPriorities(priorities)); // [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]

console.log(priorities); // [3, 1, 5, 2, 4, 1, 4, 3, 2, 5, 1]