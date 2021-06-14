// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
import "../../node_modules/@popperjs/core/dist/umd/popper.min.js";

// Import the required DOM management plugins first
import "../../node_modules/bootstrap/js/dist/dom/data.js";
import "../../node_modules/bootstrap/js/dist/dom/event-handler.js";
import "../../node_modules/bootstrap/js/dist/dom/manipulator.js";
import "../../node_modules/bootstrap/js/dist/dom/selector-engine.js";
import "../../node_modules/bootstrap/js/dist/base-component.js";

// Then your specific components
import "../../node_modules/bootstrap/js/dist/dropdown.js";
import "../../node_modules/bootstrap/js/dist/offcanvas.js";

$(function () {
  $('.skitter-large').skitter({
    theme:'default',
    navigation: true,
    dots: true,
    // focus:true,
    // controls:true,
    progressbar: true,
    animation: 'random',
    // theme:'round',
    responsive: {
      small: {
        animation: 'fade',
        max_width: 768,
        suffix: '-small'
      },
      medium: {
        animation: 'directionRight',
        max_width: 1024,
        suffix: '-medium'
      }
    }
  });
});