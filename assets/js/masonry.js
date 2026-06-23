$(document).ready(function() {
  var isMobile = window.innerWidth <= 576;
  
  var $grid = $('.grid').masonry({
    gutter: isMobile ? 0 : 10,
    horizontalOrder: true,
    itemSelector: '.grid-item',
    columnWidth: isMobile ? window.innerWidth : '.grid-sizer',
  });
  
  $grid.imagesLoaded().progress(function() {
    $grid.masonry('layout');
  });

  $(window).resize(function() {
    var mobile = window.innerWidth <= 576;
    $grid.masonry({
      gutter: mobile ? 0 : 10,
      columnWidth: mobile ? window.innerWidth : '.grid-sizer',
    });
    $grid.masonry('layout');
  });
});