$(document).ready(function(){
	var marker = "";
	var clueImage ="";

	$(".marker").on("click", function(){
	    marker = $(this).attr("data-name");
		displayCluePic();
		moveCluePic();
	});

	function displayCluePic() {
		
		//array to add secondary tags to location images
		var subTags = ["skyline", "landmarks", "buildings", "history", "flags", "sports", "attractions", "people"];
		//generates a random index value for the subTags array
		var j = (Math.floor(Math.random() * subTags.length));
		console.log("j:" + j);
		//vars to construct query url
		var key = "&api_key=f7e4efbdf5067c85376b024076792689";
		// var apiSig = "&api_sig=e44b1e327a5cb3ab2f0d0386acc95e9a";
		var format = "&format=json&nojsoncallback=1";
		
		var radius = "&radius=20+%28km%29";
		var tags = "&tags=+" + marker + "+" + subTags[j];
		console.log("tags: " + tags);
		//query url
		var queryUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search" + key + tags + radius + format;

		
		$.ajax({
			url: queryUrl,
			method: "GET"
		})
		.done(function(response){
			var results = response.data;
			console.log(response);

			//generates a random index value for the photos of the response object
			var i = (Math.floor(Math.random() * response.photos.photo.length));
				console.log("i :" + i);

			//set variables to the according values in JSON object
			var photoId = response.photos.photo[i].id;
			var serverId = response.photos.photo[i].server;
			var farmId = response.photos.photo[i].farm;
			var secret = response.photos.photo[i].secret;

			//console log server farm secret and photoid
			console.log("server " + serverId);
			console.log("farm " + farmId);
			console.log("secret " + secret);
			console.log("photoID " + photoId);

			//construct the url for the image
			var imageUrl = "https://farm" + farmId + ".staticflickr.com/" + serverId + "/" + photoId + "_" + secret + ".jpg";
			console.log("initial" + imageUrl);
			clueImage = imageUrl;

			// creates a html tag for the image hint to be stored in clues
			var imgHint = $("<img style ='height: 180px'; width: 180px; >");
			imgHint.attr("src", imageUrl);
			imgHint.addClass("currentImg");
			// appends the image hint to the div with class insideRight
			$(".insideLeft").append(imgHint);

		})
		
	};

	function moveCluePic(){

		if (clueImage !==""){
			$(".currentImg").remove();
			// creates a html tag for the image hint to be stored in previous clues
			var prevImgHint = $("<img style ='height: 70px; width: 70px; margin: 5px;' >");
			prevImgHint.attr("src", clueImage);
			prevImgHint.addClass("prevImg");
			$(".insideRight").append(prevImgHint);
			$(".prevImg").prepend(prevImgHint);
			console.log("clues"+clueImage);
		}
	};

})
