function Car(model, year, color, mpg) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
}

var car1 = new Car("Toyota", "2009", "blue", 40.0);
var car2 = new Car("Lexus", "2016", "green", 62.0);
var car3 = new Car("Acura", "2022", "white", 50.0);

console.log(car1.mpg);
console.log(car2.mpg);
console.log(car3.mpg);

function Vehicle(car) {
    this.car = car;
}

var toyotaCar = new Vehicle(toyota);
var lexusCar = new Vehicle(lexus);
var acuraCar = new Vehicle(acura);

console.log(toyota.car.mpg);
console.log(lexus.car.mpg);
console.log(acura.car.mpg);