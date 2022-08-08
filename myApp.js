let express = require('express');
let app = express();
// We recommend you to use the Node global variable __dirname to calculate the path like this: const absolutePath = __dirname + relativePath/file.ext  

console.log("Hello World");

app.get('/', (req, res) => {
    //res.send("Hello Express");
    res.sendFile(__dirname + '/views/index.html')
});

app.use(express.static(__dirname + '/public'));




































 module.exports = app;
