// HIGHER ORDER FUNCTIONS


// function x() {
//     console.log('x')
// }


// function y(x) {
//     x()
// }

// y(x)


const radius = [8, 7, 5, 2]

const area = (rad) => {
    return Math.PI * rad * rad
}

const circumference = (rad) => {
    return 2 * Math.PI * rad
}

const diameter = (rad) => {
    return 2 * rad
}


const calculate = function (radius, logic) {
    const output = []

    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }

    return output
}

// console.log(calculate(radius, area))
// console.log(calculate(radius, circumference))
// console.log(calculate(radius, diameter))

console.log(radius.map(area))
console.log(radius.map(circumference))
console.log(radius.map(diameter))

// ===============================================================


// const calculateArea = function (rad) {

//     const output = []

//     for (let i = 0; i < rad.length; i++) {
//         output.push(Math.PI * rad[i] * rad[i])
//     }

//     return output
// }


// console.log("AREA======================>",calculateArea(radius))



// const calculateCircumference = function(rad){
//     const output = []

//     for (let i = 0; i < rad.length; i++){
//         output.push(2 * Math.PI * rad[i])
//     }

//     return output
// }

// console.log("Circumference===================>",calculateCircumference(radius))



// const calculateDiameter = function(rad){
//     const output = []

//     for (let i = 0; i < rad.length; i++){
//         output.push(2  * rad[i])
//     }

//     return output
// }

// console.log("DIAMETER==============>",calculateDiameter(radius))

