//Works! may need to make a drop down menu for all states?
var CampSerchAPI = "u5zcb98zk5zgfqvnp47tyc46";

document.getElementById("submit").addEventListener("click", fetch)

fetch('http://api.amp.active.com/camping/campgrounds/?pstate=MN&siteType=2001&hookup=3002&sewer=3007&pets=3010&api_key=u5zcb98zk5zgfqvnp47tyc46', {
  method: 'GET',
  mode: "no-cors",
 
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  //google maps API
  var googleAPIKey = 
