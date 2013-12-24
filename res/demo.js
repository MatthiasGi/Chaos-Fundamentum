// Quoting demo
(function (document) {
  'use strict';

  document.addEventListener('DOMContentLoaded', function(event) {
    var target = document.querySelector('#demoQuoteTarget');
    var sources = document.querySelectorAll('[name="demoQuote"]');
    if (sources == null || sources == undefined
        || target == null || target == undefined) return;

    for (var i = sources.length - 1; i >= 0; i--) {
      sources[i].addEventListener('click', function(event) {
        target.setAttribute('lang', this.value);
      });
    }
  });
})(document);
