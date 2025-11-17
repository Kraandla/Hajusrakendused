
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

document.getElementById("app").innerHTML = GetHTMLCode(); 

function GetHTMLCode(){
    let htmlCode;
    
    for (i=1; i<displayCars.length + 1; i++) {

    }

    return htmlCode;
}


function displayCars(){
    const p = document.createElement("p");
    p.innerHTML = `Brand of car: ${displayCars[0].Car.carBrand}`;
    document.body.appendChild(p);
}
