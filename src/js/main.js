// Timeline 
(function() {
  
  'use strict';
  
  var items = document.querySelectorAll(".timeline li");
  
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }
  
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
  
})();


// Add animation when scrool to skills section
function isElementInViewport(elem) {
  var $elem = $(elem);

  var scrollElement = ((navigator.userAgent.toLocaleLowerCase().indexOf('webkit') != -1)? 'body' : 'html');
  var viewportTop = $(scrollElement).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  var elemTop = Math.round($elem.offset().top);
  var elemBottom = elemTop + $elem.height();

  return ((elemTop < viewportBottom) && (elemBottom > viewportBottom));
}

function checkAnimation() {
  var $elem = $('#cards');
  if ($elem.hasClass('fadeInUp')) return;

  if (isElementInViewport($elem)) {
    $elem.addClass('animated fadeInUp');
  }
}

$(window).scroll(function() {
  checkAnimation();
});

// Socia Media Icon

var lkiIcon = document.getElementById('linkedIn-icon');
// lkiIcon.onmouseenter = function () {
//   lkiIcon.setAttribute("src", "src/img/socialMedia/LinkedIn_Color.png");
// };
// lkiIcon.onmouseleave = function () {
//   lkiIcon.setAttribute("src", "src/img/socialMedia/LinkedIn.png");
// };
lkiIcon.onclick = function () {
  window.location.href = "http://www.linkedin.com/in/jackeyjia";
};

var ghIcon = document.getElementById('github-icon');
// ghIcon.onmouseenter = function () {
//   ghIcon.setAttribute("src", "src/img/socialMedia/GitHub_Color.png");
// };
// ghIcon.onmouseleave = function () {
//   ghIcon.setAttribute("src", "src/img/socialMedia/GitHub.png");
// };
ghIcon.onclick = function () {
  window.location.href = "https://github.com/jackeyjia";
};
