const express = require('express');
const { connectToDB } = require('./config/database');
const { User } = require('./models/user');
const { Todo } = require('./models/todo');
const cors = require('cors');
const bcrypt = require("bcrypt");

const validator = require("validator");




const whitelist = ['http://localhost:5173', 'http://localhost:5174'];

// Step 2: Set up cors options
const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin like mobile apps or curl
    if (!origin) return callback(null, true);
    if (whitelist.includes(origin)) {
      callback(null, true); // origin allowed
    } else {
      callback(new Error('Not allowed by CORS')); // origin not allowed
    }
  }
};

const app = express()

app.use(express.json())
app.use(cors(whitelist))


app.post('/signup', async (req, res) => {
  try {
   

    const { firstName, lastName, email, password } = req.body;

      if (!firstName || !lastName) {
        throw new Error("Name is not valid!");
      } else if (!validator.isEmail(email)) {
        throw new Error("Email is not valid!");
      } else if (!validator.isStrongPassword(password)) {
        throw new Error("Please enter a strong Password!");
      }
    

    // Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    //   Creating a new instance of the User model
    const user = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    await user.save();
    res.send("User Added successfully!");
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }

})


app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      res.send("Login Successful!!!");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});


app.patch('/editStudent', async (req, res) => {
    try {
        const data = req.body

        const id = req.body._id

        const user = await User.findByIdAndUpdate({ _id: id }, data, { returnDocument: 'after' })
        res.send("User Updated" + user)
    } catch (error) {
        res.status(400).send("Something went wrong !" + error.message)
    }


})



// ================================


app.get('/getTodos', async (req, res) => {
    try {
        const todo = await Todo.find({})

        res.send(todo)

    } catch (error) {
        res.status(400).send("Something went wrong !" + error.message)
    }
})


app.post('/addTodos', async (req, res) => {
    try {
        const data = req.body
        console.log(data);

        const todo = await Todo(data)

        todo.save()

        res.send(todo)
    } catch (error) {
        res.status(400).send("Something went wrong !" + error.message)
    }
})



app.patch('/editTodo/:id', async (req, res) => {
    try {
        const data = req.body

        const id = req.params.id

        const todo = await Todo.findByIdAndUpdate({ _id: id }, data, { returnDocument: 'after' })
        res.send(todo)
    } catch (error) {
        res.status(400).send("Something went wrong !" + error.message)
    }


})


app.delete('/deleteTodo/:id', async (req, res) => {
    try {
        const id = req.params.id

        const todo = await Todo.findByIdAndDelete(id)
        res.send(todo)

    } catch (error) {
        res.status(400).send("Something went wrong !" + error.message)
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