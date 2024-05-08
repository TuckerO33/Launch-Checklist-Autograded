// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    let validity;
    if (testInput === "") {
        return validity = "Empty";
    }
    if (isNaN(Number(testInput))) {
        return validity = "Not a Number";
    } else {
        return validity = "Is a Number"
    }
}
 
;

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
       return window.alert("All fields are required");
    };
    if (!(validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number" && 
    (validateInput(fuelLevel)) === "Is a Number" && (validateInput(cargoLevel)) === "Is a Number")) {
        console.log(pilot, copilot, fuelLevel, cargoLevel);
       return window.alert("Pilot and Copilot need names (not numbers!) and the Fuel Level and Cargo Level need numbers (not names!)")
    
    };
       list.setAttribute("style", "");
       let pilotStatus =  document.getElementById("pilotStatus");
       let copilotStatus = document.getElementById("copilotStatus")
       let launchStatus = document.getElementById("launchStatus")
       let fuelLevelStatus = document.getElementById("fuelStatus")
       let cargoLevelStatus = document.getElementById('cargoStatus')
       pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch!`;
       copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch!`;
       if (Number(fuelLevel) < 10000) {
           fuelLevelStatus.innerHTML = "Fuel level too low for launch";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = 'red'
       };
       if (Number(cargoLevel) > 10000) {
           cargoLevelStatus.innerHTML = "Cargo mass too heavy for launch";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = 'red'
       };
       if (Number(cargoLevel) <= 10000) {
           cargoLevelStatus.innerHTML = "Cargo mass low enough for launch";
       };
       if (Number(fuelLevel) >= 10000) {
           fuelLevelStatus.innerHTML = "Fuel level high enough for launch";
       };
       if (Number(cargoLevel) <= 10000 && Number(fuelLevel) >= 10000) {
           launchStatus.innerHTML = "Shuttle is Ready for Launch";
           launchStatus.style.color = 'green'
       };

        
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {response.json()
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
   return planets[Math.floor(planets.length * Math.random())]
 }
 

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;