var fruits = ["Apple", "Mango", "Banana", "Grapes", "BB", "Kiwi", "Papaya"]

// console.log(fruits);

// fruits[1] = "Grapes"

// console.log(fruits[1]);
// console.log(fruits);


//! Methods

//pop()   Remove Last Element

// console.log(fruits.pop());  

//push()   Add elements in last

// fruits.push("Pineapple");

//shift()   // Remove Element from start

// fruits.shift()

// console.log(fruits);

//unshift()   // Add Elements in start

// fruits.unshift("Grapes", "Peach")

// console.log(fruits);

// slice()  

// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.

// var newfruits = fruits.slice(2)

// console.log(newfruits);


//Splice()

fruits.splice(0, 2, "Cherry", "Lemon")

console.log(fruits);


