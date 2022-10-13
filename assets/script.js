var CampSerchAPI = "9EN8WYGJV7355PP4SB2VCKTF";
var ActivityScerchAPI = "KRQZWDV5975JT6JSUC25GAM7";
var campSites;

//  var button = $(".pure-button").on('click', fetchWeather())
$(document).ready(function() {
  $('.pure-button').click(function() {
    var name = $(".pure-input-rounded").val();
    console.log(name);
  })

// fetchWeather(name);
});

function fetchWeather (name) {
 // console.log(name);
fetch('http://api.amp.active.com/search?' + {name} + '&api_key=' + {CampSerchAPI}, {
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
}
//doesn't work 
//doesn't work
//doesn't work

  // type in a campground name 
  // hit search 
  // campground data appears

  // create an input box and link it to javascript
  // on click i need to get the campground name
  // now i can put the name in my API and go fetch the data 
