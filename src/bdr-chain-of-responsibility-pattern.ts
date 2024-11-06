// Behaviour Design Pattern of Chain Responsibility
/*
Definition

The Chain of Responsibility passes requests along a chain of handlers. Each handler decides either to process the request or to pass it to the next handler in the chain.

*/
interface Logger {
    setNext(logger: Logger): Logger; // Set the next logger in the chain
    log(level: string, message: string): void; // Handle the log message
}

// Create Concrete Logger
// InfoLogger.ts
class InfoLogger implements Logger {
    private nextLogger: Logger | null = null;

    setNext(logger: Logger): Logger {
        this.nextLogger = logger;
        return logger;
    }

    log(level: string, message: string): void {
        if (level === "info") {
            console.log(`Info: ${message}`);
        } else if (this.nextLogger) {
            this.nextLogger.log(level, message);
        }
    }
}

// WarningLogger.ts
class WarningLogger implements Logger {
    private nextLogger: Logger | null = null;

    setNext(logger: Logger): Logger {
        this.nextLogger = logger;
        return logger;
    }

    log(level: string, message: string): void {
        if (level === "warning") {
            console.log(`Warning: ${message}`);
        } else if (this.nextLogger) {
            this.nextLogger.log(level, message);
        }
    }
}

// ErrorLogger.ts
class ErrorLogger implements Logger {
    private nextLogger: Logger | null = null;

    setNext(logger: Logger): Logger {
        this.nextLogger = logger;
        return logger;
    }

    log(level: string, message: string): void {
        if (level === "error") {
            console.log(`Error: ${message}`);
        } else if (this.nextLogger) {
            this.nextLogger.log(level, message);
        }
    }
}

// Chain of Responsibility
// Client code
function mainCOR() {
    const infoLogger = new InfoLogger();
    const warningLogger = new WarningLogger();
    const errorLogger = new ErrorLogger();

    // Set up the chain: InfoLogger -> WarningLogger -> ErrorLogger
    infoLogger.setNext(warningLogger).setNext(errorLogger);

    // Log messages
    infoLogger.log("info", "This is an info message.");
    infoLogger.log("warning", "This is a warning message.");
    infoLogger.log("error", "This is an error message.");
    infoLogger.log("debug", "This is a debug message (not handled).");
}

mainCOR();
