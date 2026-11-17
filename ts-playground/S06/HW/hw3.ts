for (let i = 1; i <= 10; i++) {
  const title = `Test request ${String(i).padStart(2, "0")}`;
  const priority = ((i - 1) % 5) + 1;

  console.log(`${title} -> Priority: ${priority}`);
}