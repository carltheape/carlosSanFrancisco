$(document).ready(function() {

    var music = new Audio('assets/sounds/Spy.mp3')
    music.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    music.play();
    //controls for music...
    $('.sound').click(function() {
        if (music.paused == false) {
            music.pause();
        } else {
            music.play();
        }
    });



    //fancy math for helping find distance...
    function haversine() {
        var radians = Array.prototype.map.call(arguments, function(deg) {
            return deg / 180.0 * Math.PI;
        });
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

    function modalPop() {

        var overlay = document.querySelector('.md-overlay');

        [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function(el, i) {

            var modal = document.querySelector('#' + el.getAttribute('data-modal')),
                close = modal.querySelector('.md-close');

            function removeModal(hasPerspective) {
                classie.remove(modal, 'md-show');

                if (hasPerspective) {
                    classie.remove(document.documentElement, 'md-perspective');
                }
            }

            function removeModalHandler() {
                removeModal(classie.has(el, 'md-setperspective'));
            }



            classie.add(modal, 'md-show');
            // overlay.removeEventListener( 'click', removeModalHandler );
            // overlay.addEventListener( 'click', removeModalHandler );

            if (classie.has(el, 'md-setperspective')) {
                setTimeout(function() {
                    classie.add(document.documentElement, 'md-perspective');
                }, 25);
            };

            close.addEventListener('click', function(ev) {
                ev.stopPropagation();
                removeModalHandler();
            });

        });

    };



    //all our locations...
    var places = [{
        city: "Beijing",
        country: "China",
        location: [116.39723, 39.9075],
        continent: "east-n-southeast-asia",
        code: "ch"

    }, {
        city: "New York",
        country: "United States of America",
        location: [-74.005941, 40.712784],
        continent: "north-america",
        code: "us"


    }, {
        city: "Sao Paulo",
        country: "Brazil",
        location: [-46.633309, -23.550520],
        continent: "south-america",
        code: "br"

    }, {
        city: "Alamaty",
        country: "Kazakhstan",
        location: [76.851248, 43.222015],
        continent: "central-asia",
        code: "kz"

    }, {
        city: "Mexico City",
        country: "Mexico",
        location: [-99.133208, 19.432608],
        continent: "north-america",
        code: "mx"

    }, {
        city: "Osaka",
        country: "Japan",
        location: [135.502165, 34.693738],
        continent: "east-n-southeast-asia",
        code: "ja"

    }, {
        city: "Manila",
        country: "Philippines",
        location: [120.984219, 14.599512],
        continent: "east-n-southeast-asia",
        code: "rp"

    }, {
        city: "Mumbai",
        country: "India",
        location: [72.877656, 19.075984],
        continent: "south-asia",
        code: "in"

    }, {
        city: "Bangkok",
        country: "Thailand",
        location: [100.501765, 13.756331],
        continent: "east-n-southeast-asia",
        code: "th"

    }, {
        city: "Jakarta",
        country: "Indonesia",
        location: [106.865039, -6.175110],
        continent: "east-n-southeast-asia",
        code: "th"
    }, {
        city: "Lagos",
        country: "Nigeria",
        location: [3.379206, 6.524379],
        continent: "africa",
        code: "ni"

    }, {
        city: "Johannesburg",
        country: "South Africa",
        location: [28.047305, -26.204103],
        continent: "africa",
        code: "sf"

    }, {
        city: "Cairo",
        country: "Egypt",
        location: [31.235712, 30.044420],
        continent: "africa",
        code: "eg"

    }, {
        city: "Baghdad",
        country: "Iraq",
        location: [44.361488, 33.312806],
        continent: "middle-east",
        code: "iz"

    }, {
        city: "Buenos Aires",
        country: "Argentina",
        location: [-58.381559, -34.603684],
        continent: "south-america",
        code: "ar"

    }, {
        city: "Santiago",
        country: "Chile",
        location: [-70.669265, -33.448890],
        continent: "south-america",
        code: "ci"

    }, {
        city: "Moscow",
        country: "Russia",
        location: [37.617300, 55.755826],
        continent: "central-asia",
        code: "rs"

    }, {
        city: "Ulaanbaatar",
        country: "Mongolia",
        location: [106.905744, 47.886399],
        continent: "east-n-southeast-asia",
        code: "mg"

    }, {
        city: "Karachi",
        country: "Pakistan",
        location: [67.009939, 24.861462],
        continent: "south-asia",
        code: "pk"

    }, {
        city: "Paris",
        country: "France",
        location: [2.352222, 48.856614],
        continent: "europe",
        code: "fr"

    }, {
        city: "Istanbul",
        country: "Turkey",
        location: [28.978359, 41.008238],
        continent: "middle-east",
        code: "tu"

    }, {
        city: "Kinshasa",
        country: "Congo",
        location: [15.266293, -4.441931],
        continent: "africa",
        code: "cf"

    }, {
        city: "Sydney",
        country: "Australia",
        location: [151.209296, -33.868820],
        continent: "australia-oceania",
        code: "as"

    }, {
        city: "Madrid",
        country: "Spain",
        location: [-3.703790, 40.416775],
        continent: "europe",
        code: "sp"

    }, {
        city: "London",
        country: "United Kingdom",
        location: [-0.127758, 51.507351],
        continent: "europe",
        code: "uk"

    }, {
        city: "Vancouver",
        country: "Canada",
        location: [-123.120738, 49.282729],
        continent: "north-america",
        code: "ca"

    }, {
        city: "Naples",
        country: "Italy",
        location: [14.268124, 40.851775],
        continent: "europe",
        code: "it"

    }, {
        city: "Tehran",
        country: "Iran",
        location: [51.388974, 35.689197],
        continent: "middle-east",
        code: "ir"

    }, {
        city: "Bogota",
        country: "Colombia",
        location: [-74.072092, 4.710989],
        continent: "south-america",
        code: "co"

    }, {
        city: "Lima",
        country: "Peru",
        location: [-77.042754, -12.046373],
        continent: "south-america",
        code: "pe"

    }, {
        city: "Christchurch",
        country: "New Zealand",
        location: [172.636225, -43.532054],
        continent: "australia-oceania",
        code: "nz"

    }, {
        city: "Faisalabad",
        country: "Pakistan",
        location: [73.079107, 31.418714],
        continent: "south-asia",
        code: "pk"

    }, {
        city: "Riyadh",
        country: "Saudi Arabia",
        location: [46.675296, 24.713552],
        continent: "middle-east",
        code: "sa"

    }, {
        city: "Singapore",
        country: "Singapore",
        location: [103.819836, 1.352083],
        continent: "east-n-southeast-asia",
        code: "sn"

    }, {
        city: "Yangon",
        country: "Myanmar",
        location: [96.195132, 16.866069],
        continent: "east-n-southeast-asia",
        code: "bm"

    }, {
        city: "Abidjan",
        country: "Ivory Coast",
        location: [-4.008256, 5.359952],
        continent: "africa",
        code: "iv"

    }, {
        city: "Dar es Salaam",
        country: "Tanzania",
        location: [39.208328, -6.792354],
        continent: "africa",
        code: "tz"

    }, {
        city: "New Taipei City",
        country: "Taiwan",
        location: [121.462787, 25.016983],
        continent: "east-n-southeast-asia",
        code: "tw"

    }, {
        city: "Los Angeles",
        country: "United States of America",
        location: [-118.243685, 34.052234],
        continent: "north-america",
        code: "us"

    }, {
        city: "Busan",
        country: "South Korea",
        location: [129.075642, 35.179554],
        continent: "east-n-southeast-asia",
        code: "ks"

    }, {
        city: "Kabul",
        country: "Afghanistan",
        location: [69.207486, 34.555349],
        continent: "south-asia",
        code: "af"

    }, {
        city: "Casablanca",
        country: "Morocco",
        location: [-7.589843, 33.573110],
        continent: "africa",
        code: "mo"

    }, {
        city: "Pyongyang",
        country: "North Korea",
        location: [125.762524, 39.039219],
        continent: "east-n-southeast-asia",
        code: "kn"

    }, {
        city: "Nairobi",
        country: "Kenya",
        location: [36.821946, -1.292066],
        continent: "africa",
        code: "ke"

    }, {
        city: "Addis Ababa",
        country: "Ethiopia",
        location: [38.757761, 8.980603],
        continent: "africa",
        code: "et"

    }, {
        city: "Zhongshan",
        country: "China",
        location: [113.392770, 22.517585],
        continent: "east-n-southeast-asia",
        code: "ch"

    }];

    //sets up the travel variables...
    var startingLoc = places[Math.floor(Math.random() * places.length)];
    console.log("you started in: " + startingLoc.country);
    var carlosStart = "";
    //check to make sure we are not starting in the same place...
    function carlosWhere() {
        carlosStart = places[Math.floor(Math.random() * places.length)];
        if (carlosStart === startingLoc) { carlosWhere() }
    };
    carlosWhere();
    console.log("carlos started in: " + carlosStart.city+carlosStart.country);
    var startingCity = startingLoc.city.replace(/\s/g, '_');
    var startingCountry = startingLoc.country;
    var startingLatLon = startingLoc.location;
    var currentLoc = startingCity;
    var currentLatLon = startingLatLon;
    var lastLoc = startingCity;
    var lastLatLon = startingLatLon;
    var globalClock = '';
    var score = 1;
    var caught = false;
    var day1 = false;
    var carm = false;

    $('#newsHeadline').append(startingLoc.country);
    console.log(startingLoc.country);


    (function(window) {

        'use strict';

        // class helper functions from bonzo https://github.com/ded/bonzo

        function classReg(className) {
            return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
        }

        // classList support for class management
        // altho to be fair, the api sucks because it won't accept multiple classes at once
        var hasClass, addClass, removeClass;

        if ('classList' in document.documentElement) {
            hasClass = function(elem, c) {
                return elem.classList.contains(c);
            };
            addClass = function(elem, c) {
                elem.classList.add(c);
            };
            removeClass = function(elem, c) {
                elem.classList.remove(c);
            };
        } else {
            hasClass = function(elem, c) {
                return classReg(c).test(elem.className);
            };
            addClass = function(elem, c) {
                if (!hasClass(elem, c)) {
                    elem.className = elem.className + ' ' + c;
                }
            };
            removeClass = function(elem, c) {
                elem.className = elem.className.replace(classReg(c), ' ');
            };
        }

        function toggleClass(elem, c) {
            var fn = hasClass(elem, c) ? removeClass : addClass;
            fn(elem, c);
        }

        var classie = {
            // full names
            hasClass: hasClass,
            addClass: addClass,
            removeClass: removeClass,
            toggleClass: toggleClass,
            // short names
            has: hasClass,
            add: addClass,
            remove: removeClass,
            toggle: toggleClass
        };

        // transport
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(classie);
        } else {
            // browser global
            window.classie = classie;
        }

    })(window);

    var ModalEffects = (function() {

        modalPop();

    })();
    //sets up the mapbox access...
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2FybHRoZWFwZSIsImEiOiJjajN6NGMybTQwMDB2MzJuMWdzZm12b3QwIn0.PP7mPZA5HjlHME4HiUQEPg';
    var map = new mapboxgl.Map({
        container: 'mapid',
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: startingLatLon, // starting position
        zoom: 0.5, // starting zoom
        // interactive: false



    });
    //sets controls for the map...
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
        el.dataset.continent = [marker.continent];
        el.dataset.code = [marker.code];
        el.innerHTML = "<h5 class='cityText'>" + marker.city + ", " + marker.country + "</h5>";
        trav.innerHTML = newTravelTime;
        el.style.backgroundImage = 'url(assets/images/question.png)';
        el.style.width = 20 + 'px';
        el.style.height = 20 + 'px';
        el.style.backgroundSize = 'cover';
        el.style.backgroundRepeat = "no-repeat";
        el.appendChild(trav);

        el.addEventListener('click', function() {
            el.style.backgroundImage = 'url(assets/images/Red_Arrow_Down.svg)'; //sets current location with marker...
            // map.flyTo({ center: marker.location });
            lastLoc = currentLoc;
            lastLatLon = currentLatLon;
            // console.log("last location: " + lastLoc);
            // console.log("last Lat. Long: " + lastLatLon);
            $('.' + lastLoc).css('background-image', 'url(assets/images/check.png)');
            currentLoc = marker.city.replace(/\s/g, '_');
            currentLatLon = marker.location; //updating the old and new locations with images...
            // console.log("current location: " + currentLoc);
            // console.log("current Lat Long: " + currentLatLon);
            var compareDist = haversine(currentLatLon[1], currentLatLon[0], carlosStart.location[1], carlosStart.location[0]);
            var lastCompareDist = haversine(lastLatLon[1], lastLatLon[0], carlosStart.location[1], carlosStart.location[0]);
            if (compareDist < lastCompareDist) {
                console.log("you are on the right track!" + compareDist);
                alternateClues();
            } else {
                console.log("the trail is getting cold..." + compareDist)
            };
            var isAtStart = currentLoc; //calculates the distance and time it takes to travel from one point to another...
            var end = marker.location;
            var target = isAtStart ? end : start;
            var distance = haversine(lastLatLon[1], lastLatLon[0], currentLatLon[1], currentLatLon[0]);
            // console.log("distance:" + distance + "km")
            var timeH = distance / 800; //747 crusing speed is 920km/hr
            // console.log(timeH + "hours")
            var timeM = timeH * 60;
            // console.log(timeM + "minutes");
            var timeS = timeM * 60;
            globalClock = globalClock - (timeS * 1000);

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


        //ties the marker click to a new data clue...
        // el.addEventListener('click', displayCountryInfo);

        // add markers to map
        new mapboxgl.Marker(el, { offset: [-20 / 2, -20 / 2] })
            .setLngLat(marker.location)
            .addTo(map);
    });

    //creates carlos
    var carl = document.createElement('div');
    carl.id = 'carlos';
    carl.innerHTML = " ";
    carl.style.backgroundImage = 'url(assets/images/spyfull.gif)';
    carl.style.width = 30 + 'px';
    carl.style.height = 30 + 'px';
    carl.style.backgroundSize = 'contain';
    carl.style.backgroundRepeat = "no-repeat";
    var plsMns = Math.round(Math.random()) * 2 - 1; //+ or Minus
    console.log(plsMns);
    var space = (Math.random() * (0 - 0.05) + 0.05) * plsMns; //make a random movement
    console.log(space);
    //puts carlos on the map offsetting him by a random amount but within certain bounds of his starting location...
    new mapboxgl.Marker(carl, { offset: [-20 / 2, -20 / 2] })
        .setLngLat([carlosStart.location[0] + space, carlosStart.location[1] + space])
        .addTo(map);
    //starts you in a location
    // alert("Carlos San Francisco has committed a crime in " + startingCity.replace(/_/g, ' ') + "," + startingCountry);
    $('.' + startingCity).css('background-image', 'url(assets/images/Red_Arrow_Down.svg)');

    // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
    $(".marker").css('cursor', 'pointer');
    //this is the code that will send a query for the type of data to wolfram alpha for a given country...
    var factTable = [];
    //this is the code that will send a query for the type of data to wolfram alpha for a given country...
    function displayCountryInfo() {
        var queryURL = "https://raw.githubusercontent.com/opendatajson/factbook.json/master/" + carlosStart.continent + "/" + carlosStart.code + ".json";



        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            calling = response;
            var obj = JSON.parse(response);
            console.log(obj);
            if (obj.Economy["Agriculture - products"].text != null) { factTable.push("This country's main Agriculture Products are: " + obj.Economy["Agriculture - products"].text) };
            if (obj.Economy.Budget.expenditures.text != null) { factTable.push("Annual Spending for this country is: " + obj.Economy.Budget.expenditures.text) };
            if (obj.Economy["Budget surplus (+) or deficit (-)"].text != null) { factTable.push("This country's annual surplus or deficit is: " + obj.Economy["Budget surplus (+) or deficit (-)"].text) };
            if (obj.Economy["Debt - external"].text != null) { factTable.push("This country is in debt for: " + obj.Economy["Debt - external"].text) };
            if (obj.Economy["Exports - commodities"].text != null) { factTable.push("This country's major exports are: " + obj.Economy["Exports - commodities"].text) };
            if (obj.Economy["Exports - partners"].text != null) { factTable.push("This country's major export partners are: " + obj.Economy["Exports - partners"].text) };
            if (obj.Economy["GDP (official exchange rate)"].text != null) { factTable.push("This country's GDP is: " + obj.Economy["GDP (official exchange rate)"].text) };
            if (obj.Economy["GDP - per capita (PPP)"].text != null) { factTable.push("This country's GDP per capita is: " + obj.Economy["GDP - per capita (PPP)"].text) };
            if (obj.Economy["Imports - commodities"].text != null) { factTable.push("This country's major imports are: " + obj.Economy["Imports - commodities"].text) };
            if (obj.Economy["Imports - partners"].text != null) { factTable.push("This country's major import partners are: " + obj.Economy["Imports - partners"].text) };
            if (obj.Economy.Industries.text != null) { factTable.push("This country's major industries are: " + obj.Economy.Industries.text) };
            if (obj.Economy["Population below poverty line"].text != null) { factTable.push("The percentage of this country's population that are in poverty is: " + obj.Economy["Population below poverty line"].text) };
            if (obj.Economy["Unemployment rate"].text != null) { factTable.push("The percentage of this country's population that are unemployed is: " + obj.Economy["Unemployment rate"].text) };
            if (obj.Geography.Area.land.text != null) { factTable.push("The total size of this country is: " + obj.Geography.Area.land.text) };
            if (obj.Geography["Area - comparative"].text != null) { factTable.push("The size of this country is about: " + obj.Geography["Area - comparative"].text) };
            if (obj.Geography.Elevation["mean elevation"].text != null) { factTable.push("This country's average elevation is: " + obj.Geography.Elevation["mean elevation"].text) };
            if (obj.Geography["Natural hazards"].text != null) { factTable.push("This country's natural disasters include: " + obj.Geography["Natural hazards"].text) };
            if (obj.Geography["Natural resources"].text != null) { factTable.push("This country's natural resources include: " + obj.Geography["Natural resources"].text) };
            if (obj.Government["Flag description"].text != null) { factTable.push("This country's flag looks like: " + obj.Government["Flag description"].text) };
            if (obj.Government["Government type"].text != null) { factTable.push("This country's Government is considered a: " + obj.Government["Government type"].text) };
            if (obj.Government.Independence.text != null) { factTable.push("This country became independant in: " + obj.Government.Independence.text) };
            if (obj.Government["National anthem"].name.text != null) { factTable.push("This country's National Anthem is called: " + obj.Government["National anthem"].name.text) };
            if (obj.Government["National symbol(s)"].text != null) { factTable.push("The symbols for this country are: " + obj.Government["National symbol(s)"].text) };
            if (obj["People and Society"]["Birth rate"].text != null) { factTable.push("The birthrate for this country is: " + obj["People and Society"]["Birth rate"].text) };
            if (obj["People and Society"]["Death rate"].text != null) { factTable.push("The deathrate for this country is: " + obj["People and Society"]["Death rate"].text) };
            if (obj["People and Society"]["Education expenditures"].text != null) { factTable.push("The amount this country spends on education is: " + obj["People and Society"]["Education expenditures"].text) };
            if (obj["People and Society"]["Health expenditures"].text != null) { factTable.push("The amount this country spends on healthcare is: " + obj["People and Society"]["Health expenditures"].text) };
            if (obj["People and Society"]["Infant mortality rate"].total.text != null) { factTable.push("The infant mortality rate for this country is: " + obj["People and Society"]["Infant mortality rate"].total.text) };
            if (obj["People and Society"]["Life expectancy at birth"]["total population"].text != null) { factTable.push("The average life expectancy for this country is: " + obj["People and Society"]["Life expectancy at birth"]["total population"].text) };
            if (obj["People and Society"]["Obesity - adult prevalence rate"].text != null) { factTable.push("The obesity rate for this country is: " + obj["People and Society"]["Obesity - adult prevalence rate"].text) };
            if (obj["People and Society"].Population.text != null) { factTable.push("The population for this country is: " + obj["People and Society"].Population.text) };
            if (obj["People and Society"].Religions.text != null) { factTable.push("The major religions for this country are: " + obj["People and Society"].Religions.text) };
            if (obj["People and Society"]["Sex ratio"]["total population"].text != null) { factTable.push("The sex ratio for this country is: " + obj["People and Society"]["Sex ratio"]["total population"].text) };
            if (obj["People and Society"]["Total fertility rate"].text != null) { factTable.push("The average fertility rate for this country is: " + obj["People and Society"]["Total fertility rate"].text) };
            if (obj.Transportation["Airports - with paved runways"].total.text != null) { factTable.push("The total number of paved airports for this country are: " + obj.Transportation["Airports - with paved runways"].total.text) };
            if (obj.Transportation.Roadways.total.text != null) { factTable.push("The total distance of roads in this country is: " + obj.Transportation.Roadways.total.text) };

        });
    };




    displayCountryInfo();

    (function($) {

        // Number of seconds in every time division
        var days = 24 * 60 * 60,
            hours = 60 * 60,
            minutes = 60;

        // Creating the plugin
        $.fn.countdown = function(prop) {

            var options = $.extend({
                callback: function() {},
                timestamp: 0
            }, prop);

            var left, d, h, m, s, positions;

            // Initialize the plugin
            init(this, options);

            positions = this.find('.position');

            (function tick() {
                if (caught == true) {
                    return };
                if (score > 0) {

                    // Time left
                    left = Math.floor((globalClock - (new Date())) / 1000);
                    score = left;

                    // console.log(score);
                    // console.log(new Date() / 1000);
                    // console.log(globalClock);

                    if (left < 0) {
                        left = 0;
                    }

                    // Number of days left
                    d = Math.floor(left / days);
                    updateDuo(0, 1, d);
                    left -= d * days;

                    // Number of hours left
                    h = Math.floor(left / hours);
                    updateDuo(2, 3, h);
                    left -= h * hours;

                    // Number of minutes left
                    m = Math.floor(left / minutes);
                    updateDuo(4, 5, m);
                    left -= m * minutes;

                    // Number of seconds left
                    s = left;
                    updateDuo(6, 7, s);

                    if (score < 86400 && day1 == false) {

                        $("#newsHeadline").html("ONLY A DAY LEFT!");
                        $('#headshot').hide();
                        $('#angry').show();
                        $("#article1").html("");
                        $("#article2").html("");
                        $("#closeBtn").html("Catch him quick!");
                        day1 = true;
                        modalPop();
                    };

                    // Calling an optional user supplied callback
                    options.callback(d, h, m, s);

                    // Scheduling another call of this function in 1s
                    setTimeout(tick, 1000);

                } else {
                    $("#newsHeadline").html("CARLOS GOT AWAY!");
                    $('#headshot').hide();
                    $('#angry').hide();
                    $('#lose').show();
                    $("#article1").hide();
                    $("#article2").hide();
                    $("#closeBtn").html("Game Over");
                    $('#clueHolder').hide();
                    $('#mapid').hide();
                    modalPop();
                    return
                };

            })();

            // This function updates two digit positions at once
            function updateDuo(minor, major, value) {
                switchDigit(positions.eq(minor), Math.floor(value / 10) % 10);
                switchDigit(positions.eq(major), value % 10);
            }

            return this;
        };




        function init(elem, options) {
            elem.addClass('countdownHolder');

            // Creating the markup inside the container
            $.each(['Days', 'Hours', 'Minutes', 'Seconds'], function(i) {
                $('<span class="count' + this + '">').html(
                    '<span class="position">\
                    <span class="digit static">0</span>\
                </span>\
                <span class="position">\
                    <span class="digit static">0</span>\
                </span>'
                ).appendTo(elem);

                if (this != "Seconds") {
                    elem.append('<span class="countDiv countDiv' + i + '"></span>');
                }
            });

        }

        // Creates an animated transition between the two numbers
        function switchDigit(position, number) {

            var digit = position.find('.digit')

            if (digit.is(':animated')) {
                return false;
            }

            if (position.data('digit') == number) {
                // We are already showing this number
                return false;
            }

            position.data('digit', number);

            var replacement = $('<span>', {
                'class': 'digit',
                css: {
                    top: '-2.1em',
                    opacity: 0
                },
                html: number
            });

            // The .static class is added when the animation
            // completes. This makes it run smoother.

            digit
                .before(replacement)
                .removeClass('static')
                .animate({ top: '2.5em', opacity: 0 }, 'fast', function() {
                    digit.remove();
                })

            replacement
                .delay(100)
                .animate({ top: 0, opacity: 1 }, 'fast', function() {
                    replacement.addClass('static');
                });
        }

    })(jQuery);

    $(function() {

        var note = $('#note'),
            ts = new Date(2012, 0, 1);


        if ((new Date()) > ts) {
            // The new year is here! Count towards something else.
            // Notice the *1000 at the end - time must be in milliseconds
            ts = (new Date()).getTime() + 3 * 24 * 60 * 60 * 1000;
            globalClock = ts;

        }

        $('#timer').countdown({
            timestamp: ts,

            callback: function(days, hours, minutes, seconds) {

                var message = "";

                message += days + " day" + (days == 1 ? '' : 's') + ", ";

                message += hours + " hour" + (hours == 1 ? '' : 's') + ", ";

                message += minutes + " minute" + (minutes == 1 ? '' : 's') + " and ";

                message += seconds + " second" + (seconds == 1 ? '' : 's') + " <br />";

                message += "left to catch Carlos San Francisco!";


                note.html(message);
            }
        });

    });

    /////////////////////////////////////////////////////////////////
    //////////////FLICR API CALLS/Displaying Clues///////////////////
    /////////////////////////////////////////////////////////////////

    var mark = "";
    var clueImage = "";
    //used to increment count of clues in alternateClues()
    var clueCount = 0;

    //used during testing clues
    // $(".search").on("click", function() {
    //     mark = $(this).attr("data-name");
    //     alternateClues();
    //     // moveCluePic();
    // });

    //Flickr API call with subtags
    function displayCluePic() {

        //array to add secondary tags to location images
        var subTags = ["skyline", "park", "art", "food", "festival", "landmark"];
        //generates a random index value for the subTags array
        var j = (Math.floor(Math.random() * subTags.length));
        console.log("j:" + j);
        //vars to construct query url
        var key = "&api_key=ba1d8158e0ea3d52d7706e412bca51af";
        // var apiSig = "&api_sig=e44b1e327a5cb3ab2f0d0386acc95e9a";
        var format = "&format=json&nojsoncallback=1";
        var lat = carlosStart.location[1];
        var long = carlosStart.location[0];
        var coordinates = "&lat=" + lat + "&lon=" + long;
        console.log("coordinates : " + coordinates);

        var radius = "&radius=20+%28km%29";
        var tags = "&tags=" + carlosStart.country + "+" + subTags[j]; //+" + carlosStart.city + "+" +
        console.log("tags: " + tags);
        //query url
        var queryUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search" + key + tags + coordinates + format;
        moveFact();

        $.ajax({
                url: queryUrl,
                method: "GET"
            })
            .done(function(response) {
                var results = response.data;
                console.log(response);

                if (response.photos.photo.length > 1) {
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
                    var imgHint = $("<img style ='max-height: 180px; max-width: 250px;' >");
                    imgHint.attr("src", imageUrl);
                    imgHint.addClass("currentImg");
                    imgHint.addClass("img-rounded");
                    // appends the image hint to the div with class insideRight
                    $(".insideLeft").append(imgHint);
                    // clueCount++;
                    console.log("Clues :" + clueCount);
                } else {
                    coordinateTagsOnly();
                    // clueCount++;
                    console.log("Clues :" + clueCount);
                }


            });

    };

    //fallback FLICR API call if no subtags work with coordinates
    function coordinateTagsOnly() {
        //vars to construct query url
        var key = "&api_key=ba1d8158e0ea3d52d7706e412bca51af";
        // var apiSig = "&api_sig=e44b1e327a5cb3ab2f0d0386acc95e9a";
        var format = "&format=json&nojsoncallback=1";
        var lat = carlosStart.location[1];
        var long = carlosStart.location[0];
        var coordinates = "&lat=" + lat + "&lon=" + long;
        console.log("coordinates : " + coordinates);
        //query url
        var queryUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search" + key + coordinates + format;
        moveFact();

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
                var imgHint = $("<img style ='max-height: 180px; max-width: 250px;' >");
                imgHint.attr("src", imageUrl);
                imgHint.addClass("currentImg");
                imgHint.addClass("img-rounded");
                // appends the image hint to the div with class insideRight
                $(".insideLeft").append(imgHint);
            });
    };



    //stores prev source to avoid duplicated prev clues
    var prevSrc = "";

    function alternateClues() {
        //compareDist //distance to carlos
        //lastCompareDist// previous distance to Carlos
        if (clueCount % 2 == 0) {
            displayCluePic();
            clueCount++;
        } else {
            moveCluePic();
            getFact();
            clueCount++;
        };
    };


    function moveCluePic() {

        if (clueImage !== "" && clueImage !== prevSrc) {
            $(".currentImg").remove();
            // creates a html tag for the image hint to be stored in previous clues
            var prevImgHint = $("<img style ='height: 40%; width: 40%; margin: 5px;' >");
            prevImgHint.attr("src", clueImage);
            prevImgHint.addClass("prevImg");
            prevImgHint.addClass("img-rounded zoom");
            prevSrc = clueImage;
            console.log("Prev Src : " + prevSrc);
            $("#imgClue").append(prevImgHint);
            $(".prevImg").prepend(prevImgHint);
            console.log("clues" + clueImage);
        }
    };


    /////////////////////////////////////////////////////////////////
    //////////////END FLICR API CALLS/Displaying Clues///////////////
    /////////////////////////////////////////////////////////////////

    //this is the code that make carlos appear, only if you are close enough to see him...
    map.on('zoom', function(e) {

        var zoom = parseInt(map.getZoom());
        if (zoom >= 12 && carm == false) {
            ($("#carmenOn").show(),
            $('#carmenOn').fadeOut(500), carm = true);
        };

        if(zoom >= 12){
            var carlos = document.getElementById("carlos");
            // var height = parseFloat(carl.style.height);
            // var width = parseFloat(carl.style.width);
            console.log("zoom: "+zoom);
            var height = 30 * ((zoom)/12);
            console.log(height);
            // console.log(typeof height);
            var width = 30 * ((zoom)/12);
        carlos.style.height = height+'px';
        carlos.style.width = width+'px';
        }
        if (zoom < 12 && carm == true) {
            ($("#carmenOff").show(),
                $('#carmenOff').fadeOut(500), carm = false)
        };

        if (zoom >= 12 && currentLoc == carlosStart.city) { carlos.style.display = 'block' } else { carlos.style.display = 'none' };



    });
    //this is the code that displays the flight time dynamically...
    $(".marker").hover(function nextDest(e) {
        // console.log("current lat long" + currentLatLon);
        newLat = parseFloat($(this).data('lat'));
        newLong = parseFloat($(this).data('long'));
        // console.log("new lat : " + newLat + "is " + typeof(newLat));
        // console.log("new long : " + newLong + "is " + typeof(newLong));


        // console.log(currentLatLon[0]);

        //console.log(currentLatLon[1]);
        // console.log(newLatLon[0]);
        // console.log(newLatLon[1]);
        var newDistance = haversine(currentLatLon[1], currentLatLon[0], newLong, newLat);
        // console.log("new distance:" + newDistance + "km")
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
        var newTravelTime = daysS + (" day ") + hoursS + (" hours ") + (minutesS) + (" minutes ") + (secondsS) + (" seconds to travel here ");
        // console.log("new travel time: " + newTravelTime);
        // console.log(this);
        $("h5:nth-child(2)").html(newTravelTime);
    });

    //the code that will make you win...

    $("#carlos").on("click", function() {
        if (globalClock > 0) {

            $("#newsHeadline").html("Carlos San Francisco Arrested!");
            $('#headshot').hide();
            $('#mapid').hide();
            $('#jail').show();
            $('#win').show();
            $("#article1").html("The notorious thief Carlos San Francisco has been apprehended thanks to the diligent work of the investigative team.  He will finally face justice for the crimes he's committed.  When reached for comment, lead investigator for the... ");
            $("#article2").html(' Carlos San Francisco case Heady Bossman was quoted as saying: "We would never have been able to catch him without the hard work our investigators and our wonderful new technology C.A.R.M.E.N."  Thanks to you investigators, from the rest of the world!');
            $("#closeBtn").html("Great Job!");
            $('#clueHolder').hide();
            $('#highScore').show();
            var music = new Audio('assets/sounds/celebrate.wav')
    music.play();
            modalPop();




        };
        caught = true;
        console.log("your score is: " + score)
    });
    // }
    // else{alert("you missed him!")}



    $(".prevImg").hover(function() {
        //   $('#right').css({'overflow':'visible'});
        alert("HOVER!");
        // }, function() {
        //   // on mouseout, reset the background colour
        //   $('#right').css({'overflow':'auto'});
    });



    // global variables used in getFact() and moveFact()
    var textClue = "";
    var prevTextHint = "";
    var factNum = 1;
    //displays the current fact in the Clue box
    function getFact() {
        var fact = factTable[Math.floor(Math.random() * factTable.length)];
        console.log("fact before" + fact);
        // if (fact==null){getFact()};
        console.log(fact);
        var i = factTable.indexOf(fact);
        factTable.splice(fact, 1);
        console.log(factTable);
        textClue = fact;
        $(".insideLeft").append("<p class='currentFact'>" + fact + "</p>");
    };

    //moves the current fact to previous clues under text clues
    function moveFact() {
        if (textClue !== "" && textClue !== prevTextHint) {
            prevTextHint = textClue;
            var factId = "Fact" + factNum;
            $(".currentFact").remove();
            var factAnchor = $("<a>Fact " + factNum + "</a>" + "<br>");
            var collapseP = $("<p>");
            factAnchor.attr("href", "#" + factId);
            factAnchor.attr("data-toggle", "collapse");
            collapseP.attr("id", factId);
            collapseP.addClass("collapse");
            collapseP.append(prevTextHint);
            $("#textClue").append(factAnchor);
            $("#textClue").append(collapseP);
            factNum++;
        };
    };
    //used for testing facts
    // $(".fact").click(function(){
    //         getFact();
    //         moveFact();
    //     });
    /*
     * jQuery Animate From To plugin 1.0
     *
     * Copyright (c) 2011 Emil Stenstrom <http://friendlybit.com>
     *
     * Dual licensed under the MIT and GPL licenses:
     * http://www.opensource.org/licenses/mit-license.php
     * http://www.gnu.org/licenses/gpl.html
     */

    //this is the chunk of code that will animate the plane from one location to another...
    (function($) {
        map.interactive = false;
        $.fn.animate_from_to = function(targetElm, options) {
            return this.each(function() {
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
                callback: function() {
                    return;
                }
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

            var dy = source.offset().top + source.width() / 2 - target.offset().top,
                dx = source.offset().left + source.height() / 2 - target.offset().left,
                pixel_distance = Math.floor(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))),
                duration = (pixel_distance / options.pixels_per_second) * 1000,

                shadow = $("<div class='rotate'>" + shadowImage + '</div>')
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
                    complete: function() {

                        //this is what controls the map camera and makes it run after the plane has arrived...
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
                        //take the plane away after arrival...
                        shadow.remove();
                        return options.callback();



                    }
                });
        }
    })(jQuery);
    //this is the click function for the plane...
    $(".marker").on("click", function() {
        $('.' + lastLoc).animate_from_to($('.' + currentLoc), {
            pixels_per_second: 100,
            initial_css: {
                'background': "none",
                'image': 'assets/images/plane.png',
            },
        });
        //this finds the degree difference between two points and rotates the plane accordingly...
        var currentXY = $('.' + currentLoc).position();
        var lastXY = $('.' + lastLoc).position();
        var p1 = {
            x: currentXY.left,
            y: currentXY.top
        };

        var p2 = {
            x: lastXY.left,
            y: lastXY.top
        };
        // angle in degrees
        var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

        var degrees = 0;
        $(".rotate").css({ 'transform': 'rotate(' + angleDeg + 'deg)' });




    });


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAnDIrxPck-uh7JhwatLgC8HbMK5xQ2en4",
        authDomain: "carlsanfran.firebaseapp.com",
        databaseURL: "https://carlsanfran.firebaseio.com",
        projectId: "carlsanfran",
        storageBucket: "carlsanfran.appspot.com",
        messagingSenderId: "751701180914"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
    //initial values
    var name = "";

    // function displayHighScore() {
    // debugger;
    //Querying by orderByValue and limitToLast (10)<-- top 10 scores
    database.ref().orderByChild("score").limitToLast(10).on("value", function(snapshot) {
        var scoressss = [];
        snapshot.forEach(function(data) {
            console.log("Congratulations! " + data.val().name + "  You're in the top 10. You scored " + data.val().score);
            // $(".panel-body").append(data.val().name + " " + data.val().score + "<br>");
            scoressss.push("<tr><td>" + data.val().name + "</td><td>" + data.val().score + "</td><tr>");

        });
        $("#scoreStuff").html(scoressss.reverse())
    });

    // $("#score-table > tbody").append("<tr><td>" + data.val().name + "</td><td>" + data.val().score + "</td><tr>" );
    // Handle the errors
    // function(errorObject) {
    //   console.log("Errors handled: " + errorObject.code);

    //   };
    // };

    // displayHighScore();  //inital high score

    // Capture Button Click
    $("#logScore").on('click', function(e) {
        e.preventDefault();
        $("#formSubmit").hide();
        name = $("#name-input").val().trim();

        console.log(score);

        // Code for the push
        database.ref().push({


            name: name,
            score: score,

            dateAdded: firebase.database.ServerValue.TIMESTAMP

        });
        //Clears all of the text-boxes
        $("#name-input").val("");
        // $("#score-input").val(""),
        // displayHighScore();
        //alert
        // alert ("Your name has been logged");

    });



    // function createHSButton() {

    //     var highScore = $("<a class='btn btn-default' href='scorePage.html'>High Score</a>");
    //     $("#modal-4").append(highScore);
    // };



}); //document ready brackets
