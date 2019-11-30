const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
// template html with js
const hbs = require('express-handlebars');

// const PORT = 3000;
// database
const {mongodbURL, PORT} = require('./config/configuration');
mongoose.connect(mongodbURL,{ useNewUrlParser: true })
.then(function(response){
    console.log("Mongdb connected successfully");
})
.catch(function(err){
    console.log("Database connection failed");
});
// configure express
// express.json and urlencoded used for put and post request to database
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// access the public fills directory
app.use(express.static(path.join(__dirname, 'public')));


// setup engine
app.engine('handlebars', hbs({defaultLayout: 'default'}));
// app.engine('handlebars',function hbs(){
//     {
//         defaultLayout: 'default'
//     }
// });
app.set('view engine', 'handlebars');

// app.use('/', function(req, res){
//     res.send("welcome to cms APP");
// });
const defaultroutes = require('./routes/defaultroutes');
app.use('/',defaultroutes);
// app.use('/', (req, res) => {
//     res.render('default/index');
//  });

app.listen(PORT, function(){
    console.log(`server running on ${PORT}`);
});

// so we store name => data
// app.set(name, data)
// we call the data using 
// app.get(name)

// app.use register middleware and callback