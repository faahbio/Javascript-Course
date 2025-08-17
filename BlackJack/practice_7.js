let randomNumber1 = Math.random();

console.log(randomNumber1);

let randomNumber2 = Math.random() * 6;

console.log(randomNumber2);

let randomNumber3 = Math.floor(3.45632);

console.log(randomNumber3);

let randomNumber4 = Math.floor(Math.random() * 6);

console.log(randomNumber4);

let randomNumber5 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber5);

// Create a function that returns a random number between 1 and 6
function rollDice() {
 let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}