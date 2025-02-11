"use strict";
// GETTER/SETTER
// class Person {
//     private _name: string;
//     constructor( name: string){
//         if(name.length <= 3){
//             throw new Error("Minimum 3 characters required!")
//         }
//     }
//     public get name(){
//         return this._name
//     }
//     set name(n: string){
//         if(n.length <= 3){
//             throw new Error("Minimum 3 characters required!")
//         }
//         this._name = n
//     }
// }
// const p1 = new Person("ali aftab")
// //SETTER 
// p1.name = "Ali Aftab"
// console.log(p1.name)
// console.log(p1)
class Teacher {
    constructor(fname, id, Timing) {
        this.fname = fname;
        this.id = id;
        this.Timing = Timing;
    }
}
class Student extends Teacher {
    batch() {
    }
}
// class Admin extends Teacher{
//     batch(): void {
//     }
// }
// const t1 = new Teacher("Ali", 234, "Audi 1")
// console.log(t1)
// class Teacher{
//   readonly fname: string;
//    readonly id: number;
//     readonly timing: string
//     constructor( fname: string,  id: number,  timing : string  ){
//         this.fname = fname
//         this.id = id
//         this.timing = timing
//     }
//  static name1: string =  "ali"
//  static greet(n: string){
//     console.log("HELLO "+ n)
//  }
// }
// Teacher.greet("Ali")
// const t1 = new Teacher("ali", 21, "2 to 5")
// t1.fname = "JOHN !"
// console.log(t1)
