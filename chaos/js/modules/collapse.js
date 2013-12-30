(function(document) {
  'use strict';

  document.addEventListener('DOMContentLoaded', function(event) {

    document.body.classList.add('c-collapse');

    var collapses = document.querySelectorAll('[data-action="collapse"]');
    for (var i = collapses.length - 1; i >= 0; i--) {
      var target = document.querySelector(collapses[i].dataset.target);
      console.log(target);
      if (target.classList.contains('collapsed') === target.classList.contains('expanded')) {
        target.classList.toggle('collapsed');
      }

      collapses[i].addEventListener('click', function(event) {
        var target = document.querySelector(this.dataset.target);
        target.classList.toggle('collapsed');
        target.classList.toggle('expanded');
      });
    }
  }, false);
})(document);
