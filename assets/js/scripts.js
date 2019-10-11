$(function() {
    var img = document.querySelectorAll("p img");
    for (var i = 0; i < img.length; i++) {
      $(img[i]).on('click', function() {
        $('.enlargeImageModalSource').attr('src', $(this).attr('src'));
        $('#enlargeImageModal').modal('show');
      });
		}
});	

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400, function() {
          // Callback after animation
        });
      }
    }
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();
//var onPalm = $('#onPalm').is(':visible');

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
     hasScrolled();
      didScroll = false;
    }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
      
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
      return;
      
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
      $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
    // Scroll Up
    if(st + $(window).height() < $(document).height()) {
      $('nav').removeClass('nav-up').addClass('nav-down');
    }
  }   
  lastScrollTop = st;
}  

//Check if objects are overlapping 

function isOverlapping(rect1, rect2) {
  var overlap = !(rect1.right < rect2.left || 
                rect1.left > rect2.right || 
                rect1.bottom < rect2.top || 
                rect1.top > rect2.bottom);
  return overlap;
}

//Fade side menu when it collides with big images

window.onscroll = function () {
  hideMenuIfOverlap();
}

window.onload = function () {
  // hideMenuIfOverlap();
}

function hideMenuIfOverlap() {
  var bigImages = document.getElementsByClassName("big-image");
  var menu = document.getElementById("menu");
  var menuPosition = menu.getBoundingClientRect();
  var imagesLength = bigImages.length;


  var overlap = false;

  for (var i = 0; i < imagesLength; i++) {
    overlap = overlap || isOverlapping(menuPosition, bigImages[i].getBoundingClientRect());
  } 

  if (overlap) {
    document.getElementById("menu").className = document.getElementById("menu").className.replace("show-menu", "hide-menu");
  } else {
    document.getElementById("menu").className = document.getElementById("menu").className.replace("hide-menu", "show-menu");
  }
}













