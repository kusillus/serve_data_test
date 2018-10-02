const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {
        type: String,
        required: false,
        max: 100
    }
});

// export model
module.exports = mongoose.model('Product', ProductSchema);