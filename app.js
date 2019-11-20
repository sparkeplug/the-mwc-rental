var express = require("express");
var path = require("path");
var cors = require("cors");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var ownerRouter = require("./routes/owner");

var app = express();

app.use(cors());
app.use(logger("dev"));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build'));
        
    });
}

app.use("/api/owner", ownerRouter);

module.exports = app;

// "start": "node ./bin/www"
