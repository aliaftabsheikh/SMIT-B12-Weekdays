var person = {
    name: 'Ali',
    age: 23,
    role: 'Teacher',
    isPermenant: true,
    greet: function(name){
        return "Welcome " + this.role
    },
    // shifts: ["morning", "evening", "night"]
    shifts: {
        morning: "morning",
        evening : "evening",
        night: "night"
    }
}

console.log(person);


// function Person(name, age, role, isPermenant){
//     this.name1 = name;
//     this.age1 = age;
//     this.role1 = role;
//     this.permenant1 = isPermenant
// }

// var person = new Person("Ali", 23, "Teacher", true)
// var person1 = new Person("Huzaifa", 35, "Student", false)
// var person3 = new Person("Rayyan", 35, "Student", false)
// console.log(person);
// console.log(person1);
// console.log(person3);

var persons = [
    {
        name: 'Ali',
        age: 23,
        role: 'Teacher',
        isPermenant: true,
    }, 
    {
        name: 'Irfan',
        age: 40,
        role: 'Student',
        isPermenant: false,
    }, 
    {
        name: 'Jethanand',
        age: 18,
        role: 'Student',
        isPermenant: true,
    }, 
]

console.log(persons.name);





// console.log(person.greet())

// person.name = "Rayyan"
// person.age = 30;
// person.role = "Student";
// person.isPermenant = false


// delete person.age;






// console.log(person.greet("Teacher"))
// console.log(person.greet("Students"))