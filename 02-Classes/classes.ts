// Creating a class "Car" which will be the bluePrint of our Object
class Car {
    engineName: string;
    gears: number;
    private speed: number;

    constructor(speed: number) {
        this.speed = speed || 0;
    }

    accelerate(): void {
        this.speed++;
    }

    throttle(): void {
        this.speed--;
    }

    getSpeed(): void {
        console.log(this.speed);
    }

    static numberOfWheels(): number {
        return 4;
    }
}


let carObject = new Car(50);
carObject.accelerate();
carObject.getSpeed();

console.log(Car.numberOfWheels());