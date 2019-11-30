const express = require('express');
const router = express.Router();

// app.use('/', function(req, res){
//     res.render('default/index');
// });
router.get('/', function(req, res){
    res.render('default/index');
});

module.exports=router;