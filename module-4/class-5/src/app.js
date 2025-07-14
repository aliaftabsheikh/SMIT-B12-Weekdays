const express = require('express');
const { adminAuth } = require('./middleware');

const app = express();
const port = 3000


// app.use('/', (req, res, next)=>{
//     console.log("MAIN ROUTE")
//     next()
//     res.send('Main Route !')
// })

// app.use('/users',
//     [
//         (req, res, next) => {
//             console.log('User route Handler 1')
//             next()
//             // res.send('User DATA !')
//         },
//         (req, res, next) => {
//             console.log('User route Handler 2')
//             next()
//             // res.send('User data route handler 2')
//         },
//         (req, res, next) => {
//             console.log('User route Handler 3')
//              res.send('User data route handler 3')
//             // next()
//         },
//     ]

// )

app.use("/admin", adminAuth)

app.use("/admin/getAllData",(req, res)=>{
        res.send("Data sent !")
  
})

app.use("/admin/deleteData",(req, res)=>{
        res.send("Deleted Data !")
  
})

app.use("/admin/editData",(req, res)=>{
        res.send(" Data Updated!")
})



// app.use("/user/editData" ,(req, res)=>{
//         res.send(" Data Updated!")
// })




app.listen(port, () => {
    console.log("Server listen on port : ", port)
})