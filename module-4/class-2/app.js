// // BROWSER 

// // Global object

// // window 
// // this
// // self
// // frame

// // Node js 

// // this {}
// // global

// // var global = {abc: 20}
// // globalThis

// // console.log(globalThis)




// // MODULES 

// const {greeting} = require('./abc.js');
// // const { calculateMultiply } = require('./calculate/multiply.js');
// // const {calculateSum} = require('./calculate/sum.js')

// const {calculateSum, calculateMultiply} =require('./calculate')

// const data = require('./data.json')

// // import { greeting } from "./abc.js";
// // import { x, calculateSum, calculateMultiply } from "./sum.js";


// // IIFE Function
// // (function(module, require){

// //   console.log("This is ABC file !")

// // let e = 20
// // function greeting(){
// //     console.log("HELLO")
// // }

// // module.exports = {
// //     greeting,
// //     e
// // }
// // })(module, require)


// // let e = 20






// var name = "Ali";

// let a = 10
// var b = 20

// calculateSum(a, b)
// calculateMultiply(a, b)
// greeting()

// console.log(data);

// // console.log("X from sum file -->", calculate.a);



const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('First server created !')
})

app.get('/dashboard', (req, res) => {
  res.send('This is dashboard route !')
})

app.get('/login', (req, res)=>{
    res.send('<h1>This is login page</h1> !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

