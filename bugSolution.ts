function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct usage with numbers
console.log(result); // Output: 3

function addString(a: string, b: string): string {
  return parseInt(a) + parseInt(b).toString();
}

let stringResult = addString("1", "2"); // String addition
console.log(stringResult); //Output: 3