// import * as utils from "./utils.js"

// let mul = utils.multiply(2,2)
// let add = utils.add(2,2)
// let divide = utils.divide(2,2)
// let subtract = utils.subtract(2,2)

// import {multiply as multFun, add as addFun, divide, subtract} from "./utils.js"

// import addFunc, {divide, multiply, subtract} from "./utils.js"

// let mul = multiply(3, 3)
// let addition = addFunc(5, 2)
// let div = divide(5, 2)

// console.log(mul);
// console.log(addition);
// console.log(div);



// for (value of [1,2,3,4,5]){
//     console.log(value)
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]

// for(let i = 0; i < arr.length; i+=2){
//     console.log(arr[i])
// }


// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     let nextIndex = start;
//     let iterationCount = 0;

//     const rangeIterator = {
//         next() {
//             let result;
//             if (nextIndex < end) {
//                 result = { value: nextIndex, done: true }
//                 nextIndex += step;
//                 iterationCount++;
//                 return result;
//             }
//             return { value: iterationCount, done: false }
//         }
//     }

//     return rangeIterator;


// }


// const iter = makeRangeIterator(1, 25, 2);

// let result = iter.next();

// while (result.done) {
//   console.log(result.value); // 1 3 5 7 9
//   result = iter.next();
// }


function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;

}

const iter = makeRangeIterator(1, 20, 3);

let result = iter.next();

while (!result.done) {
    console.log(result.value); // 1 3 5 7 9
    result = iter.next();
}