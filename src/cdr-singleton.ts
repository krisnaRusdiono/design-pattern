// Creation Design Pattern of Singleton
/*
Definition

Singleton is a design pattern that ensures that a class has only one immutable instance.
*/

// Example of Singleton on Object
const DefaultObj: Record<string, unknown> = {
    name: 'John Doe',
    greet: function () {
        console.log(`Hello ${this.name}!`);
    },
}

const FreezedObj = Object.freeze(DefaultObj);
// FreezedObj.name = 'Error';

// ===============================================================================
// Example of Singleton on Class
class DefaultClass {
    constructor() {}

    name = 'John Doe';
    greet = () => {
        console.log(`Hello ${this.name}!`);
    }
}

const Instance = new DefaultClass();
const FreezedInstance = Object.freeze(Instance);
// FreezedInstance.name = 'Error';
