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
  details.innerHTML += "<span>Rocket: " + result.rocket.rocket_id + "</span><br><br>"; // endret
  details.innerHTML += "<span>Rocket type: " + result.rocket.rocket_type + "</span><br><br>"; // endret
  details.innerHTML += "<span>Details: " + result.details + "</span><br><br>";
  
  
}

// shows mission logo 


fetch('https://api.spacexdata.com/v3/launches/next')
   .then(result => result.json())
   .then(result => {

	showLogo(result);

 	});


function showLogo(result) {
  var container = document.getElementById("output-logo");
  var image = document.createElement("img");
  image.setAttribute("src", result.links.mission_patch_small);
  container.appendChild(image);
}