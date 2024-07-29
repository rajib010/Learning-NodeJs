const url = require('url');
const http = require('http');

const myserver = http.createServer((req,res)=>{

    // console.log(req.url);
    //true should be given if we want the params also
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

//based on path excluding the other parameters
    switch(myUrl.pathname){
        case "/":
            res.end("home page");
            break;
        case "/about":
            //getting the params into value
            const name = myUrl.query.username;
            res.end(`Hello mr ${name}`);
            break;
        default:
            res.end("404, page not found");
            break;
    }
})


myserver.listen(8001,()=>{
    console.log("The server is running");
})