$(window).on('load', function(){

  var $container = $('.container');
  // initialize
  $container.masonry({
    itemSelector: '.col-2'
  });
});