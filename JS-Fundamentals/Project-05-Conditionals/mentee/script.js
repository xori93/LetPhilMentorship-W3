// STEP 1: Check if a score is greater than 80 and log 'Great job!'
// STEP 2: Check if age is less than 18 and log 'You are a minor'
// STEP 3: Use if/else to check if isHungry is true
// STEP 4: Use if/ else if /else to check grade level
// STEP 5: Use an if to check if isLoggedIn is false
// STEP 6: Use a conditional to check if temperature > 30

let score = 95;
if (score > 80) {
  console.log("Great Job!");
}

let age = 10;

if (age >= 18) {
  console.log("You are an adult!");
} else {
  console.log("You are a minor!");
}
let isHungry = false;
if (isHungry) {
  console.log("You are hungry");
} else {
  console.log("You are not hungry");
}

let grade = 100;

if (grade > 100) {
  console.log("Not valid");
} else if (grade >= 90) {
  console.log("You have a A");
} else {
  console.log("You have less than a b");
}

let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("You are not logged in!");
}
