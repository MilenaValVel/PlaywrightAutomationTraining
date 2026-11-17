//Explain in a comment why for (const i in ['a', 'b']) prints 0 and 1 as strings

// for...in iterates over the array's property keys (indexes), not its values.
// Array indexes are stored as string keys, so it prints "0" and "1" as strings, not numbers.