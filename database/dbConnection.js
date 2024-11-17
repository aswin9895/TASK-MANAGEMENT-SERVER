const mongoose = require('mongoose')

const connetionString = process.env.DBCONNECTIONSTRING

mongoose.connect(connetionString).then(res => {
    console.log("Connected to mongodb");
}).catch(err => {
    console.log("mongodb connection failed");
    console.log(err);
})