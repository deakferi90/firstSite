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
