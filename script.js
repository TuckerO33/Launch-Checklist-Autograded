// const scriptHelper = require('./scriptHelper');

// const { pickPlanet } = require("./scriptHelper");


// Write your JavaScript code here!

window.addEventListener("load", function() {

    


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch()
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let pickedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.imagUrl);


    })

    let button = document.getElementById("formSubmit");
    button.addEventListener("click", function(event){
    event.preventDefault();

    let list = document.getElementById("faultyItems");
    let pilotName =  document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    console.log(document, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
        formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);

    })

 });