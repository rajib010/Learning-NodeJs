const fs = require('fs');
//asynchronous reads/write the file but doesnot return in a variable, but instead the result is handled in a call back function

//convert the data into string before writing or reading

//1.Writing into the file

// fs.writeFile("text.txt", "This is a asynchronous text in the file", (err) => { });

// fs.writeFileSync("text.txt","This is a synchornours text in the file");


//2. Reading from the file

//synchronous
// const result=fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);


//asynchronous
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// })

//3.Append in the file

// fs.appendFileSync("./text.txt",'\nThis is the new line');

//4.Delete a file

// fs.unlink("./random.txt")


//5.Copy content of one file to another

// fs.copyFile("./source.txt","./destination.txt")


//6.See stats of a file

// console.log(fs.statSync("./contacts.txt"));


//7.Make directory

// fs.mkdir("my-docs/a/b",{recursive:true})