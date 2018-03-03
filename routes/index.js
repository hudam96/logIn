var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://login:123123@ds235328.mlab.com:35328/login').then(function(){
});
var Login = mongoose.model('Login', {
    name:String,
    pass:String
});


/* GET home page. */

router.get('/index', function(req, res) {
    res.render('indexx')
});
router.post('/api/login', function(req , res){
    var newLogin = req.param('lo');
    var dataBase = new Login(newLogin);
    dataBase.save() ;
})
router.get('/api/login', function(req, res) {
    Login.find(function(error,lo){
        res.json(lo)
    })
});
router.get('/dataBase', function(req ,res){
    res.render('dataBase')
});
module.exports = router;
