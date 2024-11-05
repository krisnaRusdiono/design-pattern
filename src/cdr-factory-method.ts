// Creation Design Pattern Factory Method
// Example of Object
const ObjConstructor = (name: string) => ({
    name,
    greet: () => {
        console.log(`Hi ${name}`);
    },
})

// const MyObj = ObjConstructor('John');
// MyObj.greet();

// ===============================================================================
// Example of Class
interface Animal {
    makeSound(): void;
}

class Dog implements Animal {
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat implements Animal {
    makeSound(): void {
        console.log("Meow! Meow!");
    }
}

abstract class AnimalFactory {
    abstract createAnimal(): Animal;
}

class DogFactory extends AnimalFactory {
    createAnimal(): Animal {
        return new Dog();
    }
}

class CatFactory extends AnimalFactory {
    createAnimal(): Animal {
        return new Cat();
    }
}

// const dogFactory = new DogFactory();
// const catFactory = new CatFactory();
// const dog = dogFactory.createAnimal();
// const cat = catFactory.createAnimal();
// dog.makeSound();
// cat.makeSound();