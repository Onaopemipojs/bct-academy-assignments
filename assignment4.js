// Question 1
const principal = 1000;
const rate = 5;
const years = 3;

const interest = (principal * rate * years) / 100;
const total = principal + interest;

console.log("--- Question 1 Results ---");
console.log(`Interest: ${interest.toFixed(2)}`);
console.log(`Total Amount: ${total.toFixed(2)}`);

// Question 2

const text = "Hello brave new world";

const charCount = text.length;
const wordCount = text.trim().split(" ").length;
const upperText = text.toUpperCase();
console.log(`Total character count: ${charCount}`);
console.log(`Word count: ${wordCount}`);
console.log(`Uppercase sentence: ${upperText}`);
