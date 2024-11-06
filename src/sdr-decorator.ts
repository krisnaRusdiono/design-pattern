// Structural Design Pattern of Decorator
/*
Definition

The Decorator pattern lets you attach new behaviors to objects by placing them inside wrapper objects that contain the behaviors. If you're somewhat familiar with React and higher order components (HOC) this kind of approach probably rings a bell for you.
*/

// Create Base Class
class Coffee {
    cost(): number {
        return 5; // base cost of coffee
    }

    getDescription(): string {
        return "Simple coffee";
    }
}

// Create Decorator
class MilkDecorator {
    private coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    cost(): number {
        return this.coffee.cost() + 1; // adds cost of milk
    }

    getDescription(): string {
        return `${this.coffee.getDescription()}, with milk`; // adds milk to the description
    }
}

// Usage
const myCoffee = new Coffee();
console.log(`${myCoffee.getDescription()} costs $${myCoffee.cost()}`);

// Add milk
const myCoffeeWithMilk = new MilkDecorator(myCoffee);
console.log(`${myCoffeeWithMilk.getDescription()} costs $${myCoffeeWithMilk.cost()}`);
