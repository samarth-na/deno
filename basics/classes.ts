class CarClass {
    maker: string;
    model: string;
    constructor(maker: string, model: string) {
        this.model = model;
        this.maker = maker;
    }

    drive() {
        console.log("Driving!");
    }
    info() {
        console.log(`Maker: ${this.maker} Model: ${this.model}`);
    }
}

const myCar = new CarClass("Toyota", "Corolla"); // Object created from the class
myCar.drive(); // Outputs: Driving!
