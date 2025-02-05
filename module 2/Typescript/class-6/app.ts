// TUPLES

// let person: readonly [string, number] = ["A", 123];

// person.push(1);

// console.log(person);


//!FUNCTION OVERLOADS 


// function calculate(a: number, b: number): number;
// function calculate(a: string, b: string): string;
// function calculate(a:boolean, b: boolean): boolean;

// function calculate(a: any, b: any): any{
//     return a + b;
// }

// console.log(calculate(2, 3));


// STRUCTURAL TYPING 

type Student = {
    name: string;
    age: number;
    experience?: number

}

// Type Alias
type Teacher = {
    name: string;
    age: number;
    experience: number
}

let student: Student = {
    name: "Ali",
    age: 23,

}


let teacher: Teacher = {
    name: "Ali",
    age: 23,
    experience: 2
}



// FRESH OBJECT

// student = {
//     name: "Ali",
//     age: 23,
//     experience: 2
// }
// STALE OBJECT

student = teacher


console.log(student)

