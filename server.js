const app = require('./app.js');
const PORT = process.env.PORT || 3000

app.listen(8888, () =>{
    console.log(`Listening on Port ${PORT}`);
});