const express = require('express');
const appRouter = express.Router()
const { User } = require('../models/user')
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require("jsonwebtoken");

appRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            throw new Error('User not found signup first !')
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        
        if (isPasswordValid) {
            const token = await jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' },)

            res.cookie("token", token, {
                expires: new Date(Date.now() + 60 * 10000), // 10 minute
            })
            res.send(user)
        } else {
            throw new Error("Invalid Credentials !")
        }

    } catch (error) {
        res.status(400).send("Error: " + error.message)
    }
})

appRouter.post('/signup', async (req, res) => {
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

        const token = await jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' })

        res.cookie("token", token, {
            expires: new Date(Date.now() + 60 * 10000), // 10 minute
        })

        res.send('User Added Successfully ! ')



    } catch (error) {
        res.status(400).send("Error:" + error.message)
    }
})

appRouter.post('/logout', async (req, res) => {
    res.cookie("token", null, {
        expires: new Date(Date.now() * 0),
    })

    res.send("Logout Successfully !")
})


module.exports = {
    appRouter
}