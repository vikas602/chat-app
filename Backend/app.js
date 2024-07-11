const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require('helmet');
const mongosanitize = require('express-mongo-sanitize');
const bodyParser = require('body-parser');
const xss = require('xss');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: "*",
    methods: ["GET", "PATCH", "POST", "DELETE", "PUT"],
    credential: true,

}));

app.use(express.json({limit: "10kb"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(mongosanitize())
if(process.env.NODE_ENV ==="development"){
    app.use(morgan("dev"));
}
const limiter = rateLimit({
    max: 3000,
    windowMs: 60*60*1000,
    message: "Too many request from this IP, Please try again after 1 hour"
})
app.use("/chat", limiter);

// app.use(xss());





module.exports= app

