// function x() {
//     for (var i = 1; i <= 5; i++) {
//         // function closer(x) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 5)
//         // }
//         // closer(i)
//     }
// }
// x()

// Function Statement OR Function Definition OR FUNCTION DECLARATION

// function greet() {
//     console.log("HELLO");
// }

// FUNCTION EXPRESSION

// var abc = function () {
//     console.log('abc');
// }

// let def = () => {
//     console.log('def');

// }


// ANONYMOUS FUNCTION

// function (){

// }

// ()=>{}


// NAMED FUNCTION EXPRESSIONS

// var abc = function xyz () {
//     console.log('abc');
// }

// xyz()


// D/F between Parameters and arguments

// function sum(a,b){
//     console.log(a + b);
// }

// sum(8, 7)


// First class functions

// function x(y){
//     // console.log(y);

//     y()
// }

// x(function y(){
//     console.log("Y");

// })


// ARROW Function

let x = (a, b) => {
    return a + b
}

let y = (a, b) => a + b

console.log(x(2,2))

console.log( y(3, 3));
