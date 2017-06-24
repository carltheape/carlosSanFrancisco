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


    $( document ).ready(function() {

var music = new Audio('assets/sounds/Murder.mp3')

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

});



    
/**
 * @name        jQuery Countdown Plugin
 * @author        Martin Angelov
 * @version     1.0
 * @url            http://tutorialzine.com/2011/12/countdown-jquery/
 * @license        MIT License
 */

(function($){
    
    // Number of seconds in every time division
    var days    = 24*60*60,
        hours    = 60*60,
        minutes    = 60;
    
    // Creating the plugin
    $.fn.countdown = function(prop){
        
        var options = $.extend({
            callback    : function(){},
            timestamp    : 0
        },prop);
        
        var left, d, h, m, s, positions;

        // Initialize the plugin
        init(this, options);
        
        positions = this.find('.position');
        
        (function tick(){
            
            // Time left
            left = Math.floor((options.timestamp - (new Date())) / 1000);
            
            if(left < 0){
                left = 0;
            }
            
            // Number of days left
            d = Math.floor(left / days);
            updateDuo(0, 1, d);
            left -= d*days;
            
            // Number of hours left
            h = Math.floor(left / hours);
            updateDuo(2, 3, h);
            left -= h*hours;
            
            // Number of minutes left
            m = Math.floor(left / minutes);
            updateDuo(4, 5, m);
            left -= m*minutes;
            
            // Number of seconds left
            s = left;
            updateDuo(6, 7, s);
            
            // Calling an optional user supplied callback
            options.callback(d, h, m, s);
            
            // Scheduling another call of this function in 1s
            setTimeout(tick, 1000);
        })();
        
        // This function updates two digit positions at once
        function updateDuo(minor,major,value){
            switchDigit(positions.eq(minor),Math.floor(value/10)%10);
            switchDigit(positions.eq(major),value%10);
        }
        
        return this;
    };

    


    function init(elem, options){
        elem.addClass('countdownHolder');

        // Creating the markup inside the container
        $.each(['Days','Hours','Minutes','Seconds'],function(i){
            $('<span class="count'+this+'">').html(
                '<span class="position">\
                    <span class="digit static">0</span>\
                </span>\
                <span class="position">\
                    <span class="digit static">0</span>\
                </span>'
            ).appendTo(elem);
            
            if(this!="Seconds"){
                elem.append('<span class="countDiv countDiv'+i+'"></span>');
            }
        });

    }

    // Creates an animated transition between the two numbers
    function switchDigit(position,number){
        
        var digit = position.find('.digit')
        
        if(digit.is(':animated')){
            return false;
        }
        
        if(position.data('digit') == number){
            // We are already showing this number
            return false;
        }
        
        position.data('digit', number);
        
        var replacement = $('<span>',{
            'class':'digit',
            css:{
                top:'-2.1em',
                opacity:0
            },
            html:number
        });
        
        // The .static class is added when the animation
        // completes. This makes it run smoother.
        
        digit
            .before(replacement)
            .removeClass('static')
            .animate({top:'2.5em',opacity:0},'fast',function(){
                digit.remove();
            })

        replacement
            .delay(100)
            .animate({top:0,opacity:1},'fast',function(){
                replacement.addClass('static');
            });
    }

})(jQuery);




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

    }];


    var startingLoc = places[Math.floor(Math.random() * places.length)];
    console.log("you started in: " + startingLoc.country);
    var carlosStart = places[Math.floor(Math.random() * places.length)];
    console.log("carlos started in: " + carlosStart.country);
    var startingCity = startingLoc.city.replace(/\s/g, '_');
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

    // var currentElement,
    //     prevElement,
    //     resultsPrev = $("#results-prev"),
    //     resultsCurrent = $("#results-current");
    var newLatLon = "";
    var newTravelTime = "";



    // add markers to map
    places.forEach(function(marker) {
        // create a DOM element for the marker
        var el = document.createElement('div');
        var trav = document.createElement('h5');
        el.className = 'marker ' + marker.city.replace(/\s/g, '_');
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

        el.addEventListener('click', function() {
            el.style.backgroundImage = 'url(assets/images/Red_Arrow_Down.svg)';
            // window.alert(marker.city +  " " + marker.country);
            // map.flyTo({ center: marker.location });
            lastLoc = currentLoc;
            lastLatLon = currentLatLon;
            console.log("last location: " + lastLoc);
            console.log("last Lat. Long: " + lastLatLon);
            $('.' + lastLoc).css('background-image', 'url(assets/images/check.png)');
            currentLoc = marker.city.replace(/\s/g, '_');
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

           

        });


        el.addEventListener('click', displayCountryInfo);

      





        // add marker to map
        new mapboxgl.Marker(el, { offset: [-20 / 2, -20 / 2] })
            .setLngLat(marker.location)
            .addTo(map);
    });


var carl = document.createElement('div');
        carl.id = 'carlos';
        carl.innerHTML = " ";
        carl.style.backgroundImage = 'url(assets/images/Devil.gif)';
        carl.style.width = 20 + 'px';
        carl.style.height = 20 + 'px';
        carl.style.backgroundSize = 'cover';
        carl.style.backgroundRepeat = "no-repeat";
var plsMns = Math.round(Math.random()) * 2 - 1;  //+ or Minus
console.log(plsMns);
var space = (Math.random() * (0 - 0.1) + 0.1)*plsMns; //make a random movement
console.log(space);

    new mapboxgl.Marker(carl, { offset: [-20 / 2, -20 / 2] })
        .setLngLat([carlosStart.location[0] + space, carlosStart.location[1] + space])
        .addTo(map);

