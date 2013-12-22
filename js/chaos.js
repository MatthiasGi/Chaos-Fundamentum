/******************************************************************************\
|*                                                                            *|
|*                             Chaos Fundamentum                              *|
|*                                                                            *|
\******************************************************************************/

// Polyfill
// -----------------------------------------------------------------------------
//@prepros-append vendor/classList.js


// Vendor scripts
// -----------------------------------------------------------------------------
//@prepros-append vendor/fastclick.js
window.addEventListener('load', function() {
  new FastClick(document.body);
}, false);


// Optional Modules
// -----------------------------------------------------------------------------
//@prepros-append modules/performance.js
//@prepros-append modules/collapse.js
