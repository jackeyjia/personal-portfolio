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

var startColor = '#FC5B3F';
var endColor = '#9ec64d';


var html = new ProgressBar.Circle(html5, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false,
    value: 'HTML5'
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    
  }
});

var opts = {
  from: { color: '#FC5B3F'},
  to: { color: '#9ec64d'}
};

html.animate(0.75, opts);  // Number from 0.0 to 1.0


var css = new ProgressBar.Circle(css3, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false,
    value: 'CSS3'
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    
  }
});

var opts = {
  from: { color: '#FC5B3F'},
  to: { color: '#9ec64d'}
};

css.animate(0.75, opts);  // Number from 0.0 to 1.0


var sass_1 = new ProgressBar.Circle(sass, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false,
    value: 'SASS'
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    
  }
});

var opts = {
  from: { color: '#FC5B3F'},
  to: { color: '#9ec64d'}
};

sass_1.animate(0.75, opts);  // Number from 0.0 to 1.0


var js = new ProgressBar.Circle(javascript, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false,
    value: 'JavaScript'
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    
  }
});

var opts = {
  from: { color: '#FC5B3F'},
  to: { color: '#9ec64d'}
};

js.animate(0.75, opts);  // Number from 0.0 to 1.0


var angular_js = new ProgressBar.Circle(angularjs, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false,
    value: 'AngularJS'
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    
  }
});

var opts = {
  from: { color: '#FC5B3F'},
  to: { color: '#9ec64d'}
};

angular_js.animate(0.75, opts);  // Number from 0.0 to 1.0

var angular_2 = new ProgressBar.Circle(angular, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false,
    value: 'Angular'
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    
  }
});

var opts = {
  from: { color: '#FC5B3F'},
  to: { color: '#9ec64d'}
};

angular_2.animate(0.75, opts);  // Number from 0.0 to 1.0


var node = new ProgressBar.Circle(nodejs, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false,
    value: 'Node.js'
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    
  }
});

var opts = {
  from: { color: '#FC5B3F'},
  to: { color: '#9ec64d'}
};

node.animate(0.75, opts);  // Number from 0.0 to 1.0

var db = new ProgressBar.Circle(mysql, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false,
    value: 'MySQL'
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    
  }
});

var opts = {
  from: { color: '#FC5B3F'},
  to: { color: '#9ec64d'}
};

db.animate(0.75, opts);  // Number from 0.0 to 1.0
