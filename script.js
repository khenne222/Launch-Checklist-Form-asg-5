// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/
//  First, let’s add validation to notify the user if they forgot to enter a value for any one of the fields. 
//  Fetch each of the four text input nodes and read their values. If any one is empty, alert the user with window.alert . 
//  (Hint: you may want to add id attributes to the inputs.)
// This process is going to look similar to the validation section in the chapter on forms. 
// Make sure to use preventDefault() to cancel form submission.
window.addEventListener("load", function () {
   fetch ( "https://handlers.education.launchcode.org/static/planets.json" ).then((response) => {
   response.json().then(function(json){
         let index = Math.floor(Math.random()*json.length);
         let data = json[index]
         let missionTarget = document.getElementById("missionTarget")
         //take html that ive created and place into html instead - into mission target location
          missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
             <li>Name: ${data.name}</li>
             <li>Diameter: ${data.diameter}</li>
             <li>Star: ${data.star}</li>
             <li>Distance from Earth: ${data.distance}</li>
             <li>Number of Moons: ${data.moons}</li>
         </ol>
         <img src="${data.image}">
         `
      })
   })


   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let itemStatus = document.getElementById("itemStatus");
   let launchStatus = document.getElementById("launchStatus");
   let launchStatusCheck = document.getElementById("launchStatusCheck");
   let launchForm = document.getElementById("launchForm");

   launchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let pilotName = document.querySelector("input[name=pilotName]");
      let pilot = pilotName.value;
      let pilotCheck = Number(pilot);

      let copiName = document.querySelector("input[name=copilotName");
      let copilot = copiName.value;
      let nameCheck = Number(copilot);

      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let level = fuelLevel.value;
      let levelCheck = Number(level);

      let cargoMass = document.querySelector("input[name=cargoMass]");
      let mass = cargoMass.value;
      let massCheck = Number(mass);

      if (!pilot || !copilot || !level || !mass) {
         //testing to see if item entered is not, not a number (double negative) - strings should equal false,
         //numbers will equal true 
         alert("All fields required");
      } else if (isNaN(pilotCheck) === false || isNaN(nameCheck) === false || isNaN(levelCheck) === true || isNaN(massCheck) === true) {
         alert("Make sure to enter valid information.")
      } else {
         itemStatus.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot: ${pilot}`
         copilotStatus.innerHTML = `Copilot: ${copilot}`
         fuelStatus.innerHTML = `Fuel Level: ${level}`
         cargoStatus.innerHTML = `Cargo Mass: ${mass}`
         if (level<10000 && mass >10000){
         launchStatus.innerHTML = "Shuttle not ready for launch.."
         launchStatus.style.color = "red"
         cargoStatus.innerHTML = "Cargo mass too high"
         fuelStatus.innerHTML = "Fuel level too low"
         }else if
         (level<10000){
         launchStatus.innerHTML = "Shuttle not ready for launch.."
         launchStatus.style.color = "red"
         fuelStatus.innerHTML = "Fuel Level low - Must be over 10000"
         }else if(mass > 10000) {
         launchStatus.innerHTML = "Shuttle not ready for launch.."
         launchStatus.style.color = "red"
         cargoStatus.innerHTML = "Cargo mass TOO HIGH - offload"  
         }else{
            launchStatus.innerHTML = "Shuttle is ready for launch"
            launchStatus.style.color = "green"
            cargoStatus.innerHTML = "Cargo mass less than 10000"
            fuelStatus.innerHTML = "Fuel level acceptable greater than 10000"
         }
      


      }



      // The pilot and co-pilot names should be strings and the fuel
      // level and cargo mass should be numbers. If any of these conditions is not met, alert the user.
      // *Note: If you want to check if something is NaN , you cannot use == or* * === . Instead, JavaScript has a built-in method called isNaN(value) * *that returns true if value is NaN and false if value is not*
      // *NaN.*

   });


});