function calculateArea(length, width) {
  return length * width;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const isEven = (number) => number % 2 === 0;

const greetUser = function (name) {
  return `Hello, ${name}!`;
};

console.log("calculateArea(5, 4):", calculateArea(5, 4));
console.log("calculateArea(10, 3):", calculateArea(10, 3));

console.log("toFahrenheit(0):", toFahrenheit(0));
console.log("toFahrenheit(100):", toFahrenheit(100));

console.log("isEven(8):", isEven(8));
console.log("isEven(7):", isEven(7));

console.log("greetUser('Ada'):", greetUser("Ada"));
console.log("greetUser('Tunde'):", greetUser("Tunde"));

console.assert(
  calculateArea(5, 4) === 20,
  "calculateArea(5, 4) should return 20",
);
console.assert(toFahrenheit(0) === 32, "toFahrenheit(0) should return 32");
console.assert(
  toFahrenheit(100) === 212,
  "toFahrenheit(100) should return 212",
);
console.assert(isEven(8) === true, "isEven(8) should return true");
console.assert(isEven(7) === false, "isEven(7) should return false");
