const express = require('express')

const app = express()
const port = 3000



// Order of the routes matter a lot

// GET, POST, PUT , DELETE


// Route: '/abc' or '/ac' (the 'b' is optional)
app.use('/abc', (req, res)=>{
    res.send('HELLLLO  !!!!!!!!!')
})

app.use('/test/123', (req, res)=>{
    res.send('This is test route with id')
})

// Handle all requests of HTTP 

app.use('/test', (req, res)=>{
    if(req.method === "GET"){
         res.send('This is Test get route')
    }

    if(req.method === "POST"){
         res.send('This is Test POST route')
    }
    if(req.method === "DELETE"){
         res.send('This is Test DELETE route')
    }
    // res.send('This is test route')
})



// Only handle get request

// app.get('/test', (req, res)=>{
//     res.send('This is Test get route')
// })
// app.post('/test', (req, res)=>{
//     res.send('Database run successfully')
// })

// app.delete('/test', (req, res)=>{
//     res.send('Deleted Successfully !')
// })





app.use('/user', (req, res)=>{
    res.send('This is User route')
})

app.use('/user/:name/:education', (req, res)=>{
    // console.log(req.query)
    console.log("PARAMS ===>",req.params)
    res.send('This is User route')
})



app.use('/', (req, res)=>{
    res.send("SERVER CREATED!!")
})






app.listen(port, ()=>{
    console.log("Server listen on port : ", port)
})