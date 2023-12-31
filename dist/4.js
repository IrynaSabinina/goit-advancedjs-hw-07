// У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.
// 1. Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, 
// яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). 
// Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.
// 2. Людина (Person): Створіть клас Person. 
// Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. 
// Клас Person повинен мати метод getKey, який повертає збережений ключ.
// 3. Дім (House): Створіть абстрактний клас House. 
// Цей клас має дві властивості: door, яка може бути відкрита (true), 
// або закрита (false), і key, яка зберігає об'єкт класу Key. 
// У цьому класі також повинен бути метод comeIn, який додає об'єкт 
// класу Person у масив tenants, якщо door відкрита. 
// Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.
// 4. Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. 
// Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, 
// збігається з ключем, збереженим як key, то двері відчиняються.
// Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.tenants = [];
        this.key = key;
    }
    comeIn(persone) {
        if (this.door) {
            this.tenants.push(persone);
        }
        else {
            console.log("sorry door is close");
        }
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
        else {
            console.log("Sorry, key is wrong, try again later...");
        }
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
export {};
//# sourceMappingURL=4.js.map