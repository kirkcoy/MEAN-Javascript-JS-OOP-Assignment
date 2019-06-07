# MEAN-Javascript-JS-OOP-Assignment

> **Ninja Class I**
Create a new object constructor called **Ninja** with the following attributes:
- **name**
- **health**
- **speed (private)**
- **strength (private)**

**Speed** and **strength** should be 3 by default. **Health** should be 100 by default.

The Ninja should have the following methods:
- **sayName()** - This should log that Ninja's name to the console.
- **showStats()** - This should show the Ninja's name, strength, speed, and health.
- **drinkSake()** - This should add +10 Health to the Ninja.

> **Ninja Class II**
Complete the below challenges using Ninja Class I assignment.

.**punch()**
Add a new method to Ninja called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in.

.**kick()**
Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and  .punch() will take another Ninja instance.

**Validations**
Update .punch() and .kick() so that they only accept Instances of Ninja. Hint: You will need to find a way to check the constructor of an instance. You will often need to consult outside documentation to find solutions for particular features.

> **Ninja Class III**
**Part I**
Recreate the base Ninja class from scratch using **ES6 classes**. Your Ninja needs the following public attributes (do not worry about private variables for this assignment):
- **name**
- **health**
- **speed**
- **strength**

**Speed** and **strength** should be 3 by default. **Health** should be 100 by default.

The Ninja should have the following methods:
- **sayName()** - This should log that Ninja's name to the console.
- **showStats()** - This should show the Ninja's name, strength, speed, and health.
- **drinkSake()** - This should add +10 Health to the Ninja.

**Part II - Sensei Class**
Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called **wisdom**, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.