
 /* === LOADER.CSS === */ 

// $('.click_me').on('mouseover',function() {
//         var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
//         $('.click_me').css({
//           'color' : randomColor,
//           'font-weight' : '600',
//         });
// });

// $('.click_me').on('mouseout',function() {
//     $('.click_me').css({
//       'color' : '#fff',
//       'font-weight' : 'normal',
//     });
// });

$('.slick').slick({
  centerMode: true,
  slidesToShow: 3,
  dots: false,
  arrows: true,
  swipe: true,
  infinite: true,
  swipeToSlide: true,
  prevArrow: $('#slick-arrow-left'),
  nextArrow: $('#slick-arrow-right'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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

$('.close-button').on('click', function() {
  $('.popup').fadeOut();
  $('#bottomBtn').fadeIn();
});


$('#bottomBtn').on('click', function() {
  $('.popup').fadeIn();
});

 /* === IP Location TEST === */
const getIP = async () => {
    let ip;
    await fetch('https://api.ipify.org/?format=json')
    .then(result => result.json())
    .then(data => {
        ip = data.ip;
        console.log(ip)
    });
};
