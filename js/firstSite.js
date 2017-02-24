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
        } else {
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

function checkUsername() {                        // Declare function
  var username = el.value;                        // Store username in variable
  if (username.length < 5) {                      // If username < 5 characters
    elMsg.className = 'warning';                  // Change class on message
    elMsg.textContent = 'Not long enough, yet...';// Update message
  } else {                                        // Otherwise
    elMsg.textContent = '';                       // Clear the message
  }
}

function tipUsername() {                          // Declare function
  elMsg.className = 'tip';                        // Change class for message
  elMsg.textContent = 'Username must be at least 5 characters'; // Add message
}

var el = document.getElementById('username');     // Username input
var elMsg = document.getElementById('feedback');  // Element to hold message

// When the username input gains / loses focus call functions above:
el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
el.addEventListener('blur', checkUsername, false);

var popup = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == popup) {
        modal.style.display = "none";
    }
}
