/**
 * Provides helper functions to enhance the theme experience.
 */

var $ = jQuery;
var $nav = $('.nav-wrapper');
var $navToggle = $('#menu-toggle');

( function( $ ) {
  function loadWindow() {
    configureMenu();
  }
  
  function resizeWindow() {
    if($(window).width() > 992) {
      $navToggle.removeClass('menu-toggle__active');
      $nav.show();
    } else {
      if(!($navToggle.hasClass('menu-toggle__active'))) {
        $nav.hide();
      } 
    }
  }
  
  function configureMenu() {
    if($navToggle.length > 0) {
      $navToggle.click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $navToggle.toggleClass('menu-toggle__active');
        $nav.stop().slideToggle();
      });
    } 
    $('.menu-item-has-children', $nav).each(function() {
      var $menuItem = $(this);
      var $menuDropdwon = $('ul', $menuItem);
      $menuItem.click(function(e) {
        if($(window).width() < 992) {
          e.stopPropagation();
          e.preventDefault();
          $menuDropdwon.stop().slideToggle();
        }
      });
    });
  }
  
  ( function() {
    loadWindow();
    $(window).resize(resizeWindow);
  } )();
} )( jQuery );
