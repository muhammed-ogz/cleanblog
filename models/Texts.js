const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title : String,
    message : String,
    dateCreated : {
        type : Date,
        default : Date.now,
    }
});

const Text = mongoose.model('Text',BlogSchema);

module.exports = Text;