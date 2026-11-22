
function formatRequestId(
  n: number,
  prefix: string = 'REQ'
): string {
  const paddedId: string = String(n).padStart(4, '0');

  return `${prefix}-${paddedId}`;
}

console.log(formatRequestId(42));        // REQ-0042
console.log(formatRequestId(7));         // REQ-0007
console.log(formatRequestId(1234));      // REQ-1234
console.log(formatRequestId(80, 'INC')); // INC-0080