alert("Carlos San Francisco has committed a crime in " + startingCity + "," + startingCountry);
$('.' + startingCity.replace(/\s/g, '')).css('background-image', 'url(assets/images/Red_Arrow_Down.svg)');

// Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
$(".marker").css('cursor', 'pointer');

function displayCountryInfo() {
    var factTable = ["GDP", "population", "land+size", "founded", "age", "vehicles", "roads", "elevation", "unemployment+rate", "population+density", "poverty", "debt", "education", "current+time", "population+growth", "army", "average+income", "life+expectancy", "literacy+rate", "death+rate", "fertility+rate", "human+development+index"];
    var randomCat = factTable[Math.floor(Math.random() * factTable.length)];
    var countryId = $(this).attr("id");
    var queryCont = countryId.replace(/_/g, '+');
    var randoFact = queryCont + "+" + randomCat;

    $.ajax({


        // The 'type' property sets the HTTP method.
        // A value of 'PUT' or 'DELETE' will trigger a preflight request.
        type: 'GET',

        // The URL to make the request to.
        url: "http://crossorigin.me/http://api.wolframalpha.com/v1/result?i=" + randoFact + "&appid=JGT6P6-UQJ3KGT3J5&format=plaintext",
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
                message += "left to catch Carlos San Francisco!";
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
            var imgHint = $("<img style ='height: 180px; width: 180px;' >");
            imgHint.attr("src", imageUrl);
            imgHint.addClass("currentImg");
            imgHint.addClass("img-rounded");
            // appends the image hint to the div with class insideRight
            $(".insideLeft").append(imgHint);

        })

};
    //used to increment count of id to prev clues
    var count = 0;
    //stores prev source to avoid duplicated prev clues
    var prevSrc="";


function moveCluePic() {

    if (clueImage !=="" && clueImage !== prevSrc) {
        $(".currentImg").remove();
        // creates a html tag for the image hint to be stored in previous clues
        var prevImgHint = $("<img style ='height: 72px; width: 72px; margin: 5px;' >");
        prevImgHint.attr("src", clueImage);
        prevImgHint.addClass("prevImg");
        prevImgHint.addClass("img-rounded zoom");
        prevSrc = clueImage;
        console.log("Prev Src : " + prevSrc);
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
    console.log("current lat long" + currentLatLon);
    newLat = parseFloat($(this).data('lat'));
    newLong = parseFloat($(this).data('long'));
    console.log("new lat : " + newLat + "is " + typeof(newLat));
    console.log("new long : " + newLong + "is " + typeof(newLong));


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

//////////////////////////////////////////////////////

/*
 * jQuery Animate From To plugin 1.0
 *
 * Copyright (c) 2011 Emil Stenstrom <http://friendlybit.com>
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {
    $.fn.animate_from_to = function(targetElm, options){
        return this.each(function(){
            animate_from_to(this, targetElm, options);
        });
    };

    $.extend({
        animate_from_to: animate_from_to
    });

    function animate_from_to(sourceElm, targetElm, options) {
        var source = $(sourceElm).eq(0),
            target = $(targetElm).eq(0);

        var defaults = {
            pixels_per_second: 1000,
            initial_css: {
                "background": "#dddddd",
                "opacity": 0.8,
                "position": "absolute",
                "top": source.offset().top,
                "left": source.offset().left,
                "height": source.height(),
                "width": source.width(),
                "z-index": 100000,
                "image": ""
            },
            square: '',
            callback: function(){ return; }
        }
        if (options && options.initial_css) {
            options.initial_css = $.extend({}, defaults.initial_css, options.initial_css);
        }
        options = $.extend({}, defaults, options);

        var target_height = target.innerHeight(),
            target_width = target.innerWidth();

        if (options.square.toLowerCase() == 'height') {
            target_width = target_height;
        } else if (options.square.toLowerCase() == 'width') {
            target_height = target_width;
        }

        var shadowImage = "";
        if (options.initial_css.image != "") {
            shadowImage = "<img src='" + options.initial_css.image + "' style='width: 100%; height: 100%' />";
        }

        var dy = source.offset().top + source.width()/2 - target.offset().top,
            dx = source.offset().left + source.height()/2 - target.offset().left,
            pixel_distance = Math.floor(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))),
            duration = (pixel_distance/options.pixels_per_second)*1000,

            shadow = $('<div>' + shadowImage + '</div>')
                .css(options.initial_css)
                .appendTo('body')
                .animate({
                    top: target.offset().top,
                    left: target.offset().left,
                    height: target_height,
                    width: target_width
                }, {
                    duration: duration
                })
                .animate({
                    opacity: 0
                }, {
                    duration: 100,
                    complete: function(){
                        map.flyTo({
                // These options control the ending camera position: centered at
                // the target, at zoom level 9, and north up.
                center: currentLatLon,
                zoom: 0.5,
                bearing: 0,

                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.6, // make the flying slow
                curve: 3, // change the speed at which it zooms out

                // This can be any easing function: it takes a number between
                // 0 and 1 and returns another number between 0 and 1.



            });
                        shadow.remove();
                        return options.callback();

                         

                    }
                });
    }
})(jQuery);
$(".marker").on("click", function() {
$('.'+lastLoc).animate_from_to($('.'+currentLoc),{
    pixels_per_second: 100,
    initial_css: {
        'background': "none",
        'image' : 'assets/images/plane.png',
    },
});


});


    ///////////////////////////////////////////////////////////////////

});//document ready brackets


