fetch('https://api.spacexdata.com/v3/launches/next')
   	 .then(result => result.json())
  	.then((res) => {
    spaceX(res);
  })



function spaceX(result){
    var details = document.getElementById('launchDetails');
  details.innerHTML += "<span class='sp'>Flight Number: " + result.flight_number + "</span><br><br>";
  details.innerHTML += "<span>Mission Name:   " + result.mission_name + "</span><br><br>";
  details.innerHTML += "<span>Launch date: " + result.launch_date_utc + "</span><br><br>";
  details.innerHTML += "<span>Details: " + result.details + "</span>";
}