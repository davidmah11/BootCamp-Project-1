//Works! may need to make a drop down menu for all states?
CampSerchAPI = "d99a2fc1-ab7f-4aa9-840f-4ea2e3a166a0"

document.getElementById("submit").addEventListener("click", fetch)

fetch('https://ridb.recreation.gov/api/v1/facilityaddresses?query=minnesota&limit=10&offset=0&apikey='+CampSerchAPI, {
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

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 30.39777709, lng: -88.796144988 };
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