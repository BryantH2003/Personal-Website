const express = require("express");
const path = require("path");
const app  = express();

app.get("/helloworld", function(req,res) {
    res.status(200);
    res.send("Hello World");
});

const staticFilePath = path.join(__dirname, "static");
const staticHandler = express.static(staticFilePath);
app.use("/", staticHandler);

app.listen(8080, function() {
    console.log("The server has started on port 8080");
});