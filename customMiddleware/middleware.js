
const myMiddleware = function (req, res, next) {
    console.log('Custom middleware is running');
    req.customProperty= 'This is the custom property';

    //calling the next() to pass control to another function
    next();
}

module.exports= myMiddleware
