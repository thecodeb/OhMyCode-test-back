// Requires

const mongoose = require('mongoose');

/**
 * Method for connect with MongoDB Atlas
 * @author Brian "thecodeb"
 */

mongoose.connect("mongodb+srv://dbmaster:admindbmaster@cluster0.x5yfs.mongodb.net/omctest?retryWrites=true&w=majority", {
        useNewUrlParser: true
    })
    .then(db => console.log("DB is connected"))
    .catch(err => console.log(err));