$(document).ready(function(){
     'use strict';
     var windoh = $(window).height();
     $('body').height(windoh);
   
    $(".component-stert  .component--intro ").fadeOut(2000,function()
      {
          $(this).parent().fadeOut(1000,function(){
          $("body").css("overflow","auto");
          $(this).remove();
          $('body').height("100%");
      });
      
    }
    
     );
     const currentabout = location.href; 
     const menuitemabout = document.querySelectorAll('.navber-index .nav-item ');
      const menulengthabout = menuitemabout.length
     for (let j = 0; j<menulengthabout; j++){
      if(menuitemabout[j].href === currentabout) {
       menuitemabout[j].className = "active" 
         }
     }
         $('.navber-index .nav-item .nav-link').removeClass('active').removeAttr('aria-current');
         $('a[href="' + location.pathname + '"]').closest('li').addClass('active').attr('aria-current', 'page');
         $('.navber-index').css('background-color', '#f5f6f8');
                
   });

$(window).scroll(function(){
  $(' .navber-index').toggleClass('scrolled', $(this).scrollTop() > 50);
  });

// You can also pass an optional settings object
// below listed default settings

$(".counter").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-countto");
  countDuration = parseInt($this.attr("data-duration"));
  $({ counter: $this.text() }).animate(
    {
      counter: countTo
    },
    {
      duration: countDuration,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.counter));
      },
      complete: function () {
        $this.text(this.counter);
      }
    }
  );
});

/****/ 
$(function(){
  $('#people').multiSelect();
});
$(function(){
  $('#peoplet').multiSelect();
});
$(function(){
  $('#peopletr').multiSelect();
});
$('.rating').on('click', '.ratings_stars', function () {
  var star = $(this)
  star.addClass('selected')
  star.prevAll().addClass('selected')
  star.nextAll().removeClass('selected')
  $('#rating').val(star.data('rating'))
});
const currentabout = location.href; 
const menuitemabout = document.querySelectorAll('.navbar-dashboard .nav-link');
 const menulengthabout = menuitemabout.length
for (let j = 0; j<menulengthabout; j++){
 if(menuitemabout[j].href === currentabout) {
  menuitemabout[j].className = "active" 
    }
}
    $('.navbar-dashboard .nav-link').removeClass('active').removeAttr('aria-current');
    $('a[href="' + location.pathname + '"]').closest('li').addClass('active').attr('aria-current', 'page'); 
    ///
    const container = document.getElementById("chat");
const snap = document.getElementById("snap");

// Scroll the view to the bottom once initially
container.scrollTop = container.scrollHeight;

container.addEventListener("scroll", (event) => {
  const target = event.currentTarget;
  const scroll = target.scrollTop;
  const maxScroll = target.scrollHeight - target.clientHeight;
  const threshold = 50; // px
  isScrollBottomedOut = maxScroll - scroll < threshold;
  // If the user scrolls up more than the threshold, disable snapping
  // If the user scrolls down again, reenable snapping
  snap.style.display = isScrollBottomedOut ? "block" : "none";
});