const express = require('express');
const { connectToDB } = require('./config/database');
const { User } = require('./models/user');
const bcrypt = require('bcrypt');
const validator = require('validator');
const cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken");
const { userAuth } = require('./middleware/auth');


const app = express();

app.use(express.json());
app.use(cookieParser())


app.post('/signup', async (req, res) => {
    try {

        const { firstName, lastName, email, password } = req.body

        // 1st step

        if (!firstName || !lastName) {
            throw new Error("Name not found !")
        } else if (!validator.isEmail(email)) {
            throw new Error("Invalid Email !")
        } else if (!validator.isStrongPassword(password)) {
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

        const token = await jwt.sign({ id: user._id }, "Ali@321", {expiresIn: "1d"});


        res.cookie("token", token)
        res.send("User Added Successfully !")
    } catch (error) {
        res.status(400).send("Error: " + error.message)
    }
})


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        const {token} = req.cookies


        const user = await User.findOne({ email: email })

        //    console.log(user.password);


        if (!user) {
            throw new Error("Invalid Credentials !")
        }

        //    Return True/False

        const isPasswordValid = await bcrypt.compare(password, user.password);


        if (isPasswordValid) {
          
            res.send("Login Successful")
        } else {
            throw new Error("Incorrect Credentials !")
        }

    } catch (error) {
        res.status(400).send("Error: " + error.message)
    }
})


app.get('/profile', userAuth, async (req, res) => {
    try {

        // const {token} = req.cookies
        // console.log(token);

        // if (!token) {
        //     return res.status(401).json("Invalid Token !");
        // }

        // const decodeObj = await jwt.verify(token, "Ali@321");

        // const { id } = decodeObj;

        // const users = await User.findById(id);
        const users = req.user;
        res.json(users);
    } catch (error) {
        res.status(400).json("Error: " + error.message);
    }
})


app.get('/user', userAuth, async (req, res) => {
    try {
        // const {token} = req.cookies

        // if (!token) {
        //     return res.status(401).json("Invalid Token !");
        // }

        // const decodeObj = await jwt.verify(token, "Ali@321");

        // const { id } = decodeObj;

        // const users = await User.findById(id);
        const users = req.user;
        res.json(users);
    } catch (error) {
        res.status(400).json("Error: " + error.message);
    }
})





connectToDB().then(() => {
    console.log("Connected to the database successfully!");
}).catch(err => {
    console.error("Database connection failed:", err);
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000 !");
});
