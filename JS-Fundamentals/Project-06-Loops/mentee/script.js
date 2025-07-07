// STEP 1: Use a for loop to count from 1 to 3

for (let i = 1; i < 3; i++) {
  console.log(i);
}

// STEP 2: Use a for loop to print 5 stars
for (let i = 1; i <= 5; i++) {
  console.log("⭐");
}

// STEP 3: Loop through an array of fruits and log each one
let fruits = ["apple", "banana", "mango", "lychee", "durian"];
for (let i = 0; i < fruits.length; ++i) {
  console.log(fruits[i]);
}

// const fruits2 = ["applies", "banana", "grape"];
// const newFruit = "pear";

// const nextNumber = fruits2.length + 1;
// console.log(`${nextNumber}, ${newFruit}`);

// STEP 4: Use a loop to print even numbers from 2 to 10
// const number = evenNumber;
// for (let i = 2; i < 10; i++) {
//   console.log(evenNumber);
// }

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// STEP 5: Loop backwards from 5 to 1

for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// STEP 6: Loop through letters in a string

let str = "This is a string";
for (let i = 0; i < str.length; ++i) {
  console.log(str[i]);
}
