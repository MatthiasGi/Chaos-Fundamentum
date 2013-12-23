(function(document) {
  'use strict';

  document.addEventListener('DOMContentLoaded', function(event) {
    var collapses = document.querySelectorAll('[data-action="collapse"]');
    for (var i = collapses.length - 1; i >= 0; i--) {
      collapses[i].addEventListener('click', function(event) {
        var target = document.querySelector(this.dataset.target);
        target.classList.toggle('collapsed');
        target.classList.toggle('expanded');
      });
    }
  }, false);
})(document);
