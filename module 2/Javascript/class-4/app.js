//! Concatenating text strings


// var firstName = "Ali";
// var lastName = " Aftab Sheikh";

// console.log(firstName + lastName);

// var message = "Thanks, ";
// var userName = "Ali Aftab"
// var banger = "!";
// var custom =  message + userName + banger


// alert(custom)
// console.log( custom);

// alert(2 + 2 + "2"); 


//! Prompts
// var fname = prompt("What is your name?", "John")
// var question = "What is your name?"
// var dAnswer = "John"

// var fname = prompt(question, dAnswer)

// console.log(fname);

// var numberOfCats = Number(prompt("How many cats?"));
// var numberOfCats = +prompt("How many cats?");
// var tooManyCats = numberOfCats + 1;

// console.log(typeof numberOfCats);
// console.log(tooManyCats);


//! if statements

// var condition = "Sunny";
// var condition = prompt("How was the weather ?");

// if (condition == "Rain"){
//     console.log("Hackathon Postpone !");
// }

// if(5 === "5"){
//     console.log("TRUE !!!");
// }

var countryName = "Pakistan";
var correctAnswer = prompt("Guess my country name?");

var score = 0;
var userIQ;

if (countryName === correctAnswer) {
score++;
userIQ = "genius";
alert("Correct!");
}

console.log(score);
console.log(userIQ);
