// Creation Design Pattern
// Example of Singleton
const DefaultObj: Record<string, unknown> = {
    name: 'John Doe',
    greet: function () {
        console.log(`Hello ${this.name}!`);
    },
}

class DefaultClass {
    constructor() {}

    name = 'John Doe';
    greet = () => {
        console.log(`Hello ${this.name}!`);
    }
}

// Use freeze to avoid Config being changed
// Object Example
// const FreezedObj = Object.freeze(DefaultObj);
// FreezedObj.name = 'Error';

// Class Example
// const Instance = new DefaultClass();
// const FreezedInstance = Object.freeze(Instance);
// FreezedInstance.name = 'Error';
