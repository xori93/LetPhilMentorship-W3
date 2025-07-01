// STEP 1: Create a function named sayHello that logs 'Hello!'
// STEP 2: Create a function addNumbers that adds 2 numbers and logs the result
// STEP 3: Create a function greetUser that takes a name and says hello
// STEP 4: Create a function that multiplies two numbers and logs it
// STEP 5: Create a function that logs your favorite quote
// STEP 6: Call all the functions you created above

function sayHello() {
  console.log("Hello!");
}

sayHello();

function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(1, 2);

function greetUser(name) {
  console.log("hello " + name);
}

greetUser("Damien");

function mulitiply(a, b) {
  console.log(a * b);
}

mulitiply(2, 3);

const string = "Hello World";
const quote = (string) => {
  console.log(string);
};
quote(string);

const myFavoriteMovie = (movie) => {
  console.log("My favourite movie is " + movie);
};

myFavoriteMovie("Star wars");

function quote1(text) {
  console.log("This is another," + text);
}

quote1("Text - Hello World 2!");

function add(a, b) {
  return a + b;
}

let sum = add(5, 3); // sum is now 8
console.log(sum); // Prints: 8

// function takes first and last name variables
function name(firstName, lastName) {
  return firstName + " " + lastName;
}
let fullName = name("Martin", "sunnz");
console.log(fullName);

const name2 = (firstName, lastName) => {
  return firstName + "" + lastName;
};
fullName = name2("Martin", "sunnz");
console.log(fullName);

const name3 = (firstName, lastName) => {
  return firstName + "hiiiz" + lastName;
};
fullName = name3("Martin", "sunnz");
console.log(fullName);
