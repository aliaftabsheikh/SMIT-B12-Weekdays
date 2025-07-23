const express = require('express');
const userRouter = express.Router()


userRouter.get('/getUser', async(req, res)=>{
    res.send("Get User Successful")
})
userRouter.get('/getAllUsers', async(req, res)=>{
    res.send("Get All Users Successful")
})

userRouter.post('/addUser',  async (req, res)=>{
    res.send("Add User Successful")
})
userRouter.patch('/editUser',  async (req, res)=>{
    res.send("Edit User Successful")
})
userRouter.post('/deleteUser',  async (req, res)=>{
    res.send("Delete User Successful")
})


module.exports = {
    userRouter
}