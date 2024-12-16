// MAP 

// const arr = [2, 4, 6, 8, 10]

const dummyData = [
    {
        id: 1,
        name: "Irfan",
        rollno: 123456
    },

    {
        id: 2,
        name: "Mubashir",
        rollno: 56789
    },
    {
        id: 3,
        name: "Jethanand",
        rollno: 4567890
    },
]

// OPTIONAL CHAINING

// let data = dummyData[2].rollno
// let data = dummyData[2]?.class?.one

// if(data == undefined){
//     console.log("Production phat Gayi !!")
// }else{
//     console.log("Sahi chal rahi hai mazay kro !!")
// }


// function x(x){
//     return x * 3
// }


// const out = arr.map(function (x) {
//     let result = x * 2

//     return result
// })

// const out = arr.map((x)=> {
//     let result = x * 2
//     return result
// })

// const out = arr.map(x => x * 2)

// const out = dummyData.map((x)=>{
//     return {
//         id: x.id,
//         rollno: x.rollno,
//         name: x.name,
//     }
// })


// console.log(out)



//FILTER

// const arr = [7, 8, 2, 9, 5, 4]

// function isEven(x){
//     return x %  2 === 0
// }
// function isOdd(x){
//     return x %  2 !== 0
// }

// const out = arr.filter((x)=>{
//     return x < 6
// })

let id = 3

const out = dummyData.filter((x)=>{
    return id !== x.id
}).map((x)=>{
    return x.name
})

// const out = dummyData.filter(x => id !== x.id).map(y => y.name)


//!REDUCE

// const arr = [7, 8, 2, 9, 5, 4, 14, 18]

// let max = 0;

// for(let i = 0; i< arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i]
//     }
// }

// console.log(max);


// let out = arr.reduce((acc, curr)=>{
//     if(curr > acc){
//        acc = curr
//     }

//     return acc

// }, 0)



// let out = arr.reduce((accumulator, current)=> {
//    accumulator = accumulator + current
//    return accumulator

// }, 0)

// console.log(out)

