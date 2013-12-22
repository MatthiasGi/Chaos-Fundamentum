
/**
 * Disables every hover action while scrolling.
 *
 * http://thecssninja.com/javascript/pointer-events-60fps
 */
(function(window, document) {
  'use strict';

  var body = document.body;
  var timer;

  window.addEventListener('scroll', function() {
    clearTimeout(timer);
    if (!body.classList.contains('c-hover-disable')) {
      body.classList.add('c-hover-disable');
    }

    timer = setTimeout(function() {
      body.classList.remove('c-hover-disable');
    }, 500);
  });
})(window, document);
