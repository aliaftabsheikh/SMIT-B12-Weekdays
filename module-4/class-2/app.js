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
const cors = require('cors');



const whitelist = ['http://localhost:5173', 'http://localhost:5174'];

// Step 2: Set up cors options
const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin like mobile apps or curl
    if (!origin) return callback(null, true);
    if (whitelist.includes(origin)) {
      callback(null, true); // origin allowed
    } else {
      callback(new Error('Not allowed by CORS')); // origin not allowed
    }
  }
};

// Step 3: Use cors middleware with options
app.use(cors(whitelist));

app.get('/api/users', (req, res) => {
  res.send([
    {
        id: 1,
        name: 'Ali'
    },
    {
        id: 2,
        name: 'Hamza'
    },
    {
      id: 3,
      name: 'Irfan'
    },
    {
      id: 4,
      name: 'Jethanand'
    }


  ])
})

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

