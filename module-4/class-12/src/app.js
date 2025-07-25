const express = require('express');

require('dotenv').config();


const { connectToDB } = require('./config/database');
const { appRouter } = require('./router/auth');
const { userRouter } = require('./router/user');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true ,// Allow cookies to be sent with requests
}))



app.use('/auth', appRouter)
app.use('/user', userRouter)






console.log("SECRET_KEY ",process.env.SECRET_KEY); // Accessing the secret key from .env file

 
connectToDB()
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});