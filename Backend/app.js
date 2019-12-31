const express = require('express');
const cors = require('cors');//multiple browser integration 
const fs= require('fs')//file system
const bodyParser = require('body-parser');
const auth = require('./authentication/auth') 

const mongoose = require('./Mongoose/mongoose')//bd
const multer = require('multer')//for image 
const path= require('path')
const app = express();



app.use(cors());
app.use(express.urlencoded({ extended: false }));   

app.use(bodyParser.json());
const User = require('./Models/User');
const Image = require('./Models/Image');


// app.get('/login',(req,res)=>{
// res.send(req.params);
// });

app.post("/login", async function(req, res){
    const user = await User.checkCrediantialsDb(req.body.email,req.body.password)
    const token = await user.generateAuthToken()
    console.log(token)
    res.send({
        userdata:user})
   })

const registerData = (req, res) => {
    data={
        'imageupload': req.body.imageupload,
        'userfname': req.body.userfname,
        'userlname': req.body.username,
        'email': req.body.email,
        'username': req.body.username,
        'password': req.body.password,
        'passwordconf': req.body.passwordconf,
        'usertype':"user"
    }  //save data from form.
    var mydata = new User(data);

    mydata.save().then(function (data) {    //if save then 
                                            //alert(Success)
        res.send(data);                     //after save send data
 }).catch(function (e) {                    //or if error goes to catch (bad request)
      res.send(e);
    

    });
    console.log(req.body);

}
//------------------------------------------

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/Photos')));
var storage = multer.diskStorage({
    destination: "./Photos/", //this is folder name
    filename: function(req, file, callback) {

        
console.log(file) 
       const ext = path.extname(file.originalname); //.js,.pdf etc extenstion linchha
        callback(null, "Image" + Date.now() + ext); //renaming file
    }
});
var imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|JPG|PNG)$/)) { return cb(("You can upload only image files!"), false); }
    cb(null, true);
};

var upload = multer({
    storage: storage,
    fileFilter: imageFileFilter
}).array("userPhoto",2);

//this will upload the pictures in a public folder of users and products
// app.post('/HikeAndSee/uploadpic', uploadHike.single('imageFile'),
//  (req, res) => {
    
// });
// app.post('/HikeAndSee/uploadpic', upload.single('imageFile'), (req, res) => {
    // res.send(req.file)
     // res.statusCode = 200;
     // res.setHeader('Content-Type', 'application/json');
     // res.json(req.file);
//  });

 app.post('/uploadpic', (req, res, next) => {
    upload(req, res, function (err) {
      if (err) {
        // This is a good practice when you want to handle your errors differently
  
        return
      }
  
      // Everything went fine 
    })
  })

app.get('/HikeAndSee/me', auth, function(req, res) {
    res.send(req.user);
});


//---------------------------------------
app.post('/register', registerData);

app.listen(9000,()=>{
    // console.log("Pass");   
}); //port


//--------------------


app.post('/registerimage', (req, res) => {
    console.log(req.body);
    var mydata = new Image(req.body);
    mydata.save().then(function (data) {
        //alert(Success)
        res.send(data);
 }).catch(function (e) {
      res.send(e);
    

    });
});




/*
chai=validation
mocha=testing 
*/ 

// babel