$( document ).ready(function() {

console.log("testing123");
var currentLoc = "NewYork";
var lastLoc = "";


mapboxgl.accessToken = 'pk.eyJ1IjoiY2FybHRoZWFwZSIsImEiOiJjajN6NGMybTQwMDB2MzJuMWdzZm12b3QwIn0.PP7mPZA5HjlHME4HiUQEPg';
var map = new mapboxgl.Map({
container: 'mapid',
style: 'mapbox://styles/mapbox/satellite-v9',
center: [-74.0059,40.7128], // starting position
zoom: 0, // starting zoom
interactive: false
});



var geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "message": "NewYork",
                "iconSize": [20, 20]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -74.0059,
                    40.7128
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Beijing",
                "iconSize": [20, 20]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.39723,
                    39.9075
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Rio",
                "iconSize": [20, 20]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -43.365894, 
                    -23.000372
                ]
            }
        }
    ]
};

// add markers to map
geojson.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker ' + marker.properties.message;
    el.style.backgroundImage = 'url(assets/images/quest.svg)';
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';
    el.style.backgroundSize = 'cover';
    el.style.backgroundRepeat = "no-repeat";

    el.addEventListener('click', function() {
        window.alert(marker.properties.message);
        map.flyTo({center: marker.geometry.coordinates});
        lastLoc = currentLoc;
        console.log("last location: " + lastLoc);
        // document.getElementsByClassName(lastLoc).style.backgroundImage = 'url(assets/images/quest.svg)'
        $('.' + lastLoc).css('background-image', 'url(assets/images/check.png)');
        currentLoc = marker.properties.message;
        console.log("current location: " + currentLoc);
        var isAtStart = currentLoc;
        var end = marker.geometry.coordinates;
        var target = isAtStart ? end : start;
        el.style.backgroundImage = 'url(assets/images/Red_Arrow_Down.svg)';

    // and now we're at the opposite point
    // isAtStart = !isAtStart;

    map.flyTo({
        // These options control the ending camera position: centered at
        // the target, at zoom level 9, and north up.
        center: target,
        zoom:0.5,
        bearing: 0,

        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        speed: 0.05, // make the flying slow
        curve: 5,


    });
    });




    // add marker to map
    new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
});

  // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
    $(".marker").css('cursor', 'pointer');




});//document ready brackets