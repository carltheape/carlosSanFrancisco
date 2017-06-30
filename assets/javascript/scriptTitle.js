$( document ).ready(function() {

  $('body').css('display', 'none');

$('body').fadeIn(1000);


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
        $('.bottom').append('<a href="easy.html" class="button1 btn btn-default">Easy</a>');
        $('.bottom').append('<a href="medium.html" class="button1 btn btn-default">Medium</a>');
        $('.bottom').append('<a href="hard.html" class="button1 btn btn-default">Hard</a>');

        //$('.bottom').append('<button class="btn btn-default"><a href="easy.html">Easy</a></button>');
        //$('.bottom').append('<button class="btn btn-default"><a href="medium.html">Medium</a></button>');
        //$('.bottom').append('<button class="btn btn-default"><a href="hard.html">Hard</a></button>');
        $(this).remove();
        
    });

});


