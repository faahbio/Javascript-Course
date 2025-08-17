// Create a person object that contains three keys: name, age and country
// Use yourself as an example to set the values

// let person = {
//     name: "Faahbio",
//     age: 30,
//     country: "Brazil"
// }

// // Create a function, logData(), that uses the person object to create a string that says:
// // "My name is [name], I am [age] years old and I live in [country]"

// function logData() {
//     let data = "My name is " + person.name + ", I am " + person.age + " years old and I live in " + person.country;
//     console.log(data);
// }

// logData();

// ----------

// let age = 70

// less than 6 years old    -> free
// 6 to 17 years old        -> child discount
// 18 to 26 years old       -> student discount
// 27 to 66 years old       -> full price
// over 66 years old        -> senior discount

// Create a conditional statement (if, else if, else) that logs out the discount the passenger will get based upon the value of the age variable

// if (age < 6) {
//     console.log("Free");
// } else if (age < 18) {
//     console.log("Child discount");
// } else if (age < 27) {
//     console.log("Student discount");
// } else if (age < 67) {
//     console.log("Full price");
// } else {
//     console.log("Senior discount");
// }

// ----------

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i]);
// }

// ----------

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// largeCountries.pop();
// largeCountries.push("Pakistan");

// largeCountries.shift();
// largeCountries.unshift("China");

// console.log(largeCountries);

// ----------

// let dayOfMonth = 31
// let weekDay = "Friday"

// if (dayOfMonth === 13 && weekDay === "Friday") {
//     console.log("It's Friday the 13th!");
// }

// ----------

let hands = ["rock", "paper", "scissors"];

function playGame() {
  
  let playerHand = hands[Math.floor(Math.random() * hands.length)];
  let computerHand = hands[Math.floor(Math.random() * hands.length)];

  console.log("Player hand: " + playerHand);
  console.log("Computer hand: " + computerHand);

  if (playerHand === computerHand) {
      console.log("It's a tie!");
  } else if (playerHand === "rock" && computerHand === "scissors" ||
             playerHand === "paper" && computerHand === "rock" ||
             playerHand === "scissors" && computerHand === "paper") {
      console.log("Player wins!");
  } else {
      console.log("Computer wins!");
  }

}

playGame();