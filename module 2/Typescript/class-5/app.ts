// const fruits: string[] = ["Apple", "Banana", "Mango"]
// const rollNo: Array<string | number> = ["122", 122]



// function add(num1: number, num2: number): number{
//     return num1 + num2
// }


// function greeting(name: string) : string{
//     return "Hello" + name
// }

// console.log(greeting("Ali"))


// console.log(add(2, 4))


// let add: (x: number, y: number, z: string) => unknown = function(x: number, y: number, z?: string): number{
//     return x + y
// };

// console.log(add(2, 4, 'ali'))


// type Calculate = (num1: number, num2: number) => number;

// let add : Calculate = function(num1: number, num2: number): number{
//     return num1 + num2
// };

// let subtract: Calculate = function(num1: number, num2: number): number{
//     return num1 - num2
// };

// function greeting(name: string = "JOHN"): string{
//     return `Hello ${name}`
// }

// console.log(greeting("Ali"))


// function fruitName(...allFruits: string[] ){
//     return allFruits
// }


// console.log(fruitName("Mango", "Apple", "Orange", "Grapes"))




// function y(x){
//     console.log(x)
// }

// y(function x(){
//     console.log("x")
// })


function MyCallback(x: string): void{
    console.log("MyCallback", x)
}

function callingFunction(text: string, callback: (x: string) => void): void{
    console.log(callback("ALI"))
}


callingFunction("Hello", MyCallback)


console.log(MyCallback)


