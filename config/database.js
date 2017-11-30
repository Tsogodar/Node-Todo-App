const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let connection=mongoose.connect('mongodb://localhost:27017/todoApp', {
    useMongoClient: true
});

if(connection){
    console.log('Connect with Mongo');
}

module.exports=connection;