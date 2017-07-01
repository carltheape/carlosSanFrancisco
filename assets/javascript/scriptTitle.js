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
    $(".button1").click(function(){
        $(".titlePage").toggleClass("main");
        $(".test1").toggleClass("test2");
        $('.bottom').append('<a href="index.html" class="button1 btn btn-default">Collect Assignment</a>');
        $(this).remove();
    });

});




