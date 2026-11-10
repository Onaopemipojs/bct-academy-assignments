console.log("=== Snippet 1 — Global and function scope ===");

const course = "JavaScript";

function showCourse() {
  const topic = "Functions";
  console.log(course);
}

showCourse();
try {
  console.log(topic);
} catch (err) {
  console.log("Actual error:", err.message);
}

console.log(
  "Explanation: course is accessible inside the function because it is global. topic only exists inside showCourse, so accessing it outside causes a ReferenceError.",
);

console.log("\n=== Snippet 2 — Block scope ===");

try {
  if (true) {
    const message = "Inside the block";
    let count = 3;
  }
  console.log(message);
  console.log(count);
} catch (err) {
  console.log("Actual error:", err.message);
}

console.log(
  "Explanation: const and let are limited to the block they are declared in. Outside the if block they do not exist.",
);

console.log("\n=== Snippet 3 — Shadowing ===");

const score = 10;

function showScore() {
  const score = 25;
  console.log(score);
}

showScore();
console.log(score);

console.log(
  "Explanation: The inner score variable shadows the outer one. The function uses its own score, then the global score is still 10 after the function finishes.",
);

console.log("\n=== Snippet 4 — Hoisting ===");

console.log(greet());

function greet() {
  return "Welcome!";
}

console.log(
  "Explanation: Function declarations are fully hoisted, so the function can be called before its declaration appears in the code.",
);

console.log("\n=== Snippet 5 — Function expression and hoisting ===");

try {
  console.log(double(4));
} catch (err) {
  console.log("Actual error:", err.message);
}

const double = (number) => number * 2;

console.log(
  "Explanation: Function expressions assigned with const are not hoisted the same way. The variable exists but is uninitialized until the const line runs, so calling it earlier throws an error.",
);
