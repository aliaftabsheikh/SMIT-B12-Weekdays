// Enhanced object literals

// let person = {
//     name: "Ali",
//     rollNo: 123,
//     course: "Web and Mobile app development"
// }


// let name = "Ali";
// let rollNo = "123";
// let course = "Web and Mobile app development"


// let person = {
//     name ,
//     rollNo,
//     course,

//     greet(){
//         console.log("Hello", this.name )
//     }
// }

// console.log(person.course)

// person.greet()


// var x = 'rollNo'



// let obj = {
//     dynamicKey: "Hello World"
// }

// let obj1 = {
//     [x]: rollNo
// }

// console.log(obj.dynamicKey)

// console.log(obj1.rollNo);


// SPREAD OPERATOR  (...)


// let summerFruits = ['mango', 'apple', 'banana']
// let winterFruits = ['orange', 'Guava', 'BlueBerry']

// let allFruits = [...summerFruits, ...winterFruits]

// console.log(allFruits);


// let count = [1, 2, 3, 4, 5]
// let endingCount = [10, 11, 12]

// let exceedCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, ...endingCount, 13, 14, 15]


// console.log(exceedCount)



// let obj = {
//     name: "Ali",
//     rollNo: 1234567,
//     courses: ['WMD', 'GD', 'VA']
// }

// let obj1= {
//     ...obj
// }

// obj.courses = ['WMD']

// console.log("OBJ", obj)
// console.log("OBJ1", obj1)


// REST OPERATOR

// function sum(...numbers) {
//     //    return numbers.reduce((acc, current)=> acc + current , 0)

//     let sum = 0;

//     // for(let i = 0; i< numbers.length; i++){
//     //     sum+= value
//     // }

//     for (i of numbers) {
//         sum += i
//     }

//     return sum

// }


// console.log(sum(1, 2, 3, 4, 5, 6, 2, 3, 232, 23323, 233))


// function friendsList(firstName, ...friend){
//     console.log("FIRST FRIEND", firstName)
//     console.log("List of Friend:", friend.join(", "))
// }

// let totalFriends = ['Irfan', 'Hamza', 'Nabeel', 'Asad', "Jethanand", "Suhaib"]

// friendsList(...totalFriends)


// Default parameters


let sum = (a = 0, b = 0)=>{
    return a + b
}

console.log(sum(10, 10))