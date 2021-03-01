
 /* === LOADER.CSS === */ 

$('.click_me').on('mouseover',function() {
        var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
        $('.click_me').css({
          'color' : randomColor,
          'font-weight' : '600',
        });
});

$('.click_me').on('mouseout',function() {
    $('.click_me').css({
      'color' : '#fff',
      'font-weight' : 'normal',
    });
});

 /* === FOOTER === */

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 100) {
        $('.bottomMenu').fadeIn();
    } else {
        $('.bottomMenu').fadeOut();
    }
});



