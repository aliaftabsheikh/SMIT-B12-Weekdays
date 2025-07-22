const express = require('express');
const { connectToDB } = require('./config/database');
const cookieParser = require('cookie-parser')

const appRouter = require('./router/auth');
const profileRouter = require('./router/profile');

const app = express();


app.use(express.json());
app.use(cookieParser())


app.use('/', appRouter)
app.use('/profile', profileRouter)



connectToDB()
    .then(() => {
        console.log('Connected to Database');
    })
    .catch((error) => {
        console.error(' Database not connected');
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})