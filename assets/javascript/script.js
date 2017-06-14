console.log("testing123");

var config = {
      apiKey: "AIzaSyAqIkP9gKhU7raMzCLqpCqh3Z2PZYM7LcA",
      
    };

var mapOptions = {
    center: new google.maps.LatLng(37.7831,-122.4039),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

new google.maps.Map(document.getElementById('map'), mapOptions);