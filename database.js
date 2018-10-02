// Setup mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost/demo';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB)
    .then(db => console.log('DB is connected'))
    .catch(err => console.err(err));
mongoose.Promise = global.Promise;

module.exports = mongoose;