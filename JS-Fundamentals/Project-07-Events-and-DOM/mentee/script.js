/*
🔍 STEP 1: Grab each button using a different selector

1A — Use querySelector("button") to get the first button on the page
     ➤ Call this variable primaryBtn

1B — Use getElementById("btnById") to grab the second button
     ➤ Call it secondaryBtn

1C — Use getElementsByClassName("btnByClass")[0] to grab the third
     ➤ Call it dangerBtn
*/
const primaryBtn = document.querySelector("button");
const secondaryBtn = document.getElementById("btnById");
const dangerBtn = document.getElementsByClassName("btnByClass")[0];

/*
📦 STEP 2: Grab other DOM elements you’ll need

- Get the <p> with id="message" → store in message
- Get the <p> with id="message2" → store in messageTwo
- Get all <li> elements → use getElementsByTagName("li"), store in listItems
- Get all <button> elements → use querySelectorAll("button"), store in allButtonsNL
*/
const message = document.getElementById("message");
const message2 = document.getElementById("message2");
const listItems = document.getElementsByTagName("li");
const allButtonsNl = document.querySelectorAll("button");
/*



🖨️ STEP 3: Console check

Log each of the variables from Step 1 and Step 2 to make sure everything is selected properly
Use console.log() to check your work!
*/

console.log({
  primaryBtn,
  secondaryBtn,
  dangerBtn,
  message,
  message2,
  listItems,
  allButtonsNl,
});
/*
💡 STEP 4: Create 4 functions

4A — showPrimaryMessage()
  ➤ Change the innerText of #message to say: "Primary button clicked!"
  ➤ Add the "highlight" class to #message
  ➤ Log something to the console  

4B — showSecondaryMessage()
  ➤ Change the innerText of #message2 to say: "Secondary button clicked!"
  ➤ Toggle the "highlight" class on #message2 (use classList.toggle)
  ➤ Log something to the console

4C — dangerAlert()
  ➤ Show an alert box that says "⚠️ Danger button pressed!"
  ➤ Also log to the console

4D — countListItems()
  ➤ Use listItems.length to count how many <li> tags are in the list
  ➤ Log that number in the console
*/

/*
🔗 STEP 5: Add event listeners

➤ When primaryBtn is clicked → run showPrimaryMessage()
➤ When secondaryBtn is clicked → run showSecondaryMessage()
➤ When dangerBtn is clicked → run dangerAlert()

Bonus:
➤ Use a forEach loop on allButtonsNL to:
   - log each button’s text when clicked
   - run countListItems() every time ANY button is clicked
*/
function showPrimaryMessage() {
  message.innerText = "primary button click";
  message.classList.add("highlight");
  console.log("fired");
}

// message2.classList.add("highlight");

function showSecondaryMessage() {
  message2.innerText = "Secondary button clicked!";
  message2.classList.toggle("highlight");
  console.log("Show Secondary Button");
}

function dangerAlert() {
  alert("Danger button!!");
  console.log("Danger button!!");
}

function countListItems() {
  console.log(`there are ${listItems.length} liElements Right now`);
}

// ➤ When primaryBtn is clicked → run showPrimaryMessage()
primaryBtn.addEventListener("click", showPrimaryMessage);
// ➤ When secondaryBtn is clicked → run showSecondaryMessage()
secondaryBtn.addEventListener("click", showSecondaryMessage);
// ➤ When dangerBtn is clicked → run dangerAlert()
dangerBtn.addEventListener("click", dangerAlert);

allButtonsNl.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent.trim());

    countListItems();
  });
});

//[btn1, btn2, btn3]
//Loop 1: button = btn1
//Loop 2: button = btn2

//nums = [10,20,40]
// nums.forEach(())

allButtonsNl.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`${button.textContent} - logged `);
  }),
    button.addEventListener("click", countListItems);
});
