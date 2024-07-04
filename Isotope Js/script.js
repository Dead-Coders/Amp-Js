$('.port-item').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });

  $('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active')

    var selector = $(this).attr('data-filter');
    $('.port-item').isotope({
        filter:selector
    });
    return false
  })

