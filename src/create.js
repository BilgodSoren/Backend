const http = require("http")

const myServer = http.createServer((req, res)=>{
    console.log("New Request");
    res.end("Hello World");
});

myServer.listen(8000, () => console.log("Server started"));


