const express = require('express');
const { connectToDB } = require('./config/database');

const {User} = require('./models/user.js')

const app = express()




// app.use('/', (req, res, next)=>{
//         console.log("This is base route")

//     // res.send("This is base route");
    
//     next()
// })

// MIDDLEWARE 
app.use(express.json());

app.post('/signup', async (req, res)=>{
    // console.log("This is signup")


    const user = await User(req.body)

    user.save()


    res.send("User added !");
})

// FIND USER WITH EMAIL

app.post('/findUserWithEmail', async(req, res)=>{
    const email = req.body.email;

   const findByEmail = await User.find({email: email})

   if(findByEmail.length === 0){
    res.status(400).send("User not found!")
   }else{
       res.send("User found")
   }

   const deleteUser = await User.deleteOne({email : findByEmail.email})
   console.log("User Deleted ", deleteUser)

})


app.delete('/deleteById/:id', async(req, res)=>{
    const id = req.params.id

   const deleteUser = await User.deleteOne({_id: id})
   console.log("User Deleted ", deleteUser)

   res.send("User Deleted")

})

// GET ALL DATA

app.get('/getUserData', async(req, res)=>{
    const user = await User.find({})
    // user.save()

    console.log(user)

    res.send(user)
})







connectToDB().then(()=>{
    console.log("Successfully connected to the Databse")
}).catch(()=>{
    console.log("Database not connected ");
    
})


app.listen(3000, ()=>{
    console.log("Server listening on port : 3000");

    
})