const dotenv = require('dotenv');
const express = require('express');
const theSmarts = require('./link-controller');

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));


const baseurl = process.env.BASE_URL;

theSmarts.config({
    baseUrl: baseurl
});

app.get('/link/:link', theSmarts.handleVisitor);
app.post('/create', theSmarts.handleCreation);

app.use(express.static('public'));

app.listen(3000);