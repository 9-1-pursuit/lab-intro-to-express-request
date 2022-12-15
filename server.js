//IMPORTS
const app = require("./app.js");

require("dotenv").config();

//VARABLE ASSIGNMENTS
const PORT = process.env.PORT;

//LISTENING
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
