//require mongoose
var mongoose = require("mongoose");
//create schema class
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	//body is a require string
	body: {
		type: String,
	},
	//link is a required string
	date: {
		type: String,
	}
});

//create the article model with the article schema
var Comment = mongoose.model("Comment", CommentSchema);

//export the model
module.exports = Comment;