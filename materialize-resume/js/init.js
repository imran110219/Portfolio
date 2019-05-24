(function ($) {
  $(function () {

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


document.addEventListener('DOMContentLoaded', function (options) {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $('.slider').slider();
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 150) {
    $('.site-navigation').css('z-index', 10);
  }
  else {
    $('.site-navigation').css('z-index', 0);    
  }
});

//Function for setting fullscreen slider

function SetSlidersDimension(){
  var y = $(window).height();
  $('.slider').css('height', y+'px');  
  $('.slides').css('height', y+'px');
}

$(window).load(function(){
  SetSlidersDimension();
})

$(window).resize(function(){
  SetSlidersDimension();
});

