const express = require('express');

const app = express();

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Cameron:Akimbo96@react-blog.7wsyc.mongodb.net/Blog?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() =>console.log('DB connected')).catch(err => console.error(err));

app.get('/', (req, res)=>{
    res.send('hello world')
});



app.listen(5000);

