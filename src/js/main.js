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
var fbIcon = document.getElementById('facebook-icon');
fbIcon.onmouseenter = function () {
  fbIcon.setAttribute("src", "src/img/socialMedia/Facebook_Color.png");
};
fbIcon.onmouseleave = function () {
  fbIcon.setAttribute("src", "src/img/socialMedia/Facebook.png");
};

var gplusIcon = document.getElementById('googlePlus-icon');
gplusIcon.onmouseenter = function () {
  gplusIcon.setAttribute("src", "src/img/socialMedia/GooglePlus_Color.png");
};
gplusIcon.onmouseleave = function () {
  gplusIcon.setAttribute("src", "src/img/socialMedia/GooglePlus.png");
};

var lkiIcon = document.getElementById('linkedIn-icon');
lkiIcon.onmouseenter = function () {
  lkiIcon.setAttribute("src", "src/img/socialMedia/LinkedIn_Color.png");
};
lkiIcon.onmouseleave = function () {
  lkiIcon.setAttribute("src", "src/img/socialMedia/LinkedIn.png");
};

var tbrIcon = document.getElementById('tumblr-icon');
tbrIcon.onmouseenter = function () {
  tbrIcon.setAttribute("src", "src/img/socialMedia/Tumblr_Color.png");
};
tbrIcon.onmouseleave = function () {
  tbrIcon.setAttribute("src", "src/img/socialMedia/Tumblr.png");
};

var pttIcon = document.getElementById('pinterest-icon');
pttIcon.onmouseenter = function () {
  pttIcon.setAttribute("src", "src/img/socialMedia/Pinterest_Color.png");
};
pttIcon.onmouseleave = function () {
  pttIcon.setAttribute("src", "src/img/socialMedia/Pinterest.png");
};

var ghIcon = document.getElementById('github-icon');
ghIcon.onmouseenter = function () {
  ghIcon.setAttribute("src", "src/img/socialMedia/GitHub_Color.png");
};
ghIcon.onmouseleave = function () {
  ghIcon.setAttribute("src", "src/img/socialMedia/GitHub.png");
};

var twIcon = document.getElementById('twitter-icon');
twIcon.onmouseenter = function () {
  twIcon.setAttribute("src", "src/img/socialMedia/Twitter_Color.png");
};
twIcon.onmouseleave = function () {
  twIcon.setAttribute("src", "src/img/socialMedia/Twitter.png");
};

var wcIcon = document.getElementById('weChat-icon');
wcIcon.onmouseenter = function () {
  wcIcon.setAttribute("src", "src/img/socialMedia/Weixing_Color.png");
};
wcIcon.onmouseleave = function () {
  wcIcon.setAttribute("src", "src/img/socialMedia/Weixing.png");
};



function myMap() {
  var mapOptions = {
      center: new google.maps.LatLng(43.4722854,-80.5448576,15),
      zoom: 14,
  };
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}