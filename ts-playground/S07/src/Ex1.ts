
function slaHours(priority: number): number {
  if (priority === 1) {
    return 4;
  }

  return priority <= 3 ? 24 : 72;
}

function isOverdue(
  createdHour: number,
  nowHour: number,
  priority: number
): boolean {
  const elapsedHours: number = nowHour - createdHour;
  return elapsedHours > slaHours(priority);
}


console.log(slaHours(1));       // 4
console.log(slaHours(2));       // 24
console.log(slaHours(4));       // 72

console.log(isOverdue(8, 14, 1)); // true
console.log(isOverdue(8, 14, 3)); // false
