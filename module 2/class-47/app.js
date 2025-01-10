class Point {
    x = 10;
    y = 20;   //PROPERTIES

    // constructor(x, y){
    //     this.x = x;
    //     this.y = y
    // }


    constructor(a, b) {
        this.x = a
        this.y = b
    }

}

const pt = new Point(6, 10)
const pt1 = new Point(2, 4)

// console.log(pt)
// console.log(pt1)

// const obj = { 
//     name: 'Ali', 
//     age: 23, 
//     country: 'Pakistan', 
//     gender: 'Male', 

//     greet(){

//         console.log(`Hello ${this.name}`)
//     }
// }

// obj.greet()

// const p = new Person("Ali", 23, "Pakistan", "Male")

// p.greet()

// console.log(p)


class Person {
    name;
    age;
    country;
    gender;

    constructor(name, age, country, gender) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.gender = gender
    }

  

    greet() {
        console.log(`Hello ${this.name}`)
    }
}


// INHERITANCE

class WebEnrollment extends Person{
    cnic;

    constructor(name, age, country, gender, cnic){
        super(name, age, country, gender)
        this.cnic = cnic
  
    }

    
}

const web1 = new WebEnrollment("Ali", 23, "Pakistan", "Male", 12345678)
web1.greet()
console.log(web1)




