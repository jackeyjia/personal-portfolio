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

// Skills Progress Bar

// var startColor = '#FC5B3F';
// var endColor = '#9ec64d';

// var html = new ProgressBar.Circle(html5, {
//   color: '#aaa',
//   strokeWidth: 4,
//   trailWidth: 1,
//   easing: 'easeInOut',
//   duration: 1400,
//   text: {
//     autoStyleContainer: false,
//     value: 'HTML5'
//   },
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);

//   }
// });

// var opts = {
//   from: { color: '#FC5B3F'},
//   to: { color: '#9ec64d'}
// };

// html.animate(0.75, opts);

// var css = new ProgressBar.Circle(css3, {
//   color: '#aaa',
//   strokeWidth: 4,
//   trailWidth: 1,
//   easing: 'easeInOut',
//   duration: 1400,
//   text: {
//     autoStyleContainer: false,
//     value: 'CSS3'
//   },
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);

//   }
// });

// var opts = {
//   from: { color: '#FC5B3F'},
//   to: { color: '#9ec64d'}
// };

// css.animate(0.75, opts);


// var sass_1 = new ProgressBar.Circle(sass, {
//   color: '#aaa',
//   strokeWidth: 4,
//   trailWidth: 1,
//   easing: 'easeInOut',
//   duration: 1400,
//   text: {
//     autoStyleContainer: false,
//     value: 'SASS'
//   },
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);

//   }
// });

// var opts = {
//   from: { color: '#FC5B3F'},
//   to: { color: '#9ec64d'}
// };

// sass_1.animate(0.75, opts);

// var js = new ProgressBar.Circle(javascript, {
//   color: '#aaa',
//   strokeWidth: 4,
//   trailWidth: 1,
//   easing: 'easeInOut',
//   duration: 1400,
//   text: {
//     autoStyleContainer: false,
//     value: 'JavaScript'
//   },
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);

//   }
// });

// var opts = {
//   from: { color: '#FC5B3F'},
//   to: { color: '#9ec64d'}
// };

// js.animate(0.75, opts);

// var angular_js = new ProgressBar.Circle(angularjs, {
//   color: '#aaa',
//   strokeWidth: 4,
//   trailWidth: 1,
//   easing: 'easeInOut',
//   duration: 1400,
//   text: {
//     autoStyleContainer: false,
//     value: 'AngularJS'
//   },
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);

//   }
// });

// var opts = {
//   from: { color: '#FC5B3F'},
//   to: { color: '#9ec64d'}
// };

// angular_js.animate(0.75, opts);

// var angular_2 = new ProgressBar.Circle(angular, {
//   color: '#aaa',
//   strokeWidth: 4,
//   trailWidth: 1,
//   easing: 'easeInOut',
//   duration: 1400,
//   text: {
//     autoStyleContainer: false,
//     value: 'Angular'
//   },
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);

//   }
// });

// var opts = {
//   from: { color: '#FC5B3F'},
//   to: { color: '#9ec64d'}
// };

// angular_2.animate(0.75, opts);

// var node = new ProgressBar.Circle(nodejs, {
//   color: '#aaa',
//   strokeWidth: 4,
//   trailWidth: 1,
//   easing: 'easeInOut',
//   duration: 1400,
//   text: {
//     autoStyleContainer: false,
//     value: 'Node.js'
//   },
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);

//   }
// });

// var opts = {
//   from: { color: '#FC5B3F'},
//   to: { color: '#9ec64d'}
// };

// node.animate(0.75, opts);

// var db = new ProgressBar.Circle(mysql, {
//   color: '#aaa',
//   strokeWidth: 4,
//   trailWidth: 1,
//   easing: 'easeInOut',
//   duration: 1400,
//   text: {
//     autoStyleContainer: false,
//     value: 'MySQL'
//   },
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);

//   }
// });

// var opts = {
//   from: { color: '#FC5B3F'},
//   to: { color: '#9ec64d'}
// };

// db.animate(0.75, opts);

// var mongo = new ProgressBar.Circle(mongodb, {
//   color: '#aaa',
//   strokeWidth: 4,
//   trailWidth: 1,
//   easing: 'easeInOut',
//   duration: 1400,
//   text: {
//     autoStyleContainer: false,
//     value: 'Mongo DB'
//   },
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);

//   }
// });

// var opts = {
//   from: { color: '#FC5B3F'},
//   to: { color: '#9ec64d'}
// };

// mongo.animate(0.75, opts);

// var java_ = new ProgressBar.Circle(java, {
//   color: '#aaa',
//   strokeWidth: 4,
//   trailWidth: 1,
//   easing: 'easeInOut',
//   duration: 1400,
//   text: {
//     autoStyleContainer: false,
//     value: 'Java'
//   },
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);

//   }
// });

// var opts = {
//   from: { color: '#FC5B3F'},
//   to: { color: '#9ec64d'}
// };

// java_.animate(0.75, opts);

// var c_ = new ProgressBar.Circle(c, {
//   color: '#aaa',
//   strokeWidth: 4,
//   trailWidth: 1,
//   easing: 'easeInOut',
//   duration: 1400,
//   text: {
//     autoStyleContainer: false,
//     value: 'C'
//   },
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);

//   }
// });

// var opts = {
//   from: { color: '#FC5B3F'},
//   to: { color: '#9ec64d'}
// };

// c_.animate(0.75, opts);

// var cpp = new ProgressBar.Circle(cplusplus, {
//   color: '#aaa',
//   strokeWidth: 4,
//   trailWidth: 1,
//   easing: 'easeInOut',
//   duration: 1400,
//   text: {
//     autoStyleContainer: false,
//     value: 'C++'
//   },
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);

//   }
// });

// var opts = {
//   from: { color: '#FC5B3F'},
//   to: { color: '#9ec64d'}
// };

// cpp.animate(0.75, opts);


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