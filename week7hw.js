var carArray = [];
var nextId = 1;

for (var i = 0; i < 10; i++) {

    var fillArray = [];

    for (var j = 0; j < 10; j++) {
        fillArray[j] = {
            model: "Toyota Camry",
            color: "green",
            year: "2003",
            mpg: 30.0,
            id: nextId
        }
        nextId += 1;

    }
    carArray[i] = fillArray;
}

console.log(carArray);

function getCarsBetweenIds(idMin, idMax) {
    newCar = [];
    for(var i = 0; i < 10; i++) {
        for(var j = 0; j <10; j++){
            carArray[i][j];

            if(idMin <= carArray[i][j].id && carArray[i][j].id <= idMax){
                newCar.push(carArray[i][j]);
                carArray[i][j].color = "blue";
            }
        }
    }

    return newCar;

}

console.log(getCarsBetweenIds(2, 7));
console.log(getCarsBetweenIds(1, 3));
console.log(getCarsBetweenIds(1, 5));

