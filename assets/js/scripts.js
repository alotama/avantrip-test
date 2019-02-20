$(document).ready(function () {
  $('.graph__nav').off('click', '.graph__cell');

  var $graph__menu = $('.graph__main').flickity({
    asNavFor: ".graph__nav",
    contain: true,
    pageDots: false,
    draggable: false,
    accessibility: false,
    prevNextButtons: false
  });

  $('.graph__nav').on('click', '.graph__cell', function () {

    // On click check each graph__cell if have class 'is-selected'.
    $('.graph__nav .graph__cell').each(function(){
      if ($(this).hasClass('is-selected')) {

        // If someone have it, then remove class 'is-selected'.
        $(this).removeClass('is-selected is-nav-selected');
      }
    });

    // Add the class 'is-selected' to the 'graph__cell' selected previous.
    $(this).addClass('is-selected is-nav-selected');
    var index = $(this).index();
    $graph__menu.flickity('select', index);

  });

  $('.graph__nav').flickity({
    contain: true,
    pageDots: false,
    draggable: false,
    initialIndex: 5,
  });
});
