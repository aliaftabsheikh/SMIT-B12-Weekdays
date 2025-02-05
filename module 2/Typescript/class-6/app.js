"use strict";
// TUPLES
let student = {
    name: "Ali",
    age: 23,
};
let teacher = {
    name: "Ali",
    age: 23,
    experience: 2
};
// FRESH OBJECT
// student = {
//     name: "Ali",
//     age: 23,
//     experience: 2
// }
// STALE OBJECT
student = teacher;
console.log(student);
