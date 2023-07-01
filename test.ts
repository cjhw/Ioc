import { Provide, Inject, Container } from "./index";

@Provide("DriverService")
class Driver {
  adapt(consumer: string) {
    console.log(`\n === 驱动已生效于 ${consumer}！===\n`);
  }
}

@Provide()
class Fuel {
  fill(consumer: string) {
    console.log(`\n === 燃料已填充完毕 ${consumer}！===`);
  }
}

@Provide()
class Car {
  @Inject()
  driver!: Driver;

  @Inject()
  fule!: Fuel;

  run() {
    this.fule.fill("Car");
    this.driver.adapt("Car");
  }
}

@Provide()
class Bus {
  @Inject("DriverService")
  driver!: Driver;

  @Inject("Fuel")
  fule!: Fuel;

  run() {
    this.fule.fill("Bus");
    this.driver.adapt("Bus");
  }
}

const car = Container.get(Car)!;
// const bus = Container.get(Bus)!;

car.run();
// bus.run();
