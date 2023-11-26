const express = require("express");
const dotenv=require("dotenv");
const morgan=require("morgan");
const bodyparser=require("body-parser");
const path=require("path"); 
const bcrypt=require("bcryptjs");
// const validatePhoneNumber = require('validate-phone-number-node-js');
// const validator = require("email-validator");
const passport = require("passport");
const multer = require("multer");
const XLXS = require("xlsx");
const Excel = require("exceljs");
const ejs = require('ejs');
const session = require('express-session');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");

// mongoose.connect("mongodb+srv://admin:sis_it304@cluster0.7fcnw1p.mongodb.net/?retryWrites=true&w=majority")


const model = require('./Server/Model/model');

const connectDB=require("./Server/Database/connection");

dotenv.config({path : 'config.env'});
const app=express();

const PORT = 8080;

//log request
app.use(morgan('tiny'));

//mongoDB connection
connectDB();

//parser request to body-parsar
app.use(bodyparser.urlencoded({extended : true}))

//set view engine
app.set("view engine", "ejs")

app.use(session({
  secret: 'your-secret-key', // Change this to a secure random key
  resave: false,
  saveUninitialized: true
}));

// app.use(methodOverride("_method"));

//load assets
// app.use('/css',express.static(path.resolve(__dirname,"Assets/css")))
// app.use('/img',express.static(path.resolve(__dirname,"Assets/img")))
// app.use('/js',express.static(path.resolve(__dirname,"Assets/js")))

//load router
app.use('/', require('./Server/Routes/router')); 

//set static paths
app.use(express.static(__dirname + '/Assets'));
// app.set('views', path.join(__dirname, 'views'));
app.use('/Admin',express.static(path.resolve(__dirname + '/views/Admin')));
app.use('/Faculty',express.static(path.resolve(__dirname + '/views/Faculty')));
app.use('/Student',express.static(path.resolve(__dirname + '/views/Student')));


// Admin.plugin(passportLocalMongoose);
// const User = mongoose.model("Admin", Admin);

// // Set up Passport configuration
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// // creating session

// app.use(
// 	session({
// 	  name: "user-session", // Set a unique name for sessions
// 	  secret: "your-secret-key",
// 	  resave: false,
// 	  saveUninitialized: false,
// 	  // You can also specify additional session options here
// 	})
//   );

// app.use(session({
//     secret: 'your-secret-key',
//     resave: false,
//     saveUninitialized: true
// }));

// app.use(require("connect-flash")());

// app.use(passport.initialize());
// app.use(passport.session());


// app.use(passport.initialize());
// app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  // Ensure that this middleware runs before the route where you access req.user._id
app.use(passport.initialize());
app.use(passport.session());


const saltRounds = 10;


app.listen(PORT, ()=> {console.log(`Server is running on http://localhost:${PORT}`)});