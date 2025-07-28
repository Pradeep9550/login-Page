const express = require("express")
const cors = require("cors")
const AuthRoutes = require("./routes/auth.routes.js")
const ProfileRoutes = require("./routes/profile.routes.js")
require("dotenv").config();
require("./db.js")

const app = express();
const port = process.env.PORT

app.use(cors());
app.use(express.json())

app.use("/auth", AuthRoutes)
app.use("/profile", ProfileRoutes)

app.listen(port, ()=>{
    console.log(`server running on ${port}`)
})