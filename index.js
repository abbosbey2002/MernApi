const express=require("express");
const connectDb=require("./config/db");
require("dotenv").config()

connectDb()


const app=express()

// body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/mernProduct", require("./routes/mernAppRoutes"))
 


const PORT=process.env.PORT || 5000

app.listen(PORT, console.log(`server running ${PORT}`))