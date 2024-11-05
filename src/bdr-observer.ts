interface Observer {
    update(temperature: number): void; // Method to receive updates
}

// Define WeatherStation Class
class WeatherStation {
    private observers: Observer[] = [];
    private temperature: number = 0;

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature);
        }
    }

    setTemperature(temperature: number): void {
        this.temperature = temperature;
        this.notifyObservers();
    }
}

class Display implements Observer {
    update(temperature: number): void {
        console.log(`Temperature updated: ${temperature}°C`);
    }
}

function main() {
    const weatherStation = new WeatherStation();
    const display = new Display();

    weatherStation.addObserver(display);

    // Simulate temperature updates
    weatherStation.setTemperature(25);
    weatherStation.setTemperature(30);
    weatherStation.setTemperature(22);
    weatherStation.setTemperature(250);
}

main();
