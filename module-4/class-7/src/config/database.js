const mongoose = require('mongoose');

async function connectToDB(){
    // Connection of Clusters 
    await mongoose.connect("mongodb+srv://Database:68xkSmmGue8Faisd@cluster0.51l7ww2.mongodb.net/Saylani")
}

module.exports = {
    connectToDB
}