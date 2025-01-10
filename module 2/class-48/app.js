// ENCAPSULATION


class Person {
    name;
    age;
    #country;
    #gender;

    constructor(name, age, country, gender) {
        this.name = name;
        this.age = age;
        this.#country = country;
        this.#gender = gender
    }

  

    greet() {
        console.log(`Hello ${this.name}`)
    }

    personGender(){
        console.log("This person gender is" + this.#gender)
    }

}

const p = new Person("Ahmed", 19, "Pakistan", "Male")

// p.#gender = "MALE"
// console.log(p)

// p.personGender()


// class WebEnrollment extends Person{
//     cnic;

//     constructor(name, age, country, gender, cnic){
//         super(name, age, country, gender)
//         this.cnic = cnic
//     }

//     personGender(){
//         console.log("This person gender is" + this.#gender)  //ERROR
//     }
// }


// POLYMORPHISM

class Animal {
    name;

    constructor(name){
        this.name = name
    }

    sound(){
        console.log(`${this.name} says meow`)
    }
}


class Cat extends Animal{
    constructor(name){
        super(name)
    }
}


class Dog extends Animal{
    constructor(name){
        super(name)
    }

    sound(){
        console.log(`${this.name} bark !!`)
    }
}


const cat = new Cat("Cat")
const dog = new Dog("Dog's")

cat.sound()
dog.sound()
// console.log(cat)