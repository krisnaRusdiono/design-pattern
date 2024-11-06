// Structural Design Pattern of Adapter Pattern
/*
Definition

The Adapter Pattern allows two objects with incompatible interfaces to interact with each other.
*/

// Define interface
interface Printer {
    print(text: string): void;
}

// Create legacy class
class OldPrinter {
    printText(text: string): void {
        console.log(`Old Printer: ${text}`);
    }
}

// Create adapter class
class OldPrinterAdapter implements Printer {
    private oldPrinter: OldPrinter;

    constructor(oldPrinter: OldPrinter) {
        this.oldPrinter = oldPrinter;
    }

    print(text: string): void {
        this.oldPrinter.printText(text); // Adapting the method
    }
}

// Usage
const oldPrinter = new OldPrinter();
const printer: Printer = new OldPrinterAdapter(oldPrinter);

printer.print("Hello, World!"); // Uses the adapter to print
