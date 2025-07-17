const mongoose = require('mongoose')
const { Schema } = mongoose;


const userSchema = new Schema(
    {
    // _id: {
    //     type: String
    // }, 
    firstName: {
        type: String,
        required : true,
        minLength: 3,
        maxLength: 30
    },
    lastName: {
        type: String,
        minLength: 3,
        maxLength: 30
    },
    email : {
        type: String,
        unique: true,
        index: true,
        required: true,
        lowercase: true,
        trim: true

    },
    password: {
        type: String,
        required: true,
        
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender data is not valid");
        }
      },
    },
    photoURL : {
        type: String,
        default: "IMAGE URL"
    },

    skills: {
        type: [String]
    },
},{
  collection: 'student',
  timestamps: true
}
)

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}

