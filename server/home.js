const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var jwt = require('express-jwt');
var cors = require('cors')

const UserRouter = require('./src/user/user.route'); // user

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://https://cloud.mongodb.com/v2/5b04effec0c6e3710661dbe6#clusters:27017/chat');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log('koneksi berhasil ke mongodb');
});

//\\\


//for customer
app.get('/', (req, res) => res.send('Hello World!'));
app.use(UserRouter);

app.listen(80, () => console.log('Example app listening on port 3000!'));