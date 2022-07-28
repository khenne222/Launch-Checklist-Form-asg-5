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

   form.addEventListener("submit", (event) => {
      event.preventDefault();
   
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargostatus");
      let itemStatus = document.getElementById("itemStatus");
      let launchStatus = document.getElementById("launchStatus");
      let launchStatusCheck = document.getElementById("launchStatusCheck");
      let missionTarget = document.getElementById("missionTarget");
      let launchForm = document.getElementById("launchForm");




});