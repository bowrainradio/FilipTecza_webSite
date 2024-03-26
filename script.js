
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
/*
fetch('https://api.ipify.org?format=json')
.then(function(response) {
  response.json().then(jsonData => {
    ip_address = jsonData.ip
    $.getScript(("http://www.geoplugin.net/json.gp?ip="+ip_address), function () {
        console.log("I know your IP Adress: "+ip_address)
        console.log("Consider getting VPN, if I can find you others will!!!!")
        console.log("Welcome to my Website dear visitor from "+geoplugin_city()+", "+geoplugin_countryName())
    });
  });
});
*/

fetch('https://api.ipgeolocation.io/ipgeo?apiKey=4a0a0e2ab66c48c1830c30d1eb87441c')
.then(function(response) {
  response.json().then(jsonData => {
    // console.log(jsonData)
    ip_address = jsonData.ip
    city = jsonData.city
    state = jsonData.state_prov
    country = jsonData.country_name
    //Adding city | state to the bottomMenu
    $(".city").append(city +"|"+country)
    console.log("I know your IP Adress: "+ip_address)
    console.log("And you city: "+city)
    console.log("******Consider getting VPN, if I can find you, others will too******")
  });
});

