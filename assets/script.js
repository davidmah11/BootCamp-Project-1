var CampSerchAPI = "9EN8WYGJV7355PP4SB2VCKTF";
var ActivityScerchAPI = "KRQZWDV5975JT6JSUC25GAM7";
var campSites;

var button = $(".submit").on('click', fetch)

fetch('http://api.amp.active.com/search?{campSites}&api_key={CampSerchAPI}', {
  method: 'GET',
  credentials: 'same-origin', 
  redirect: 'follow', 
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  //doesn't work 
