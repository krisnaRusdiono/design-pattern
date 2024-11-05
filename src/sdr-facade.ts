// Structural Design Facade Pattern
class CPU {
    start(): void {
        console.log("CPU started.");
    }
}

class Memory {
    load(): void {
        console.log("Memory loaded.");
    }
}

class HardDrive {
    read(): void {
        console.log("Hard drive read.");
    }
}

// Create facade class
class ComputerFacade {
    private cpu: CPU;
    private memory: Memory;
    private hardDrive: HardDrive;

    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    startComputer(): void {
        console.log("Starting the computer...");
        this.cpu.start();
        this.memory.load();
        this.hardDrive.read();
        console.log("Computer started.");
    }
}

// Usage
const computer = new ComputerFacade();
computer.startComputer();
