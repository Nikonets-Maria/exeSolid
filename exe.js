
// // 1. Инкапсуляция: Скрытие внутреннего состояния объекта и предоставление методов для взаимодействия с ним.

// class BankAccount {
//     constructor(owner, balance = 0) {
//         this.owner = owner;
//         let _balance = balance; // приватное свойство

//         this.getBalance = function() {
//             return _balance;
//         };

//         this.deposit = function(amount) {
//             if (amount > 0) {
//                 _balance += amount;
//                 console.log(`Deposited: ${amount}`);
//             }
//         };

//         this.withdraw = function(amount) {
//             if (amount > 0 && amount <= _balance) {
//                 _balance -= amount;
//                 console.log(`Withdrawn: ${amount}`);
//             } else {
//                 console.log('Insufficient funds');
//             }
//         };
//     }
// }

// const account = new BankAccount('Alice', 100);
// account.deposit(50);
// console.log(account.getBalance());
// account.withdraw(30);
// console.log(account.getBalance());

// // 2. Наследование: Возможность создавать новые классы на основе существующих.

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a noise.`);
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log(`${this.name} barks.`);
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log(`${this.name} meows.`);
//     }
// }

// const dog = new Dog('Labra');
// const cat = new Cat('Wiskis');

// dog.speak();  
// cat.speak();  

// // 3. Полиморфизм: Способность объектов разных классов обрабатывать одно и то же сообщение по-разному.

// function makeSound(animal) {
//     animal.speak();
// }

// const dog = new Dog('Hatiko');
// const cat = new Cat('UmpaLumpa');

// makeSound(dog); 
// makeSound(cat); 

// // 4. Абстракция: Сокрытие сложных деталей и предоставление только необходимых интерфейсов.

// class Vehicle {
//     constructor(brand) {
//         this.brand = brand;
//     }

//     start() {
//         throw new Error('This method must be implemented in subclasses');
//     }
// }

// class Car extends Vehicle {
//     start() {
//         console.log(`${this.brand} car started.`);
//     }
// }

// class Motorcycle extends Vehicle {
//     start() {
//         console.log(`${this.brand} motorcycle started.`);
//     }
// }

// const car = new Car('Mers');
// const motorcycle = new Motorcycle('Kavasaki');

// car.start(); 
// motorcycle.start();  

