const requestPrefix: string = "REQ-";
const id: number = 1042;
const priority: number = 2;
const title: string = "Broken street light";
const category: string = "Lighting";

const requestLabel: string = `${requestPrefix}${id} [P${priority}] ${title} (${category})`;

console.log(`Request Label: ${requestLabel}`);
console.log(`Request Label Length: ${requestLabel.length}`);