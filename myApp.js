let express = require('express');
let app = express();
// We recommend you to use the Node global variable __dirname to calculate the path like this: const absolutePath = __dirname + relativePath/file.ext  

console.log("Hello World");

app.get('/', (req, res) => {
    //res.send("Hello Express");
    res.sendFile(__dirname + '/views/index.html')
});

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get('/json', (req, res) => {
    res.json({"message": "Hello json"});
});




































 module.exports = app;
