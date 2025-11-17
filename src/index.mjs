
const displayCars = [{
    Car:{
        carBrand:"BMW",
        color:"violet",
        "Tinted windows": true,
        wheels:{
            color: "worried green",
            thickness:50,
            brand:"Michelin"
        },
        carType: "Urban racer",
        carRating: 5.0
    }
}]

document.getElementById("document").innerHTML = GetHTMLCode(); 

function GetHTMLCode(){
    let htmlCode = "";
    
    for (let i = 0; i < displayCars.length; i++) {
        htmlCode += 
        `
        <div id="json">
        <h1> Car ${i + 1} </h1>
        <p> Car brand: ${displayCars[i].Car.carBrand}</p>
        <p> Car color: ${displayCars[i].Car.color}</p>
        <p> Car window tint: ${displayCars[i].Car["Tinted windows"]}</p>
        <p> Car wheels: </p>
        <li>Rim color: ${displayCars[i].Car.wheels.color}</li>
        <li>Wheel thickness: ${displayCars[i].Car.wheels.thickness}</li>
        <li>Wheel brand: ${displayCars[i].Car.wheels.brand}</li>
        <p> Car type: ${displayCars[i].Car.carType}</p>
        <p> Car Rating: ${displayCars[i].Car.carRating} </p>
        </div>
        `
    }

    return htmlCode;
}
