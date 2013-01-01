/*
 * jQuery inView - v0.1.0
 * A small plugin to determine the position of the element on the viewport.
 * https://github.com/yefremov/jquery-inview
 *
 * Copyright (c) 2012 Anton Yefremov
 * Free to use and abuse under the MIT license.
 * http://opensource.org/licenses/MIT
 */

(function ( root, factory ) {
  'use strict';

  if ( typeof define === 'function' && define.amd ) {
    // AMD. Register as an anonymous module
    define( ['jquery'], function ( jQuery ) {
      factory( root, jQuery );
    });
  } else {
    // Browser globals
    factory( root, jQuery );
  }
} ( this, function ( window, $ ) {
  'use strict';

  // Static methods
  $.extend({
    // Return true if element is above viewport
    'above': function ( element, threshold ) {
      return $( window ).scrollTop() >= element.offset().top + element.height() + ( threshold || 0 );
    }

    // Return true if element is below viewport
  , 'below': function ( element, threshold ) {
      return $( window ).height() + $( window ).scrollTop() <= element.offset().top - ( threshold || 0 );
    }

    // Return distance from top of the screen till element top edge
  , 'distance': function ( element, threshold ) {
      return $( window ).height() + $( window ).scrollTop() - element.offset().top - ( threshold || 0 );
    }

    // Return true if element is in viewport
  , 'inview': function ( element, threshold ) {
      return $.above( element, threshold ) !== true && $.below( element, threshold ) !== true;
    }
  });
}));
