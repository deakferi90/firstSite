$(document).ready(function(){

    $('ul.parent > li').hover(function() {
      $(this).find('ul.child').slideToggle(50);
    });
      $('ul.child').css('background-color', '#F2F2F2');


      var left = $('.left');
      var right = $('.right');
      var active = $('.active');
      var nextElement = active.next();
      var prevElement = active.next().next();
      var currentPosition = 1;


      right.click(function() {
        showNextSlide();
      });


      left.click(function() {
        showPrevSlide();
      });


      

function showNextSlide() {
  if (currentPosition === 3) {
    currentPosition = 1 ;
    active.prev().prev().addClass('active');
    active.removeClass('active');
    active = active.prev().prev();
    nextElement = active.next();
  }
  else {
    nextElement.addClass('active');
    active.removeClass('active');
    active = nextElement;
    nextElement = active.next();
    currentPosition = currentPosition + 1;
  }
}

function showPrevSlide() {
  if (currentPosition === 1) {
    currentPosition = 3 ;
    active.next().next().addClass('active');
    active.removeClass('active');
    active = active.next().next();
    prevElement = active.prev();

  } else {
    prevElement.addClass('active');
    active.removeClass('active');
    active = prevElement;
    prevElement = active.prev();
    currentPosition = currentPosition - 1;
  }
}


  });




  // $(function() {
  //
  //     //settings for slider
  //     var width = 1920;
  //     var animationSpeed = 1000;
  //     var pause = 5000;
  //     var currentSlide = 1;
  //
  //     //cache DOM elements
  //     var $slider = $('#slider');
  //     var $slideContainer = $('.slides', $slider);
  //     var $slides = $('.slide', $slider);
  //
  //     var interval;
  //
  //     function startSlider() {
  //         interval = setInterval(function() {
  //             $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
  //                 if (++currentSlide === $slides.length) {
  //                     currentSlide = 1;
  //                     $slideContainer.css('margin-left', 0);
  //                 }
  //             });
  //         }, pause);
  //     }
  //     function pauseSlider() {
  //         clearInterval(interval);
  //     }
  //
  //     $slideContainer
  //         .on('mouseenter', pauseSlider)
  //         .on('mouseleave', startSlider);
  //
  //     startSlider();
