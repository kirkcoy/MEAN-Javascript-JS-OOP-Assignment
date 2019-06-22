class Ninja {
    constructor(name) {
        this._name = name;
        this.speed = 3;
        this.strength = 3;
        this.health = 100;
    }

    sayName() {
        console.log("My ninja name is" + this._name);
    }

    showStats() {
        console.log("Name: " + this._name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();


class Sensei extends Ninja {
    constructor(name) {
        super(name)
        this.wisdom = 10;
        this.speed = 10;
        this.strength = 10;
        this.health = 200;
    }

    speakWisdom() {
        super.drinkSake();
        super.drinkSake();
        super.drinkSake();
        console.log( "What one programmer can do in one month, two programmers can do in two months.");
        return "Added an attribute called Wisdom: " + this.wisdom;
    }
}

const superSensei = new Sensei("Master Splinter");
console.log(superSensei.speakWisdom());
superSensei.showStats();