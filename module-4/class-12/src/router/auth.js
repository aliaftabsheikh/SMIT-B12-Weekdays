const express = require('express');
const appRouter = express.Router()
const { User } = require('../models/user')
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require("jsonwebtoken");

appRouter.post('/login', async(req, res)=>{
    res.send("Login Successful")
})

appRouter.post('/signup', async(req, res)=>{
      try {
        const { firstName, lastName, email, password } = req.body;


        if (!firstName || !lastName) {
            throw new Error("Name not found !")
        } else if (!validator.isEmail(email)) {
            throw new Error("Invalid Email !")
        } else if (!validator.isStrongPassword(password)) {
            throw new Error("Type a Strong password !")
        }


        const passwordHashed = await bcrypt.hash(password, 10);

        console.log("HELLO --->", passwordHashed);


        const user = await User({
                    firstName,
                    lastName,
                    email,
                    password: passwordHashed
                })

        user.save()

        const token = await jwt.sign({id: user._id}, "Ali@321", {expiresIn: '1d'})

         res.cookie("token", token, {
            expires:  new Date(Date.now() + 60 * 10000), // 10 minute
        })

        res.send('User Added Successfully ! ')
       


    } catch (error) {
        res.status(400).send("Error:" + error.message)
    }
})

appRouter.post('/logout', async(req, res)=>{
    res.send("Logout Successful")
})


module.exports = {
    appRouter
}