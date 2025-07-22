const express = require('express');
const { User } = require("../models/user");
const { userAuth } = require('../middleware/auth');

const profileRouter = express.Router()

profileRouter.get('/profile/allProfiles', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send("All users : " + users)
    } catch (error) {
        res.status(400).send("Error:" + error.message)
    }
})



profileRouter.get('/profile/profile', userAuth,  async (req, res) => {
    try {

        // const {token} = req.cookies


        // if(!token){
        //     throw new Error('Token is not valid !')
        // }


        // const decodedObj = await jwt.verify(token , "Ali@321")

        // const {id} = decodedObj

        // const user = await User.findById(id);

        const user = req.user;
        res.status(200).json(user);

           } catch (error) {
        res.status(400).json("Error: " + error.message);
    }
})


module.exports = profileRouter;