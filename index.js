const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

mongoose.connect('mongodb+srv://Cameron:Akimbo96@react-blog.7wsyc.mongodb.net/Blog?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() =>console.log('DB connected')).catch(err => console.error(err));

// app.get('/', (req, res)=>{
//     res.send('hello world')
// });

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());






app.listen(5000);

