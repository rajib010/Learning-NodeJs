const fs = require('fs');
const http = require('http');

const myServer = http.createServer((req, res) => {
    // Keeping a log of received requests in file
    const log = `${Date.now()}: ${req.url} New Request Received \n`;
    console.log("Logging request:", log);

    fs.appendFile("./HttpServer/log.txt", log, (err) => {
        if (err) {
            console.error("Failed to write to log file:", err);
        } else {
            console.log("Log entry written successfully");
        }
    });

    // Handle requests
    switch (req.url) {
        case "/":
            console.log("Serving home page");
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("Home page");
            break;
        case "/about":
            console.log("Serving about page");
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("Welcome to the about page");
            break;
        default:
            console.log("Serving 404 page");
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end("404 Not Found");
            break;
    }
});

myServer.listen(8000, () => {
    console.log("Server started well on port 8000");
});
