//Works! may need to make a drop down menu for all states?
CampSerchAPI = "d99a2fc1-ab7f-4aa9-840f-4ea2e3a166a0"

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
  var UserText = document.getElementById("textBox").value
  fetch('https://ridb.recreation.gov/api/v1/campsites?query='+UserText+'&limit=10&offset=0&apikey='+CampSerchAPI, {
// fetch('https://ridb.recreation.gov/api/v1/facilityaddresses?query=&limit=10&offset=0&apikey='+CampSerchAPI, {
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
      var lastSerch = JSON.parse(localStorage.getItem("UgserInput"));
      console.log("hello")
    }
})
}

  function initMap(data) {
    // The location of Uluru
    console.log(data)
    const uluru = { lat: 46.392410, lng: -94.636230};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    for (let i = 0; i < data.length; i++) {
      var marker = new google.maps.Marker({
      position: { lat: data[i]['CampsiteLatitude'], lng: data[i]['CampsiteLongitude']},
      map: map,
     });
    }
    }
  
   //window.initMap = initMap;