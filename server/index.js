const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { User } = require('./models/user');
const { auth } = require('./middleware/auth');
const config = require('./config/key')

mongoose.connect(config.mongoURI,
{useNewUrlParser: true}).then(() =>console.log('DB Connected'))
                        .catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/product', require('./routes/product'));


//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));
//test
app.get("/api/users/auth", auth, (req,res) =>{
    res.status(200).json({
        _id:req._id,
        isAuth: true,
        isAdmin: req.user.role === 0 ? false : true, //new
        email:req.user.email, 
        name: req.user.name,
        lastname:req.user.lastname,
        role: req.user.role,
        cart: req.user.cart,//new
        history: req.user.history//new

    })
  
})

app.post('/api/users/register', (req, res)=>
{
    const user = new User(req.body);

    user.save((err, doc) => {
        if(err) return res.json({ success: false, err });
         res.status(200).json({
            success:true,
            userDate: doc
        });
    });

});
app.post('/api/users/login', (req, res) => {
    //find the email
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user)
        return res.json({
            loginSuccess: false,
            message: "Auth failed, email not found"
        });

        //compare password
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch){
                return res.json ({ loginSuccess: false, message: "wrong password"});
            }
        });

        //generate token
        user.generateToken((err, user) =>{
            if(err) return res.status(400).send(err);
            res.cookie("x_auth", user.token)
               .status(200)
               .json({
                   loginSuccess: true
               });
        });
    });
});

app.get("/api/users/logout", auth, (req,res) =>{
    User.findByIdAndUpdate({_id: req.user._id}, { token: ""}, (err, doc)=>{
        if(err) return res.json({ success: false, err })
        return res.status(200).send({
            success: true
        })
    })
})

app.get('/api/users/addToCart', auth, (req, res) => {
    User.findOne({ _id: req.user._id }, (err, userInfo) => {
        let duplicate = false;
        console.log(userInfo)
        userInfo.cart.forEach((item) => {
            if (item.id == req.query.productId) {
                duplicate = true;
            }    })
        if (duplicate) {
            User.findOneAndUpdate(
                { _id: req.user._id, "cart.id": req.query.productId },
                { $inc: { "cart.$.quantity": 1 } },
                { new: true },
                () => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.cart)
                }      )
        } else {
            User.findOneAndUpdate(
                { _id: req.user._id },
                {
                    $push: {
                        cart: {
                            id: req.query.productId,
                            quantity: 1,
                            date: Date.now()
                        }  }    },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.cart)
                }
            )
        }
    })
});


const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});

