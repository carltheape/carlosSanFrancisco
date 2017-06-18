

$( document ).ready(function() {



function haversine() {
       var radians = Array.prototype.map.call(arguments, function(deg) { return deg/180.0 * Math.PI; });
       var lat1 = radians[0], lon1 = radians[1], lat2 = radians[2], lon2 = radians[3];
       var R = 6372.8; // km
       var dLat = lat2 - lat1;
       var dLon = lon2 - lon1;
       var a = Math.sin(dLat / 2) * Math.sin(dLat /2) + Math.sin(dLon / 2) * Math.sin(dLon /2) * Math.cos(lat1) * Math.cos(lat2);
       var c = 2 * Math.asin(Math.sqrt(a));
       return R * c;
}

var places = 
[
{   city : "Beijing",
    country : "China",
    location : [116.39723,39.9075]

},
{   city : "New York",
    country : "USA",
    location : [-74.005941,40.712784]

},
{   city : "Sao Paulo",
    country : "Brazil",
    location : [-46.633309,-23.550520]

},
{   city : "Seoul",
    country : "South Korea",
    location : [126.977969,37.566535]

},
{   city : "Mexico City",
    country : "Mexico",
    location : [-99.133208,19.432608]

},
{   city : "Osaka",
    country : "Japan",
    location : [135.502165,34.693738]

},
{   city : "Manila",
    country : "Philippines",
    location : [120.984219,14.599512]

},
{   city : "Mumbai",
    country : "India",
    location : [72.877656,19.075984]

},
{   city : "Bangkok",
    country : "Thailand",
    location : [100.501765,13.756331]

},
{   city : "Jakarta",
    country : "Indonesia",
    location : [106.865039,-6.175110]
},
{   city : "Lagos",
    country : "Nigeria",
    location : [3.379206,6.524379]

},
{   city : "Johannesburg",
    country : "South Africa",
    location : [28.047305,-26.204103]

},
{   city : "Cairo",
    country : "Egypt",
    location : [31.235712,30.044420]

},
{   city : "Baghdad",
    country : "Iraq",
    location : [44.361488,33.312806]

},
{   city : "Buenos Aires",
    country : "Argentina",
    location : [-58.381559,-34.603684]

},
{   city : "Santiago",
    country : "Chile",
    location : [-70.669265,-33.448890]

},
{   city : "Moscow",
    country : "Russia",
    location : [37.617300,55.755826]

},
{   city : "Ulaanbaatar",
    country : "Mongolia",
    location : [106.905744,47.886399]

},
{   city : "Karachi",
    country : "Pakistan",
    location : [67.009939,24.861462]

},
{   city : "Paris",
    country : "France",
    location : [2.352222,48.856614]

},
{   city : "Istanbul",
    country : "Turkey",
    location : [28.978359,41.008238]

},
{   city : "Kinshasa",
    country : "Congo",
    location : [15.266293,-4.441931]

},
{   city : "Sydney",
    country : "Australia",
    location : [151.209296,-33.868820]

},
{   city : "Madrid",
    country : "Spain",
    location : [-3.703790,40.416775]

},
{   city : "London",
    country : "England",
    location : [-0.127758,51.507351]

},
{   city : "Vancouver",
    country : "Canada",
    location : [-123.120738,49.282729]

},
{   city : "Naples",
    country : "Italy",
    location : [14.268124,40.851775]

},
{   city : "Tehran",
    country : "Iran",
    location : [51.388974,35.689197]

},
{   city : "Bogota",
    country : "Columbia",
    location : [-74.072092,4.710989]

},
{   city : "Lima",
    country : "Peru",
    location : [-77.042754,-12.046373]

},
];
var startingLoc = places[Math.floor(Math.random()*places.length)];
var startingCity = startingLoc.city;
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




// add markers to map
places.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker ' + marker.city.replace(/\s/g, '');
    el.innerHTML = "<h5 class='cityText'>" + marker.city +  ", " + marker.country + "</h5>";
    el.style.backgroundImage = 'url(assets/images/question.png)';
    el.style.width = 20 + 'px';
    el.style.height = 20 + 'px';
    el.style.backgroundSize = 'cover';
    el.style.backgroundRepeat = "no-repeat";
    el.addEventListener('click', function() {
        el.style.backgroundImage = 'url(assets/images/Red_Arrow_Down.svg)';
        // window.alert(marker.city +  " " + marker.country);
        map.flyTo({center: marker.location});
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
        var distance = haversine(lastLatLon[1],lastLatLon[0],currentLatLon[1], currentLatLon[0]);
        console.log("distance:"+distance+"km")
        var timeH = distance/920; //747 crusing speed is 920km/hr
        console.log(timeH+"hours")
        var timeM = timeH*60;
        console.log(timeM + "minutes");
        var timeS = timeM*60;
        console.log(timeS+"seconds");

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
var secondsS = Math.floor(timeS % 60);  // in theory the modulus is not required
console.log(daysS + ("days") + hoursS + ("hours") + (minutesS) + ("minutes") + (secondsS) + ("seconds to travel"))

        

    // and now we're at the opposite point
    // isAtStart = !isAtStart;

    map.flyTo({
        // These options control the ending camera position: centered at
        // the target, at zoom level 9, and north up.
        center: target,
        zoom:0.2,
        bearing: 0,

        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        speed: 0.2, // make the flying slow
        curve: 2, // change the speed at which it zooms out

         // This can be any easing function: it takes a number between
        // 0 and 1 and returns another number between 0 and 1.



    });
    });




    // add marker to map
    new mapboxgl.Marker(el, {offset: [-20 / 2, -20 / 2]})
        .setLngLat(marker.location)
        .addTo(map);
});
alert("Carlos San Francisco has committed a crime in " + startingCity + "," + startingCountry);
$('.' + startingCity.replace(/\s/g, '')).css('background-image', 'url(assets/images/Red_Arrow_Down.svg)');

  // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
    $(".marker").css('cursor', 'pointer');



});//document ready brackets