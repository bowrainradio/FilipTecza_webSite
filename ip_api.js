 /* === IP Location TEST === */

fetch('https://api.ipgeolocation.io/ipgeo?apiKey=4a0a0e2ab66c48c1830c30d1eb87441c')
.then(function(response) {
  response.json().then(jsonData => {
    // console.log(jsonData)
    ip_address = jsonData.ip
    city = jsonData.city
    state = jsonData.state_prov
    country = jsonData.country_name
    $(".ipAdd").append(ip_address);
    $(".city").append(city +"|"+country)
    $(".country").append(country)
    console.log("I know your IP Adress: "+ip_address)
    console.log("And you city: "+city)
    console.log("******Consider getting VPN, if I can find you, others will too******")
  });
});


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