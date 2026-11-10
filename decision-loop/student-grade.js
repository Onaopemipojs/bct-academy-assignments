const score = 80;
if (score < 0 || score > 100) {
  console.log("Invalid score");
} else if (score >= 70 && score <= 100) {
  console.log("A");
} else if (score >= 60 && score <= 69) {
  console.log("B");
} else if (score >= 50 && score <= 59) {
  console.log("C");
} else if (score >= 45 && score <= 49) {
  console.log("D");
} else {
  console.log("F");
}
