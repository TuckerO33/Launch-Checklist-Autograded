// const scriptHelper = require('./scriptHelper');

// Write your JavaScript code here!

window.addEventListener("load", function() {

    


    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse = myFetch('x')
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })
    let launchForm = document.getElementById("launchForm");
    let button = document.getElementById("formSubmit");
    let list = document.getElementById("faultyItems");
    let pilotName =  document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let pilotStatus =  document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelLevelStatus = document.getElementById("fuelStatus")
    let cargoLevelStatus = document.getElementById("cargoStatus")
    let launchStatus = document.getElementById("launchStatus")
    button.addEventListener("click", function(event){
    event.preventDefault();
    console.log(launchForm, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
        formSubmission(launchForm, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
        pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch!`;
        copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch!`;
        if (fuelLevel.value < 10000) {
            fuelLevelStatus.innerHTML = "Not enough fuel, ya dingus! Add at least 10,000 liters";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = 'red'
        };
        if (cargoMass.value > 10000) {
            cargoLevelStatus.innerHTML = "Too much cargo, ya dingus! Get cargo weight below 10,000 kg";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = 'red'
        };
        if (cargoMass.value <= 10000) {
            cargoLevelStatus.innerHTML = "Cargo mass low enough for launch";
        };
        if (fuelLevel.value >= 10000) {
            fuelLevelStatus.innerHTML = "Fuel level high enough for launch";
        };
        if (cargoMass.value <= 10000 && fuelLevel.value >= 10000) {
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = 'green'
        };
    })

 });