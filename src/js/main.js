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

// window.onload = function onLoad() {
//   var circle = new ProgressBar.Circle('#bar', {
//     color: startColor,
//     duration: 3000,
//     easing: 'easeInOut',
//     strokeWidth: 8,
//     text: {
//       autoStyleContainer: false
//     },

//     // Set default step function for all animate calls
//     step: function(state, circle) {
//       circle.path.setAttribute('stroke', state.color);
//       circle.path.setAttribute('stroke-width', state.width);

//       var value = Math.round(circle.value() * 100);
//       if (value === 0) {
//         circle.setText('');
//       } else {
//         circle.setText(value);
//       }
//     }
//   });
//   // This will get the number from the page
//   var value = ($('.progress').attr('value') / 100);

//   // This will determine the circumference of the circle
//   circle.animate(value, {
//     from: {color: startColor},
//     to: {color: endColor}
// 	});
// };

  var bar = new ProgressBar.Circle(container, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false,
      value: '20'
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
      
    }
  });
  
  bar.animate(0.75);  // Number from 0.0 to 1.0
  