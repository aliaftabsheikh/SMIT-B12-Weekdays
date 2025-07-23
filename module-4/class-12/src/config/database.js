const mongoose = require('mongoose');

async function connectToDB(){
    // Connection of Clusters 
    await mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.51l7ww2.mongodb.net/Saylani`)
}

module.exports = {
    connectToDB
}