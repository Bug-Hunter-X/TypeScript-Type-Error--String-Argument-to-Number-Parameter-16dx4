# TypeScript Type Error Bug

This repository demonstrates a common type error in TypeScript where a string is passed to a function expecting a number.  TypeScript's static typing helps catch these errors during development. 

## Bug Description
The `add` function is defined to accept two numbers.  However, the code attempts to pass a string ("1") as an argument. This causes a type error.

## How to Reproduce
1. Clone the repository.
2. Compile the code using `tsc bug.ts`
3. Run the compiled JavaScript code.

You should see a compilation error from the TypeScript compiler.