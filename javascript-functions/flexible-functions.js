function makeHandle(name, prefix = "@") {
  const cleaned = name.toLowerCase().replace(/\s+/g, "_");
  return prefix + cleaned;
}

function describeTrip(destination, days = 3, budget = 500) {
  return `${days} days in ${destination} with a budget of ${budget}`;
}

function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

function average(...numbers) {
  if (numbers.length === 0) return 0;
  return sum(...numbers) / numbers.length;
}

console.log("makeHandle('Ada Lovelace'):", makeHandle("Ada Lovelace"));
console.log("makeHandle('John Doe', '#'):", makeHandle("John Doe", "#"));

console.log("describeTrip('Cairo'):", describeTrip("Cairo"));
console.log("describeTrip('Lagos', 5):", describeTrip("Lagos", 5));
console.log("describeTrip('Paris', 7, 1200):", describeTrip("Paris", 7, 1200));

console.log("sum(1, 2, 3):", sum(1, 2, 3));
console.log("sum():", sum());
console.log("sum(10, 20, 30, 40):", sum(10, 20, 30, 40));

console.log("average(2, 4, 6):", average(2, 4, 6));
console.log("average(10, 20):", average(10, 20));

console.log("\n--- Default parameter demos ---");
console.log("describeTrip() [no argument]:", describeTrip());
console.log("describeTrip(undefined, 5):", describeTrip(undefined, 5));
console.log("describeTrip(null):", describeTrip(null));
