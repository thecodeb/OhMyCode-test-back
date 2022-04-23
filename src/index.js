// Requires

const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const cors = require('cors');

// Initialitations

const app = express();
require('./database');

// Settings


app.set('port', process.env.PORT || 3000);

// Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Global variables

// Routes

app.use('/api', require('./routes/todos'));
app.use('/api', require('./routes/users'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Static files

app.use(express.static(path.join(__dirname, 'public')));

// Server init

app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
})