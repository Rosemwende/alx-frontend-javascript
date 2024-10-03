import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent constructor to initialize brand, motor, and color
    super(brand, motor, color);
    this._range = range; // Initialize the range attribute
  }

  // Override the cloneCar method
  cloneCar() {
    return new Car(); // Return an instance of Car instead of EVCar
  }
}

export default EVCar;
