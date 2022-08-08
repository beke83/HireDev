const cookieSession =  require('cookie-session');
const express = require('express'); //step 1
const passport = require('passport'); //5: require the passport module
const passportSetup = require('./passport');
const cors = require('cors');
const authRoute =  require("./routes/auth");
const app = express(); // step 2: initialize express instance

//4: set up the cookieSession 
app.use(cookieSession(
    {name: "session", keys: ["devhire"], maxAge: 24 * 60 * 60 * 100}
));

//6: initialze passport library
app.use(passport.initialize());

//7: use the passport session
app.use(passport.session());

//8: use cors 
//it lets us send sessions through our client server requests
app.use(cors({
    origin: 'https://localhost:3000',
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));

//9
app.use("/auth", authRoute);

//3: listen on the server
app.listen("5000", () => {
    console.log("Server running at http://localhost:5000");
});



//to run in the terminal use "node index.js" command.