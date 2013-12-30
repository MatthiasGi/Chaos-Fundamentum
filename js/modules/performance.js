/**
 * Disables every hover action while scrolling.
 *
 * http://thecssninja.com/javascript/pointer-events-60fps
 */
(function(window, document) {
  'use strict';

  document.addEventListener('DOMContentLoaded', function(event) {
    var body = document.body;
    var timer;

    body.classList.add('c-performance');

    window.addEventListener('scroll', function() {
      clearTimeout(timer);
      if (!body.classList.contains('c-hover-disable')) {
        body.classList.add('c-hover-disable');
      }

      timer = setTimeout(function() {
        body.classList.remove('c-hover-disable');
      }, 500);
    });
  });
})(window, document);
