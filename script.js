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
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargostatus");
   let itemStatus = document.getElementById("itemStatus");
   let launchStatus = document.getElementById("launchStatus");
   let launchStatusCheck = document.getElementById("launchStatusCheck");
   let missionTarget = document.getElementById("missionTarget");
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
      let levelCheck = Number (level);

      let cargoMass = document.querySelector("input[name=cargoMass]");
      let mass = cargoMass.value;
      let massCheck = Number (mass);

      if (!pilot ||!copilot ||!level ||!mass ){
         //testing to see if item entered is not, not a number (double negative) - strings should equal false,
         //numbers will equal true 
             alert("All fields required");
         } else if(isNaN(pilotCheck) === false || isNaN(nameCheck) === false || isNaN(levelCheck) === true || isNaN(massCheck) === true){
             alert("Make sure to enter valid information.")
            }



      // The pilot and co-pilot names should be strings and the fuel
      // level and cargo mass should be numbers. If any of these conditions is not met, alert the user.
      // *Note: If you want to check if something is NaN , you cannot use == or* * === . Instead, JavaScript has a built-in method called isNaN(value) * *that returns true if value is NaN and false if value is not*
      // *NaN.*

   });


});