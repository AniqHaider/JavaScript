// Blackjack game ...

let first_number = 6;
let second_number = 9;

let sum = first_number + second_number;

if (sum < 21) {
   console.log("Do you want to draw another card ?")
} else if ( sum === 21 ) {
    console.log("Congratulations you have a blacjack")
} else {
    console.log("You have lost the game")
}