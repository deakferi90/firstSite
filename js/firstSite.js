$(document).ready(function(){

    $('ul.parent1 > li').click(function() {
      $(this).find('ul.child').fadeToggle(300);
      });
      $('ul.parent2 > li').click(function() {
      $(this).find('ul.child').fadeToggle(300);
    });

  });

$(document).ready(function(){

$('.sp').first().addClass('active');
$('.sp').hide();
$('.active').show();

  $('.right').click(function() {

    $('.active').removeClass('active').addClass('oldActive');
            if($('.oldActive').is(':last-child')) {
          $('.sp').first().addClass('active');
        }else{
          $('.oldActive').next().addClass('active');
        }
      $('.oldActive').removeClass('oldActive');
      $('.sp').fadeOut();
      $('.active').fadeIn();
  });

  $('.left').click(function() {

    $('.active').removeClass('active').addClass('oldActive');
      if ( $('.oldActive').is(':first-child')) {
      $('.sp').last().addClass('active');
    }else{
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.sp').fadeOut();
    $('.active').fadeIn();

    });
});
