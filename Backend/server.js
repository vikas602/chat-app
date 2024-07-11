const app = require('./app');
const dotenv = require("dotenv");
const mongoose= require("mongoose");
dotenv.config({path: "./config.env"});

process.on("uncaughtException", (err)=>{
    console.log(err);
    process.exit(1);
});
process.on("unhandledRejection", (err)=>{
    console.log(err);
    server.close(()=>{
        process.exit(1);
    })
})
const DB= process.env.DBURI;
console.log(DB);
mongoose.connect(DB).then((con)=>{
    console.log("DB connection is successful");
}).catch((err)=>{
    console.log(err);
})
const http = require('http');

const server = http.createServer(app);
const port = process.env.PORT || 8000;
server.listen(port, console.log(port));