// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
// let cards = [firstCard, secondCard]; //array-ordered list of items
let cards = [];
// let sum = firstCard + secondCard;
let sum = 0;
let hasBlackJack = false;
// let isAlive = true;
let isAlive = false;
let message = "";

console.log(cards);

//CREATING PLAYER OBJECT:
let player = {
  name: "Chandu",
  chips: 145,
};

// let playerName = "Chandu"
// let playerChips = 145

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

// if (sum <= 20) {
//   console.log("do you want to draw a new card? 🙂");
// } else if (sum === 21) {
//   console.log("Wohooo! you've got blackjack! 🥳");
//   hasBlackJack = true;
// } //The strict equality ( === ) operator checks whether its two operands are equal, returning a Boolean result.
// else {
//   console.log("you're out of the game! 😭");
//   isAlive = false;
// }
// if (false) {
//   console.log("do you want to draw a new card? 🙂");
// } else if (true) {
//   console.log("Wohooo! you've got blackjack! 🥳");
//   hasBlackJack = true;
// } //The strict equality ( === ) operator checks whether its two operands are equal, returning a Boolean result.
// else {
//   console.log("you're out of the game! 😭");
//   isAlive = false;
// }
// console.log(isAlive);

// console.log(4 === 3); // false
// console.log(5 > 2); // true
// console.log(12 > 12); // false
// console.log(3 < 0); //false
// console.log(3 >= 3); // true
// console.log(11 <= 11); // true
// console.log(3 <= 2); //false

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el"); //if its a class usen -.sum-el
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
  //if 1(A) --> return 11
  //if 11-13 --> return 10
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 1;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  //    + cards[0] + " " + cards[1]; //rendering 2 cards

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohooo! you've got blackjack! 🥳";
    hasBlackJack = true;
  } //The strict equality ( === ) operator checks whether its two operands are equal, returning a Boolean result.
  else {
    message = "you're out of the game! 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  //   console.log("Drawing a new card from the deck!");
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}

// ̥Arrays- is 0 indexed,composite/complex data type
// let parrot = 0;
// let peacock = 1;
// let myna = 2;
// let Birds = [parrot, peacock, myna];
// console.log(Birds.length); // total number of items in an array
// //push method
// let cardss = [2, 4];
// cardss.push(9); // result=[2,4,9]
// cardss.pop(); //if you want to remove the pushed item in an array
// console.log(cardss);

// Counting in js
//        START     FINISH     STEP SIZE
// for (let count = 1; count < 11; count += 2) {
//   console.log(count);
// }

//FIRST LOOP
// let nums = [7, 3, 9];
// for (let i = 0; i < nums.length; i++) {
//   //or i++
//   console.log(nums[i]);
// }

// RETURNING VALUES IN FUNCTIONS

//DICE FUNCTION
//Math.random() function gives num between 0.000 --> 0.999
//ex: dice numbers
// let randomNumber = Math.random() * 6;
// console.log(randomNumber);
//Math.floor()- it removes the decimal
// let flooredNumber = Math.floor(3.45632);
// console.log(flooredNumber); //result is 3
// let randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber); //RESULT: 1,2,3,4,5,6
// function rollDice() {
//   let randomNumber = Math.floor(Math.random() * 6) + 1;
//   return randomNumber;
// }
// console.log(rollDice());

//THE LOGICAL && , || OPERATOR

//OBJECTS- store data in-depth -composite / complex data type, key-value pair

// PRACTICE TIME
//1
// let person = {
//   name: "Chandu",
//   age: 23,
//   country: "INDIA",
// };

// function logData() {
//   let personEl = document.getElementById("person-el");
//   personEl.textContent =
//     person.name +
//     " is a " +
//     person.age +
//     " years old and lives in " +
//     person.country;
// }
// console.log(logData());

//2
// let age = 26;
// if (age < 6) {
//   console.log("Ticket is free");
// } else if (age < 18) {
//   console.log("child discount");
// } else if (age < 27) {
//   console.log("student discount");
// } else if (age < 67) {
//   console.log("buy the ticket with full price");
// } else {
//   console.log("senior citizen discount");
// }

//3
// let largeCountries = ["China", "INDIA", "USA", "Indonesia", "pakistan"];

// for (let i = 0; i < largeCountries.length; i++) {
//   console.log("- " + largeCountries[i]);
// }

//SHIFT UNSHIFT
//The shift() function lets you remove an item from the start of an array. The the unshift() function adds one or more items to the start of an array.

//PUSH POP - WORKS AT THE START OF THE ARRAY

//4
// let hands = ["rock", "paper", "scissor"];

// function getHand() {
//   let randomIndex = Math.floor(Math.random() + 3);
//   return hands[randomIndex];
// }
// console.log(getHand());
