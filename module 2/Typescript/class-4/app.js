"use strict";
// type Alias
// const student: {
//     name: string,
//     age: number,
//     rollNo?: number
// } = {
//     name : "Ali",
//     age: 12,
// }
// type Student = {
//   name: string;
//   age: number;
//   rollNo?: number;
// };
// const student: Student = {
//     name: "Ali Aftab",
//     age: 32,
//     rollNo: 234567
// }
// const student1: Student = {
//     name: "Ali Aftab",
//     age: 32
// }
// const student2: Student = {
//     name: "Ali Aftab",
//     age: 32
// }
// type Author = {
//     firstName: string,
//     lastName: string
// }
// type Book ={
//     name: string,
//     author : Author
// }
// type Author = {
//   firstName: string;
//   lastName: string;
// };
// type Book = {
//   name: string;
//   author: Author;
// };
// const author: Author = {
//   firstName: "Umera",
//   lastName: "Ahmed",
// };
// const book: Book = {
//   name: "PEER KAMIL !!",
//   author: {
//     firstName: "Umera",
//     lastName: "Ahmed",
//   },
// };
// INTERSECTION TYPES 
// type BookInfo = {
//     name: string,
//     publishedBy : string,
//     genre : string
// }
// type Author = {
//     authorName: string,
//     authorExperience: number
// }
// const book : BookInfo & Author = {
//     name: "ATOMIC HABITS",
//     publishedBy: "JOHN ALIA",
//     genre: "Self Help",
//     authorName: "JAMS Bhai",
//     authorExperience: 40,   
// }
// console.log(book)
// ANY 
// let fname: any = "Ali Aftab"
// fname = 123
// fname = true
// fname = []
// let myval: any;
// myval = true; // OK
// myval = 42; // OK
// myval = "hey!"; // OK
// myval = []; // OK
// myval = {}; // OK
// myval = Math.random; // OK
// myval = null; // OK
// myval = undefined; // OK
// myval = () => { console.log('Hey again!'); }; // OK
// let fname:any = "Ali"
// fname = 23;
// fname = false
// fname = "irfan !"
// if(typeof fname === "string"){
//     console.log(fname.toUpperCase())
// }
// if(typeof fname === "number"){
//     console.log(fname.toFixed())
// }
// if(typeof fname === "boolean"){
//     console.log(fname.valueOf())
// }
// function error(): any{
//   console.log("Ali Aftab")
// }
// console.log(error())
// let myname: unknown = "ali";
// console.log((myname as string).toUpperCase());
// myname = 10;
// console.log((<number> myname).toFixed())
// enum Color {
//     Red = 1, 
//     Green, 
//     Blue = 2
// };
// console.log(Color.Blue)
// enum Dishes {
//     Biryani = "biryani",
//     Haleem = "haleem",
//     Nihari = "nihari"
// }
// console.log(Dishes['Haleem'] = "Qorma"
// )
var StausCode;
(function (StausCode) {
    StausCode["SUCCESS"] = "200";
    StausCode["NOT_FOUND"] = "404";
    StausCode["SERVER_ERROR"] = "500";
})(StausCode || (StausCode = {}));
// console.log(Browser[
//     "FIREFOX"
// ])
// console.log(StausCode.SUCCESS)
const fruit = ["APPLE", "MANGO", "BANANA"];
let array2 = [1, 2, 3];
