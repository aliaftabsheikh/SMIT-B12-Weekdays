const mongoose = require('mongoose')
const { Schema } = mongoose;


const userSchema = new Schema(
    {
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email : {
        type: String
    },
    password: {
        type: String
    }
},{
  collection: 'student'
}
)

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}

