const express = require('express');
const { connectToDB } = require('../config/database');
const { User } = require('./models/user');
const validator = require('validator')
const bcrypt = require('bcrypt');



const app = express()
app.use(express.json())



app.get('/getAllUsers', async (req, res) => {
    try {
        const user = await User.find({})
        res.send(user)

    } catch (error) {
        res.status(400).send("Error: " + error.message)
    }
})


app.post('/signup', async (req, res) => {
    try {

         const {firstName, lastName, email, password} = req.body

        // 1st step

        if(!firstName || !lastName){
            throw new Error("Name not found !")
        }else if(!validator.isEmail(email)){
            throw new Error("Invalid Email !")
        }else if(!validator.isStrongPassword(password)){
             throw new Error("Type a Strong password !")
        }

        //2nd step


        const passwordHashed = await bcrypt.hash(password, 10)
        console.log(passwordHashed)

       

        const user = await User({
            firstName,
            lastName,
            email,
            password: passwordHashed
        })
        user.save()


        res.send("User Added Successfully !")
    } catch (error) {
        res.status(400).send("Error: " + error.message)
    }
})


app.post('/login', async(req, res)=>{
try {
   const {email, password} = req.body

   const user = await User.findOne({email: email})

   console.log(user.password);
   

   if(!user){
        throw new Error("Invalid Credentials !")
   }

//    Return True/False

   const isValidPassword = await bcrypt.compare(password, user.password)

   if(isValidPassword){
    res.send("Login Successful")
   }else{
    throw new Error("Incorrect Credentials !")
   }
   
} catch (error) {
    res.status(400).send("Error: " + error.message)
}
})



app.patch('/user/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const data = req.body

        const user = await User.findByIdAndUpdate({ _id: id }, data, { returnDocument: 'after', runValidators: true })

        res.send("User Updated Successfully" + user)
    } catch (error) {
        res.status(400).send("Error: " + error.message)

    }
})




connectToDB().then(() => {
    console.log("Successfully connected to the Databse")
}).catch(() => {
    console.log("Database not connected ");

})

app.listen(3000, () => {
    console.log("Server is listening on port 3000 !");
})