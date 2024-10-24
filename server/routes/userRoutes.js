const express = require('express');
const router = express.Router();
const User = require('../model/userModel');
const bycrpt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleware =  require('../middleware/authMiddleware');

router.post('/register', async (req,res) => {
    // const newUser = await new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password 
    // });
    

    try{
        //check the same use preent or not
        const userExists = await User.findOne({email: req.body.email});

        if(userExists)
        {
            res.status(400).send({
                success: false,
                message: "User already exists"
            })
            return;
        }

        //unique salt of dcrpt
        const salt = await bycrpt.genSalt(10);
        const hashPasswod = await bycrpt.hash(req.body.password , salt);
        req.body.password = hashPasswod;

        const newUser = await new User(req.body);
        await newUser.save();

        //tell end user user is created

        res.status(200).send({
            success: true,
            message: "User created successfully"
        })
        return;
    } catch(err){
        console.error(err);
        res.status(500).send({
            success: false,
            message: err
        })
    }
});

//user --> admin, user

try{
router.post('/login', async (req,res) => {
    //username --> eamil
    //password --->hashed

    const user = await User.findOne({email: req.body.email});
    // console.log(user);
    
    if(!user){
        res.status(400).send({
            success: false,
            message: "user does not exists"
        });
        return;
    }
    
    const currentUsrPassword = await user.password;
    
    const validpassword = await bycrpt.compare(req.body.password, currentUsrPassword);
    if(!validpassword){
        res.status(400).send({
            success: false,
            message: "password not correct"
        });
        return;
    }
    //create a token  jwt.sign(token, secret key, timer);
    const token = jwt.sign({userId: user._id}, "bookMyShow_BMS", {
        expiresIn:"1d",
    });

    res.status(200).send({
        success: true,
        message: "loged in",
        token: token
    });

});
} catch(err){
    res.status(500).send({
      success: false,
      message: err
    });
}

//here always see that the token
router.get('/get-current-user', authMiddleware, async (req, res) => { 
    //tell the server if the token is valid or not and who is user is
    
    // const user = await User.findById(req.body.userId).select("-password -email");
    const user = await User.findById(req.body.userId).select("-password");

    res.status(202).send({
        success: true,
        message: 'you are authorised',
        data: user
    })


});
module.exports = router;