//Works! may need to make a drop down menu for all states?
CampSerchAPI = "d99a2fc1-ab7f-4aa9-840f-4ea2e3a166a0"
MapboxAPI = "pk.eyJ1Ijoid3J4Mzk3aGQiLCJhIjoiY2w5YzRwN3o5NDg5ajN2dDVxb3lvc25uciJ9.NbryZB1WtlKheO6F_Kspww"

document.getElementById("submit").addEventListener("click", fetch)

fetch('https://ridb.recreation.gov/api/v1/facilityaddresses?query=&limit=10&offset=0&apikey='+CampSerchAPI, {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data['RECDATA']);
})

//need to do something on a page 
/*fetch('', {
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