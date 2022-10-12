//Works! may need to make a drop down menu for all states?
//CampSerchAPI = "u5zcb98zk5zgfqvnp47tyc46"

document.getElementById("submit").addEventListener("click", fetch)

/*fetch('http://api.amp.active.com/camping/campgrounds/?pstate=MN&siteType=2001&hookup=3002&sewer=3007&pets=3010&api_key=u5zcb98zk5zgfqvnp47tyc46', {
  method: 'GET',
  mode: "no-cors",
 
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
*/
  //google maps API AIzaSyC9_TkzM_-uFH6tjC-d7T0k7YcSOmaCYus
/*
  fetch("https://maps.googleapis.com/maps/api/js?key=AIzaSyCUTcG2fB7T8jhOgj3Y780NCbeatPkvwgUus&callback=initMap", {
  method: 'GET',
  mode: "no-cors"
})
.then(function (data) {
  console.log(data);
});
*/
//Think this is for google map with marker for location?
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
