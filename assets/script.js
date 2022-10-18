//Works! may need to make a drop down menu for all states?
CampSerchAPI = "d99a2fc1-ab7f-4aa9-840f-4ea2e3a166a0"
MapboxAPI = "pk.eyJ1Ijoid3J4Mzk3aGQiLCJhIjoiY2w5YzRwN3o5NDg5ajN2dDVxb3lvc25uciJ9.NbryZB1WtlKheO6F_Kspww"

document.getElementById("submit").addEventListener("click", fetch)

fetch('https://ridb.recreation.gov/api/v1/campsite?query=&limit=10&offset=0&apikey='+CampSerchAPI, {
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