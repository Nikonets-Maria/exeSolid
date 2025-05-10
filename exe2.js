// Принципы SOLID представляют собой набор рекомендаций для проектирования программного обеспечения,
// которые помогают создавать более понятный, гибкий и поддерживаемый код. 

// ### 1. S - Single Responsibility Principle (Принцип единственной ответственности)

// Каждый класс должен иметь только одну причину для изменения, то есть выполнять только одну задачу.

// Класс для работы с пользователями
class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

// Класс для работы с хранением пользователей
class UserRepository {
    constructor() {
        this.users = [];
    }

    addUser (user) {
        this.users.push(user);
    }

    getUsers() {
        return this.users;
    }
}

// Пример использования
const user1 = new User('Alice');
const userRepo = new UserRepository();
userRepo.addUser (user1);
console.log(userRepo.getUsers()); // [ User { name: 'Alice' } ]

// ### 2. O - Open/Closed Principle (Принцип открытости/закрытости)

// Классы должны быть открыты для расширения, но закрыты для изменения.

```javascript
// Базовый класс для формы
class Form {
    constructor(data) {
        this.data = data;
    }

    validate() {
        throw new Error('Метод validate должен быть реализован в подклассах');
    }
}

// Подкласс для валидации формы регистрации
class RegistrationForm extends Form {
    validate() {
        // Пример простой валидации
        return this.data.username && this.data.password;
    }
}

// Подкласс для валидации формы входа
class LoginForm extends Form {
    validate() {
        // Пример простой валидации
        return this.data.email && this.data.password;
    }
}

// Пример использования
const registrationForm = new RegistrationForm({ username: 'user', password: 'pass' });
console.log(registrationForm.validate()); // true
```

// ### 3. L - Liskov Substitution Principle (Принцип подстановки Лисков)

// Объекты подкласса должны быть заменяемыми на объекты базового класса без изменения желаемых свойств программы.

```javascript
// Базовый класс
class Bird {
    fly() {
        console.log('Я лечу!');
    }
}

// Подкласс для ласточки
class Swallow extends Bird {}

// Подкласс для пингвина, который не может летать
class Penguin extends Bird {
    fly() {
        throw new Error('Пингвины не могут летать');
    }
}

// Пример использования
function letBirdFly(bird) {
    bird.fly();
}

const swallow = new Swallow();
const penguin = new Penguin();

letBirdFly(swallow); // Я лечу!
try {
    letBirdFly(penguin); // Ошибка
} catch (error) {
    console.log(error.message); // Пингвины не могут летать
}
```

// ### 4. I - Interface Segregation Principle (Принцип разделения интерфейса)

// Клиенты не должны зависеть от интерфейсов, которые они не используют.

```javascript
// Интерфейс для устройства
class Device {
    turnOn() {}
    turnOff() {}
}

// Интерфейс для устройства с экраном
class ScreenDevice extends Device {
    showDisplay() {}
}

// Класс для телевизора
class TV extends ScreenDevice {
    turnOn() {
        console.log('Телевизор включен');
    }

    turnOff() {
        console.log('Телевизор выключен');
    }

    showDisplay() {
        console.log('Отображение на экране телевизора');
    }
}

// Класс для лампочки
class LightBulb extends Device {
    turnOn() {
        console.log('Лампочка включена');
    }

    turnOff() {
        console.log('Лампочка выключена');
    }
}

// Пример использования
const tv = new TV();
tv.turnOn(); // Телевизор включен
tv.showDisplay(); // Отображение на экране телевизора

const bulb = new LightBulb();
bulb.turnOn(); // Лампочка включена
```

// Конечно! Продолжаем с принципом инверсии зависимостей и завершаем пример.

// ### 5. D - Dependency Inversion Principle (Принцип инверсии зависимостей)

// Интерфейс для уведомлений
// class Notification {
//     send(message) {
//         throw new Error('Метод send должен быть реализован в подклассах');
//     }
// }

// // Класс для отправки уведомлений по электронной почте
// class EmailNotification extends Notification {
//     send(message) {
//         console.log(`Отправка уведомления по электронной почте: ${message}`);
//     }
// }

// // Класс для отправки уведомлений по SMS
// class SMSNotification extends Notification {
//     send(message) {
//         console.log(`Отправка уведомления по SMS: ${message}`);
//     }
// }

// // Класс для управления уведомлениями
// class NotificationService {
//     constructor(notification) {
//         this.notification = notification; // Зависимость от абстракции
//     }

//     notify(message) {
//         this.notification.send(message);
//     }
// }

// // Пример использования
// const emailNotification = new EmailNotification();
// const smsNotification = new SMSNotification();

// const emailService = new NotificationService(emailNotification);
// emailService.notify('У вас новое сообщение!'); // Отправка уведомления по электронной почте: У вас новое сообщение!

// const smsService = new NotificationService(smsNotification);
// smsService.notify('У вас новое сообщение!'); // Отправка уведомления по SMS: У вас новое сообщение!

// ### Заключение

// Эти примеры демонстрируют принципы SOLID в действии:

// 1. **Принцип единственной ответственности**: Каждый класс отвечает за свою задачу — `User ` управляет пользователями, а `User Repository` — их хранением.
// 2. **Принцип открытости/закрытости**: Классы форм могут быть расширены для различных типов форм, не изменяя базовый класс.
// 3. **Принцип подстановки Лисков**: Подклассы могут быть использованы вместо базового класса без нарушения функциональности.
// 4. **Принцип разделения интерфейса**: Устройства имеют разные интерфейсы в зависимости от их функциональности.
// 5. **Принцип инверсии зависимостей**: Высшие модули (например, `NotificationService`) зависят от абстракций (интерфейса `Notification`), а не от конкретных реализаций.

// Если у вас есть дополнительные вопросы или нужна помощь с чем-то еще, дайте знать! 😊