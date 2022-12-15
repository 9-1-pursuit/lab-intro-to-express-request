const app = require("./app.js");
require("dotenv").config();
const PORT = process.env.PORT || 3300;

app.listen(8888, () => {
  console.log(`Listening on Port ${PORT}`);
});
