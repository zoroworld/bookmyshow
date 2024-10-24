const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dvurl = 'mongodb+srv://adminrole:adminrole@cluster0.jwbjhjn.mongodb.net/moviesdb?retryWrites=true&w=majority&appName=Cluster0';
const userRouter = require('./routes/userRoutes');

//port is given
const port = 3000;

//connect with mongoose----------------
mongoose.connect(dvurl).then(() => {
    console.log("connect with db");
}).catch((err) => {
    console.log(`message not get ${err}`);
});



app.use(express.json());
app.use('/api/users', userRouter);


// const movies = [
//     {id:1 , name:"abc"},
//     {id:2 , name:"def"},
//     {id:3 , name:"ghi"},
// ]


// let moviesSchema = mongoose.Schema({
//     name: {
//         type: String,
//         require: true
//     },
//     genre: {
//         type: String,
//         require: true
//     }
// });


//use await and async in the code-------
app.put('/api/users', async (req,res) => {
    let users = await userModel.find();
    res.json(users);
});

app.listen(port, () => {
    console.log(`server start in  ${port}`);
});