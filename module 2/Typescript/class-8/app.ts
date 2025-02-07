// class Point  {
//     x: number;
//     y: number;

//     constructor(x: number, y: number){
//         this.x = x,
//         this.y = y
//     }
// }

// const p = new Point(20, 40)
// console.log(p)

// const p1 = new Point(30, 60)
// console.log(p1)
// const p2 = new Point()
// console.log(p)


//INHERITANCE 

class Animal {
    name:string;

    constructor(theName: string) { 
        this.name = theName; 
    }

    move(meters: number = 0) {
        console.log(this.name + " moved " + meters + "m.");
    }
 
}

class Snake extends Animal {
    // bark: string;
    constructor(name: string) { 
        super(name); 


        // this.bark = bark
    }
    move(meters = 5) {
        console.log("SISSHHHHHHS...");
        super.move(meters)
    }
   bite(){
        console.log("bites");
    }
}

let a: Animal = new Snake("Python");
a.move(10);


// ENCAPSULATION

// class Animal {
//     protected name:string;

//     constructor(theName: string) { 
//         this.name = theName; 
//     }

//      move(meters: number = 0) {
//         console.log(this.name + " moved " + meters + "m.");
//     }
// }

// const a1 = new Animal("Cat")

// console.log(a1)

// class Snake extends Animal {
//     // bark: string;
//     constructor(name: string) { 
//         super(name); 

//         // this.bark = bark
//     }
//     move(meters = 5) {
//         this.name = "HELLO"
//         console.log("SISSHHHHHHS...");
//         // super.move(meters);
//     }
//    bite(){
//         console.log("bites");
//     }
// }

// let a: Animal = new Snake("Python");


// console.log(a)
// a.move(5);




//! PUBLIC

// Accessible anywhere 
// Accessible Child Class
// Accessible outside the class

//! PRIVATE

// Only accessible in your own class !
// Not accessible in child class!
// Not accessible in outside the class!

// PROTECTED 

// Accessible in your own class & child class !
// Not Accessible in outside the class !


// class Parent {


//     constructor(public name: string, private age: number){
      
//     }
// }


// const p1 = new Parent("Ali", 34)
// console.log(p1)