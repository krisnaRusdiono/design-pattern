// Creation Design Pattern of Abstract Factory
/*
Definition

The Abstract Factory pattern allows us to produce families of related objects without specifying concrete classes. It's useful in situations where we need to create objects that share only some properties and methods.
*/

// Example of Abstract Factory on Class
// Define base interface
interface Circle {
    draw(): void;
}

interface Square {
    draw(): void;
}

// Create variety of Circle and Square
class RedCircle implements Circle {
    draw(): void {
        console.log("Drawing a red circle");
    }
}

class BlueCircle implements Circle {
    draw(): void {
        console.log("Drawing a blue circle");
    }
}

class RedSquare implements Square {
    draw(): void {
        console.log("Drawing a red square");
    }
}

class BlueSquare implements Square {
    draw(): void {
        console.log("Drawing a blue square");
    }
}

// Create factory interface
interface ShapeFactory {
    createCircle(): Circle;
    createSquare(): Square;
}

// Implements factory interface
class RedShapeFactory implements ShapeFactory {
    createCircle(): Circle {
        return new RedCircle();
    }

    createSquare(): Square {
        return new RedSquare();
    }
}

class BlueShapeFactory implements ShapeFactory {
    createCircle(): Circle {
        return new BlueCircle();
    }

    createSquare(): Square {
        return new BlueSquare();
    }
}

// Usage
// Client code
function main() {
    function drawShapes(factory: ShapeFactory) {
        const circle = factory.createCircle();
        const square = factory.createSquare();

        circle.draw();
        square.draw();
    }

    // Using the Red Shape Factory
    const redFactory = new RedShapeFactory();
    console.log("Using Red Shape Factory:");
    drawShapes(redFactory);

    // Using the Blue Shape Factory
    const blueFactory = new BlueShapeFactory();
    console.log("Using Blue Shape Factory:");
    drawShapes(blueFactory);
}

main();
