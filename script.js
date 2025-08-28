// ==============================
// Part 1: Basics (Variables, Conditionals)
// ==============================

// Function to check if a number is positive or negative
function checkNumber() {
  let num = document.getElementById("userNumber").value;

  if (num > 0) {
    document.getElementById("result").textContent = "The number is positive!";
  } else if (num < 0) {
    document.getElementById("result").textContent = "The number is negative!";
  } else {
    document.getElementById("result").textContent = "The number is zero.";
  }
}

// ==============================
// Part 2: Functions
// ==============================

// Function 1: Calculate a total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function 2: Show total on the webpage
function showTotal() {
  let total = calculateTotal(100, 3); // Example: 100 * 3
  document.getElementById("totalOutput").textContent = "Total price is: $" + total;
}

// ==============================
// Part 3: Loops
// ==============================

// Loop Example 1: Countdown
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear previous results

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Loop Example 2: Array iteration
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => console.log("Fruit: " + fruit));

// ==============================
// Part 4: DOM Manipulation
// ==============================

// DOM Task 1: Toggle text visibility
function toggleText() {
  let msg = document.getElementById("toggleMessage");
  if (msg.style.display === "none") {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
}

// DOM Task 2: Change background color on click
document.body.addEventListener("click", () => {
  document.body.style.backgroundColor = "#f0f8ff";
});

// DOM Task 3: Dynamically create a new element
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added dynamically with JavaScript!";
document.body.appendChild(newPara);
