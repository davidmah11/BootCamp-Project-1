//Works! may need to make a drop down menu for all states?
CampSerchAPI = "d99a2fc1-ab7f-4aa9-840f-4ea2e3a166a0"
MapboxAPI = "pk.eyJ1Ijoid3J4Mzk3aGQiLCJhIjoiY2w5YzRwN3o5NDg5ajN2dDVxb3lvc25uciJ9.NbryZB1WtlKheO6F_Kspww"

navigator.geolocation.getCurrentPosition(
  function (position) {
     userLocation(position.coords.latitude, position.coords.longitude)
  },
  function errorCallback(error) {
     console.log(error)
  }
);
function userLocation(lat, lng) {
  var myLatLng = {
     lat,
     lng
  };
  var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 10,
     center: myLatLng
  });
  var marker = new google.maps.Marker({
     position: myLatLng,
     map: map,
  });
}

document.getElementById("submit").addEventListener("click", findCampground)

function findCampground(event){ 
  event.preventDefault()
  console.log('https://ridb.recreation.gov/api/v1/campsites?query='+UserText+'&limit=10&offset=0&apikey='+CampSerchAPI)
  var UserText = document.getElementById("textBox").value
  fetch('https://ridb.recreation.gov/api/v1/campsites?query='+UserText+'&limit=10&offset=0&apikey='+CampSerchAPI, {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
})
  .then(function (response) {
    console.log(response)
    return response.json();
  })
  .then(function (data) {
    console.log(data['RECDATA']);
    initMap(data['RECDATA'])

    localStorage.setItem("UserInput", JSON.stringify(UserText));
    saveText();

    function saveText() {
      var lastGrade = JSON.parse(localStorage.getItem("UgserInput"));
      console.log("hello")
    }
})
}
  //Think this is for google map with marker for location?
  // Initialize and add the map
  function initMap(data) {
    
    console.log(data)
    const uluru = { lat: 25, lng: 131};
   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
   
    for (let i = 0; i < data.length; i++) {
      var marker = new google.maps.Marker({
      position: { lat: data[i]['CampsiteLatitude'], lng: data[i]['CampsiteLongitude']},
      zoom: 10,
      center: [],
      map: map,

            //this was supposed to center the map to the new markers, doesnt work.
      // centralize() {
      //   const bounds = new google.maps.LatLngBounds();
      //   this.markerList.forEach((marker) => {
      //       bounds.extend(new google.maps.LatLng(marker.lat, marker.lng))
      //   })
      //   this.map.fitBounds(bounds)
    // }});
    }}
  
  // window.initMap = initMap;