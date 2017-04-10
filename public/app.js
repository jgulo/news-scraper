// Grab the articles as a json
$.getJSON("/articles", function(data) {

	var totalAlbums = data.length;
	var nthCol = 5;
	var curCol = 1;
	
	var html = "<div class='columns has-text-centered' id='albumRow'>";
 
	while(curCol <= totalAlbums){

		if(curCol%nthCol != 0){
			html += "<div class='column'>";
			html += "<figure class='image is 200x200'>";
			html += "<img src ='" + data[curCol - 1].albumImg +"'>";
			html += "</figure>";
			html += "<p data-id='" + data[curCol - 1]._id + "'><strong>" + data[curCol - 1].album + "</strong><br />by<br/><b>" + data[curCol - 1].artist + "</b></p>";
			html += "</div>";
		} else {
			html += "</div>"
			html += "<div class='columns has-text-centered' id='albumRow'>";
		}
		curCol++;
		console.log("the current column is" + curCol)

	}

	
	$(".container").append(html)
  
});


// // Whenever someone clicks a p tag
// $(document).on("click", "p", function() {
//   // Empty the notes from the note section
//   $("#comments").empty();
//   // Save the id from the p tag
//   var thisId = $(this).attr("data-id");

//   // Now make an ajax call for the Article
//   $.ajax({
//     method: "GET",
//     url: "/articles/" + thisId
//   })
//     // With that done, add the note information to the page
//     .done(function(data) {
//       console.log(data);
//       // The title of the article
//       $("#comments").append("<h2>" + data.title + "</h2>");
//       // An input to enter a new title
//       $("#comments").append("<input id='titleinput' name='title' >");
//       // A textarea to add a new note body
//       $("#comments").append("<textarea id='bodyinput' name='body'></textarea>");
//       // A button to submit a new note, with the id of the article saved to it
//       $("#comments").append("<button data-id='" + data._id + "' id='savecomment'>Save Note</button>");

//       // If there's a note in the article
//       if (data.comments) {
//         // Place the title of the note in the title input
//         $("#titleinput").val(data.comments.body);
//         // Place the body of the note in the body textarea
//         $("#bodyinput").val(data.comments.date);
//       }
//     });
// });

// // When you click the savenote button
// $(document).on("click", "#savecomment", function() {
//   // Grab the id associated with the article from the submit button
//   var thisId = $(this).attr("data-id");

//   // Run a POST request to change the note, using what's entered in the inputs
//   $.ajax({
//     method: "POST",
//     url: "/articles/" + thisId,
//     data: {
//       // Value taken from title input
//       body: $("#titleinput").val(),
//       // Value taken from note textarea
//       date: Date.now()
//     }
//   })
//     // With that done
//     .done(function(data) {
//       // Log the response
//       console.log(data);
//       // Empty the notes section
//       $("#comments").empty();
//     });

//   // Also, remove the values entered in the input and textarea for note entry
//   $("#titleinput").val("");
//   $("#bodyinput").val("");
// });
