var mongoose = require('mongoose');

var options = {
    user: 'myTester',
    pass: 'xyz123',
    useNewUrlParser: true
}
mongoose.connect('mongodb://localhost:27017/ecommercedb', options);

var db = mongoose.connection;
db.on('open', function(){
    console.log('We are connected!!');
})

db.on('error', function(){
    console.log('There is some error!');
})

db.close();