var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog');

var blogSchema = new mongoose.Schema({
    content: {type: String, unique:true}, // unique 保证数据的唯一，但有时候不管用
    date: String
}, {collection: 'post'});

var post = mongoose.model('post', blogSchema);

module.exports = post;