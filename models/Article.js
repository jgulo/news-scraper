//require mongoose
var mongoose = require("mongoose");
//create schema class
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	//artist
	artist: {
		type: String,
		required: true
	},
	//album
	album: {
		type: String,
		required: true
	},
	//album image
	albumImg: {
		type: String,
		required: true
	},
	//link is a required string
	link: {
		type: String,
		required: true
	},
  // This only saves one note's ObjectId, ref refers to the Note model
	comment: {
	    type: Schema.Types.ObjectId,
	    ref: "Comment"
	}
});

//create the article model with the article schema
var Article = mongoose.model("Article", ArticleSchema);

//export the model
module.exports = Article;