$(document).ready(function() {

    var music = new Audio('assets/sounds/Spy.mp3')
    music.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    music.play();

    $('.sound').click(function() {
        if (music.paused == false) {
            music.pause();
        } else {
            music.play();
        }
    });






    function haversine() {
        var radians = Array.prototype.map.call(arguments, function(deg) {
            return deg / 180.0 * Math.PI; });
        var lat1 = radians[0],
            lon1 = radians[1],
            lat2 = radians[2],
            lon2 = radians[3];
        var R = 6372.8; // km
        var dLat = lat2 - lat1;
        var dLon = lon2 - lon1;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.asin(Math.sqrt(a));
        return R * c;
    };

    var places = [{
        city: "Beijing",
        country: "China",
        location: [116.39723, 39.9075]

    }, {
        city: "New York",
        country: "United States of America",
        location: [-74.005941, 40.712784]

    }, {
        city: "Sao Paulo",
        country: "Brazil",
        location: [-46.633309, -23.550520]

    }, {
        city: "Astana",
        country: "Kazakhstan",
        location: [71.470356, 51.160523]

    }, {
        city: "Mexico City",
        country: "Mexico",
        location: [-99.133208, 19.432608]

    }, {
        city: "Osaka",
        country: "Japan",
        location: [135.502165, 34.693738]

    }, {
        city: "Manila",
        country: "Philippines",
        location: [120.984219, 14.599512]

    }, {
        city: "Mumbai",
        country: "India",
        location: [72.877656, 19.075984]

    }, {
        city: "Bangkok",
        country: "Thailand",
        location: [100.501765, 13.756331]

    }, {
        city: "Jakarta",
        country: "Indonesia",
        location: [106.865039, -6.175110]
    }, {
        city: "Lagos",
        country: "Nigeria",
        location: [3.379206, 6.524379]

    }, {
        city: "Johannesburg",
        country: "South Africa",
        location: [28.047305, -26.204103]

    }, {
        city: "Cairo",
        country: "Egypt",
        location: [31.235712, 30.044420]

    }, {
        city: "Baghdad",
        country: "Iraq",
        location: [44.361488, 33.312806]

    }, {
        city: "Buenos Aires",
        country: "Argentina",
        location: [-58.381559, -34.603684]

    }, {
        city: "Santiago",
        country: "Chile",
        location: [-70.669265, -33.448890]

    }, {
        city: "Moscow",
        country: "Russia",
        location: [37.617300, 55.755826]

    }, {
        city: "Ulaanbaatar",
        country: "Mongolia",
        location: [106.905744, 47.886399]

    }, {
        city: "Karachi",
        country: "Pakistan",
        location: [67.009939, 24.861462]

    }, {
        city: "Paris",
        country: "France",
        location: [2.352222, 48.856614]

    }, {
        city: "Istanbul",
        country: "Turkey",
        location: [28.978359, 41.008238]

    }, {
        city: "Kinshasa",
        country: "Congo",
        location: [15.266293, -4.441931]

    }, {
        city: "Sydney",
        country: "Australia",
        location: [151.209296, -33.868820]

    }, {
        city: "Madrid",
        country: "Spain",
        location: [-3.703790, 40.416775]

    }, {
        city: "London",
        country: "United Kingdom",
        location: [-0.127758, 51.507351]

    }, {
        city: "Vancouver",
        country: "Canada",
        location: [-123.120738, 49.282729]

    }, {
        city: "Naples",
        country: "Italy",
        location: [14.268124, 40.851775]

    }, {
        city: "Tehran",
        country: "Iran",
        location: [51.388974, 35.689197]

    }, {
        city: "Bogota",
        country: "Colombia",
        location: [-74.072092, 4.710989]

    }, {
        city: "Lima",
        country: "Peru",
        location: [-77.042754, -12.046373]

    }, ];
    var startingLoc = places[Math.floor(Math.random() * places.length)];
    console.log("you started in: " + startingLoc.country);
    var carlosStart = places[Math.floor(Math.random() * places.length)];
    console.log("carlos started in: " + carlosStart.country);
    var startingCity = startingLoc.city.replace(/\s/g, '');
    var startingCountry = startingLoc.country;
    var startingLatLon = startingLoc.location;
    var currentLoc = startingCity;
    var currentLatLon = startingLatLon;
    var lastLoc = startingCity;
    var lastLatLon = startingLatLon;


    console.log(startingLoc);

    mapboxgl.accessToken = 'pk.eyJ1IjoiY2FybHRoZWFwZSIsImEiOiJjajN6NGMybTQwMDB2MzJuMWdzZm12b3QwIn0.PP7mPZA5HjlHME4HiUQEPg';
    var map = new mapboxgl.Map({
        container: 'mapid',
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: startingLatLon, // starting position
        zoom: 0.5, // starting zoom
        // interactive: false

    });
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();
    map.addControl(new mapboxgl.NavigationControl());
    console.log("zoom"+map.getZoom());


    var currentElement,
    prevElement,
    resultsPrev = $("#results-prev"),
    resultsCurrent = $("#results-current");
    var newLatLon = "";
    var newTravelTime = "";




    // add markers to map
    places.forEach(function(marker) {
        // create a DOM element for the marker
        var el = document.createElement('div');
        var trav = document.createElement('h5');
        el.className = 'marker ' + marker.city.replace(/\s/g, '');
        el.id = marker.country.replace(/\s/g, '_');
        trav.id = 'loc';    
        trav.className = 'loc';
        el.dataset.lat = [marker.location[0]];
        el.dataset.long = [marker.location[1]];
        el.innerHTML = "<h5 class='cityText'>" + marker.city + ", " + marker.country + "</h5>";
        trav.innerHTML = newTravelTime;
        el.style.backgroundImage = 'url(assets/images/question.png)';
        el.style.width = 20 + 'px';
        el.style.height = 20 + 'px';
        el.style.backgroundSize = 'cover';
        el.style.backgroundRepeat = "no-repeat";
        el.appendChild(trav);







        el.addEventListener('click', function() 
        {
            el.style.backgroundImage = 'url(assets/images/Red_Arrow_Down.svg)';
            // window.alert(marker.city +  " " + marker.country);
            map.flyTo({ center: marker.location });
            lastLoc = currentLoc;
            lastLatLon = currentLatLon;
            console.log("last location: " + lastLoc);
            console.log("last Lat. Long: " + lastLatLon);
            $('.' + lastLoc).css('background-image', 'url(assets/images/check.png)');
            currentLoc = marker.city.replace(/\s/g, '');
            currentLatLon = marker.location;
            console.log("current location: " + currentLoc);
            console.log("current Lat Long: " + currentLatLon);
            var isAtStart = currentLoc;
            var end = marker.location;
            var target = isAtStart ? end : start;
            var distance = haversine(lastLatLon[1], lastLatLon[0], currentLatLon[1], currentLatLon[0]);
            console.log("distance:" + distance + "km")
            var timeH = distance / 800; //747 crusing speed is 920km/hr
            // console.log(timeH + "hours")
            var timeM = timeH * 60;
            // console.log(timeM + "minutes");
            var timeS = timeM * 60;
            // console.log(timeS + "seconds");

            // calculate (and subtract) whole days
            var daysS = Math.floor(timeS / 86400);
            timeS -= daysS * 86400;


            // calculate (and subtract) whole hours
            var hoursS = Math.floor(timeS / 3600) % 24;
            timeS -= hoursS * 3600;


            // calculate (and subtract) whole minutes
            var minutesS = Math.floor(timeS / 60) % 60;
            timeS -= minutesS * 60;


            // what's left is seconds
            var secondsS = Math.floor(timeS % 60); // in theory the modulus is not required
            var travelTime = daysS + ("days") + hoursS + ("hours") + (minutesS) + ("minutes") + (secondsS) + ("seconds to travel");
            console.log(travelTime);

                        map.flyTo({
                // These options control the ending camera position: centered at
                // the target, at zoom level 9, and north up.
                center: target,
                zoom: 4,
                bearing: 0,

                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.07, // make the flying slow
                curve: 3, // change the speed at which it zooms out

                // This can be any easing function: it takes a number between
                // 0 and 1 and returns another number between 0 and 1.



            });




            // and now we're at the opposite point
            // isAtStart = !isAtStart;



            // function handler(ev) {
            // var target = $(ev.target);
            // var elId = target.attr('class');
            // if( target.is(".marker") ) {

            //     newLatLon = ev.location;
            //         console.log(newLatLon);
            //         var distance = haversine(currentLatLon[1],currentLatLon[0],newLatLon[1], newLatLon[0]);
            //         var timeH = distance/920; //747 crusing speed is 920km/hr
            //         var timeM = timeH*60;
            //         var timeS = timeM*60;
            // var daysS = Math.floor(timeS / 86400);
            // timeS -= daysS * 86400;
            // var hoursS = Math.floor(timeS / 3600) % 24;
            // timeS -= hoursS * 3600;
            // var minutesS = Math.floor(timeS / 60) % 60;
            // timeS -= minutesS * 60;
            // var secondsS = Math.floor(timeS % 60);  // in theory the modulus is not required
            // var travelTime = daysS + ("days") + hoursS + ("hours") + (minutesS) + ("minutes") + (secondsS) + ("seconds to travel")
            // console.log(travelTime)
            // }
            // }
            // $(".marker").mouseenter(handler);




        });
        

        el.addEventListener('click', displayCountryInfo);





        // add marker to map
        new mapboxgl.Marker(el, { offset: [-20 / 2, -20 / 2] })
            .setLngLat(marker.location)
            .addTo(map);
        
    });

var carl = document.createElement('div');
        carl.id = 'carlos';
        carl.innerHTML = " ",
        carl.style.backgroundImage = 'url(assets/images/devil.gif)';
        carl.style.width = 20 + 'px';
        carl.style.height = 20 + 'px';
        carl.style.backgroundSize = 'cover';
        carl.style.backgroundRepeat = "no-repeat";
var plsMns = Math.round(Math.random()) * 2 - 1;  //+ or Minus
console.log(plsMns);
var space = (Math.random() * (0 - 0.1) + 0.1)*plsMns; //make a random movement
console.log(space);
new mapboxgl.Marker(carl, { offset: [-20 / 2, -20 / 2] })
            .setLngLat([carlosStart.location[0]+space,carlosStart.location[1]+space])
            .addTo(map);

    alert("Carlos San Francisco has committed a crime in " + startingCity + "," + startingCountry);
    $('.' + startingCity.replace(/\s/g, '')).css('background-image', 'url(assets/images/Red_Arrow_Down.svg)');

    // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
    $(".marker").css('cursor', 'pointer');




        function displayCountryInfo() {
        var factTable = ["GDP", "population", "land+size", "founded", "age","vehicles", "roads", "elevation", "unemployment+rate", "population+density", "poverty", "debt", "education", "current+time", "population+growth", "army", "average+income","life+expectancy","literacy+rate","death+rate","fertility+rate","human+development+index"];
        var randomCat = factTable[Math.floor(Math.random() * factTable.length)];
        var countryId = $(this).attr("id");
        var queryCont = countryId.replace(/_/g, '+');
        var randoFact = queryCont + "+" + randomCat;

            $.ajax({


                // The 'type' property sets the HTTP method.
                // A value of 'PUT' or 'DELETE' will trigger a preflight request.
                type: 'GET',

                // The URL to make the request to.
                url: "http://crossorigin.me/http://api.wolframalpha.com/v1/result?i=" + randoFact+"&appid=JGT6P6-UQJ3KGT3J5&format=plaintext",
                contentType: 'text/plain',

                xhrFields: {
                    // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
                    // This can be used to set the 'withCredentials' property.&output=JSON
                    // Set the value to 'true' if you'd like to pass cookies to the server.
                    // If this is enabled, your server must respond with the header
                    // 'Access-Control-Allow-Credentials: true'.
                    withCredentials: false
                },

                headers: {
                    // Set any custom headers here.
                    // If you set any non-simple headers, your server must include these
                    // headers in the 'Access-Control-Allow-Headers' response header.
                },

                success: function(msg) {
                    // Here's where you handle a successful response.
                    // console.log(countryId +" "+" " + randomCat + " " + msg);
                    console.log(randomCat + msg);
                },

                error: function() {
                    // Here's where you handle an error response.
                    // Note that if the error was due to a CORS issue,
                    // this function will still fire, but there won't be any additional
                    // information about the error.
                    alert("service unavailable at this time");
                }
            });
        };

    $(function() {

        var note = $('#note'),
            ts = new Date(2012, 0, 1),
            newYear = true;

        if ((new Date()) > ts) {
            // The new year is here! Count towards something else.
            // Notice the *1000 at the end - time must be in milliseconds
            ts = (new Date()).getTime() + 7 * 24 * 60 * 60 * 1000;
            newYear = false;
        }

        $('#timer').countdown({
            timestamp: ts,
            callback: function(days, hours, minutes, seconds) {

                var message = "";

                message += days + " day" + (days == 1 ? '' : 's') + ", ";
                message += hours + " hour" + (hours == 1 ? '' : 's') + ", ";
                message += minutes + " minute" + (minutes == 1 ? '' : 's') + " and ";
                message += seconds + " second" + (seconds == 1 ? '' : 's') + " <br />";

                if (newYear) {
                    message += "left until the new year!";
                } else {
                    message += "left to catch the burglar!";
                }

                note.html(message);
            }
        });

    });

    var mark = "";
    var clueImage = "";

    $(".search").on("click", function() {
        mark = $(this).attr("data-name");
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
        var key = "&api_key=ba1d8158e0ea3d52d7706e412bca51af";
        // var apiSig = "&api_sig=e44b1e327a5cb3ab2f0d0386acc95e9a";
        var format = "&format=json&nojsoncallback=1";

        var radius = "&radius=20+%28km%29";
        var tags = "&tags=+" + mark + "+" + subTags[j];
        console.log("tags: " + tags);
        //query url
        var queryUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search" + key + tags + radius + format;


        $.ajax({
                url: queryUrl,
                method: "GET"
            })
            .done(function(response) {
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

    function moveCluePic() {

        if (clueImage !== "") {
            $(".currentImg").remove();
            // creates a html tag for the image hint to be stored in previous clues
            var prevImgHint = $("<img style ='height: 70px; width: 70px; margin: 5px;' >");
            prevImgHint.attr("src", clueImage);
            prevImgHint.addClass("prevImg");
            $(".insideRight").append(prevImgHint);
            $(".prevImg").prepend(prevImgHint);
            console.log("clues" + clueImage);
        }
    };

map.on('zoom', function (e) {
    var zoom = parseInt(map.getZoom());

    // console.log(map.getZoom());
    var carlos = document.getElementById("carlos");
    // console.log(carlos);
    if (zoom >= 10){carlos.style.display= 'block' }
        else{carlos.style.display= 'none' };


});

$(".marker").hover(function nextDest(e) {
    console.log("current lat long"+currentLatLon);
    newLat = parseFloat($(this).data('lat'));
    newLong = parseFloat($(this).data('long'));
    console.log("new lat : "+newLat+"is "+ typeof(newLat));
    console.log("new long : "+newLong+"is "+ typeof(newLong));


    // console.log(currentLatLon[0]);

    //     console.log(currentLatLon[1]);
            // console.log(newLatLon[0]);
            // console.log(newLatLon[1]);
            var newDistance = haversine(currentLatLon[1], currentLatLon[0], newLong, newLat);
            console.log("new distance:" + newDistance + "km")
            var timeH = newDistance / 800; //747 crusing speed is 920km/hr
            // console.log(timeH + "hours")
            var timeM = timeH * 60;
            // console.log(timeM + "minutes");
            var timeS = timeM * 60;
            // console.log(timeS + "seconds");

            // calculate (and subtract) whole days
            var daysS = Math.floor(timeS / 86400);
            timeS -= daysS * 86400;


            // calculate (and subtract) whole hours
            var hoursS = Math.floor(timeS / 3600) % 24;
            timeS -= hoursS * 3600;


            // calculate (and subtract) whole minutes
            var minutesS = Math.floor(timeS / 60) % 60;
            timeS -= minutesS * 60;


            // what's left is seconds
            var secondsS = Math.floor(timeS % 60); // in theory the modulus is not required
            var newTravelTime = hoursS + (" hours ") + (minutesS) + (" minutes ") + (secondsS) + (" seconds to travel here ");
            console.log("new travel time: " + newTravelTime);
            console.log(this);
            $("h5:nth-child(2)").html(newTravelTime);
}); 

$("#carlos").on("click", function() {
        alert("you got me!")
    });


// // San Francisco
// var origin = [currentLatLon[0],currentLatLon[1]];

// // Washington DC
// var destination = [newLatLon[0],newLatLon[1]];

// // A simple line from origin to destination.
// var route = {
//     "type": "FeatureCollection",
//     "features": [{
//         "type": "Feature",
//         "geometry": {
//             "type": "LineString",
//             "coordinates": [
//                 origin,
//                 destination
//             ]
//         }
//     }]
// };

// // A single point that animates along the route.
// // Coordinates are initially set to origin.
// var point = {
//     "type": "FeatureCollection",
//     "features": [{
//         "type": "Feature",
//         "geometry": {
//             "type": "Point",
//             "coordinates": origin
//         }
//     }]
// };

// // Calculate the distance in kilometers between route start/end point.
// var lineDistance = turf.lineDistance(route.features[0], 'kilometers');

// var arc = [];

// // Draw an arc between the `origin` & `destination` of the two points
// for (var i = 0; i < lineDistance; i++) {
//     var segment = turf.along(route.features[0], i / 1000 * lineDistance, 'kilometers');
//     arc.push(segment.geometry.coordinates);
// }

// // Update the route with calculated arc coordinates
// route.features[0].geometry.coordinates = arc;

// // Used to increment the value of the point measurement against the route.
// var counter = 0;

// map.on('load', function () {
//     // Add a source and layer displaying a point which will be animated in a circle.
//     map.addSource('route', {
//         "type": "geojson",
//         "data": route
//     });

//     map.addSource('point', {
//         "type": "geojson",
//         "data": point
//     });

//     map.addLayer({
//         "id": "route",
//         "source": "route",
//         "type": "line",
//         "paint": {
//             "line-width": 2,
//             "line-color": "#007cbf"
//         }
//     });

//     map.addLayer({
//         "id": "point",
//         "source": "point",
//         "type": "symbol",
//         "layout": {
//             "icon-image": "airport-15",
//             "icon-rotate": 90
//         }
//     });

//     function animate() {
//         // Update point geometry to a new position based on counter denoting
//         // the index to access the arc.
//         point.features[0].geometry.coordinates = route.features[0].geometry.coordinates[counter];

//         // Update the source with this new data.
//         map.getSource('point').setData(point);

//         // Request the next frame of animation so long as destination has not
//         // been reached.
//         if (point.features[0].geometry.coordinates[0] !== destination[0]) {
//             requestAnimationFrame(animate);
//         }

//         counter = counter + 1;
//     }

//      el.addEventListener('click', function() {
//         // Set the coordinates of the original point back to origin
//         point.features[0].geometry.coordinates = origin;

//         // Update the source layer
//         map.getSource('point').setData(point);

//         // Reset the counter
//         counter = 0;

//         // Restart the animation.
//         animate(counter);
//     });

//     // Start the animation.
//     animate(counter);
// });


}); //document ready brackets
