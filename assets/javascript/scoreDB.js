$(document).ready(function(){
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
  var score = "";


  // Capture Button Click
  $("#add").on('click', function(e) {
    e.preventDefault();

    name = $("#name-input").val().trim();
    score = parseInt($("#score-input").val());

    console.log({score});

    // Code for the push
    database.ref().push({


      name: name,
      score: score,

      dateAdded: firebase.database.ServerValue.TIMESTAMP

    });
    //Clears all of the text-boxes
    $("#name-input").val(""),
    $("#score-input").val(""),
    // displayHighScore();
    //alert
    alert ("Your time has been logged");
  });

  function displayHighScore() {
    debugger;
    //Querying by orderByValue and limitToLast (10)<-- top 10 scores
    database.ref().orderByChild("score").limitToLast(10).on("value", function(snapshot) {
      snapshot.forEach(function(data) {
      console.log ("Congratulations! "+ data.val().name + "  You're in the top 10. You scored " + data.val().score);
      // $(".panel-body").append(data.val().name + " " + data.val().score + "<br>");
      $("#score-table > tbody").append("<tr><td>" + data.val().name + "</td><td>" + data.val().score + "</td><tr>" );
      });
    });

     // $("#score-table > tbody").append("<tr><td>" + data.val().name + "</td><td>" + data.val().score + "</td><tr>" );
      // Handle the errors
    function(errorObject) {
      console.log("Errors handled: " + errorObject.code);

      };
  };

  displayHighScore();
});
