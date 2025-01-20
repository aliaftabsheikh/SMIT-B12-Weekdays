// UNION LITERALS

// const firstName: string = 1

// const id: number | string = "10"


// const data: string | null = null
// console.log(data)


// const random = Math.random()
// console.log(random)
// let newAge = random > 0.6 ? "Khan": 60.00;

// //newAge.toLowerCase();//Error: Transpiler cannot narrow

// if (typeof newAge === "string") {
//     // Type of newAge: string
//     newAge = newAge.toUpperCase(); // Can be called
// }else{
//     newAge.toFixed()
// }

// console.log(newAge)


// let role: any;

// role = "admin"



// let teacher : {
//     name: string,
//     age: number ,
//     role?: string
// }


// teacher = {
//     name: "Ali",
//     age: 12,
    
// }

// console.log(teacher)



// teacher = {
//     name :"Ali",
//     age: 23
// }

// console.log(teacher.name)


//TYPE ALIAS --- OBJECT ALIAS
// type Student  = {
//     name: string,
//     age: number,
//     class?: string
// }



// let student: Student = {
//     name: "Jethanand",
//     age: 23,
//     class: "Web Development"
// }


// INTERFACE

interface Manager {
    name: string,
    age: number
}


let manager: Manager = {
    name: "Ali",
    age: 12
}