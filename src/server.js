const dotenv = require('dotenv');
const express = require('express');
const nunjucks = require('nunjucks');
const mongoose = require('mongoose');
const theSmarts = require('./link-controller');

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));

const baseUrl = process.env.BASE_URL;

theSmarts.init({
    baseUrl,
});

const connectionString = `mongodb://127.0.0.1:27017/urllengthener`;
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error: '));


app.get('/link/:link', theSmarts.handleVisitor);
app.post('/create', theSmarts.handleCreation);

app.use(express.static('public'));

nunjucks.configure('src/views',{
    express: app,
    autoscape: true,
    noCache: false,
    watch: true,
}); 
app.set('view engine', 'njk');

app.get("/",(req,res)=>{
    res.render('index',{});
});

app.listen(3000);