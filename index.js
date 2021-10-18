
const admin = require ('firebase-admin');
const express = require('express');
const cors = require('cors');
let bodyParser = require('body-parser');
const bitbnsApi = require('bitbns');
const cryptoJS = require("crypto-js");
const app = express();
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://cryptosip-e9996.firebaseapp.com"
});

// const db = admin.firestore();
// const docRef = db.collection('users').doc('Raman');

// docRef.set({
//   first: 'Raman',
//   last: 'Dharmshala',
//   born: 1991
// });

//app.get('/hello-world', (req, res) => {
//  return res.status(200).send('Hello World!');
//});

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

// Import routes
let apiRoutes = require("./routes/api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());


// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
   console.log("Running RestHub on port " + port);
});


//exports.app = functions.https.onRequest(app);






//// Import express
//let express = require('express');
//// Import Body parser
//let bodyParser = require('body-parser');
//const firebase = require('firebase');
//const bitbnsApi = require('bitbns');
//const CryptoJS = require("crypto-js");

//const firebaseConfig = {
//  apiKey: "AIzaSyANznhbSaaTC1inBERHfi4czMWE_IN2ZJE",
//  authDomain: "cryptosip-e9996.firebaseapp.com",
//  projectId: "cryptosip-e9996",
//  storageBucket: "cryptosip-e9996.appspot.com",
//  messagingSenderId: "924797748224",
//  appId: "1:924797748224:web:be34f0dbe9d8fce70304e5"
//};
//firebase.initializeApp(firebaseConfig);

//const bitbns = new bitbnsApi({
//      apiKey :  '998DD97FE6C8AAFB1497187937A7899E',
//      apiSecretKey : '4A488BEAA18BA8268178690E33FB3DD3'
//});

//// Import Mongoose
////let mongoose = require('mongoose');
//// Initialise the app
//let app = express();
//app.use(function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  next();
//});
//// Import routes
//let apiRoutes = require("./routes/api-routes");
//// Configure bodyparser to handle post requests
//app.use(bodyParser.urlencoded({
//    extended: true
//}));
//app.use(bodyParser.json());


//// Setup server port
//var port = process.env.PORT || 8080;

//// Send message for default URL
//app.get('/', (req, res) => res.send('Hello World with Express'));

//// Use Api routes in the App
//app.use('/api', apiRoutes);
//// Launch app to listen to specified port
//app.listen(port, function () {
//    console.log("Running RestHub on port " + port);
//});