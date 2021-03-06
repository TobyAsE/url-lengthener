const dotenv = require('dotenv');
const express = require('express');
const theSmarts = require('./link-controller');

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));


const baseUrl = process.env.BASE_URL;

const connectionString = `mongodb://${process.env.MONGO_INITDB_USERNAME}:${process.env.MONGO_INITDB_PASSWORD}@127.0.0.1:27017/${process.env.MONGO_INITDB_DATABASE}`;

theSmarts.config({
    baseUrl,
    connectionString,
});

app.get('/link/:link', theSmarts.handleVisitor);
app.post('/create', theSmarts.handleCreation);

app.use(express.static('public'));

app.listen(3000);