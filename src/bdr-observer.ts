// Behavioural Design Pattern of Observer
/*
Definition

The observer pattern lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing. Basically, it's like having an event listener on a given object, and when that object performs the action we're listening for, we do something.

*/

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
