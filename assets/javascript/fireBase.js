
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

  var name = "";
  var score = "";


// Capture Button Click
$("#add").on('click', function(e) {
  e.preventDefault();


  name = $("#name-input").val().trim();
  score = $("#score-input").val().trim();


  // Code for the push
  database.ref().push({

    name: name,
    score: score,

    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

database.ref().on("child_added", function(childSnapshot) {

  // Log everything that's coming out of snapshot
  console.log(childSnapshot.val().name);
  console.log(childSnapshot.val().name);
  console.log(childSnapshot.val().score);
  console.log(childSnapshot.val().score);
  console.log(childSnapshot.val().comment);
  console.log(childSnapshot.val().joinDate);

  // full list of items to the well
  $("#full-member-list").append("<div class='well'><span id='name'> " + childSnapshot.val().name +
    " </span><span id='score'> " + childSnapshot.val().score

  );

// // Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});

//Querying by orderByValue and limitToLast (10)<-- top 10 scores
database.ref().orderByValue().limitToLast(10).on("value", function(snapshot) {
  snapshot.forEach (function(data) {
    console.log ("Congratulation! "+ data.val().name + "  You're in the top 10. You scored " + data.val().score);
  });

//   // Change the HTML to reflect
  $("#name-display").html(snapshot.val().name);
  $("#score-display").html(snapshot.val().score);

});

// var scoresRef = db.ref("scores");
// scoresRef.orderByValue().limitToLast(10).on("value", function(snapshot) {
//   snapshot.forEach(function(data) {
//     console.log("The " + data.key + " dinosaur's score is " + data.val());
//   });
// });
