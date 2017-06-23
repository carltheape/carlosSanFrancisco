
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