$(document).ready(function(){
	var key = "2c96c0998c85115fd50f75c5ca2aa4cc";
	var format = "&tags=dog&format=json&nojsoncallback=1&api_sig=198a22bfaba25646e4feae09633a0685";
	var queryUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + key + format;

	$.ajax({
		url: queryUrl,
		method: "GET"
	})
	.done(function(response){
		var results = response.data;
		console.log(response);
	})
})
