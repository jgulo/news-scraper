//require mongoose
var mongoose = require("mongoose");
//create schema class
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	//title is a require string
	title: {
		type: String,
		required: true
	},
	//link is a required string
	link: {
		type: String,
		required: true
	},
  // This only saves one note's ObjectId, ref refers to the Note model
	note: {
	    type: Schema.Types.ObjectId,
	    ref: "Note"
	}
});

//create the article model with the article schema
var Article = mongoose.model("Article", ArticleSchema);

//export the model
module.exports = Article;