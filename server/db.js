const mongoose = require("mongoose")

const mongodb_url = process.env.MONGODB_URL

mongoose.connect(mongodb_url)
.then(()=>{
    console.log("mongodb connect")
}).catch(err => console.log(err))