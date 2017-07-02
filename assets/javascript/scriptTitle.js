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
    var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

});




