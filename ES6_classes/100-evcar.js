import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super();
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    const clonedCar = new Car();
    clonedCar._brand = this._brand;
    clonedCar._motor = this._motor;
    clonedCar._color = this._color;
    return clonedCar;
  }
}

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);
