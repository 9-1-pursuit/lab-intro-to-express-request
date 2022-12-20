//Dependencies
const app = require("./app.js")


//Configuration
require("dotenv").config()
const PORT = process.env.PORT || 8888

//Port Listener
app.listen(PORT,() =>{
    console.log(`Listening on port ${PORT}`)
})