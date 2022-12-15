const app = require("./app.js");

//CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

//Listen
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
