function Ninja(name){
    var speed = 3;
    var strength = 3;
    
    this.health = 100;
    this.name = name;
    
    this.sayName = function(){
        console.log("My ninja name is" + this.name)
    };

    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    };

    this.drinkSake = function(){
        this.health += 10;
        return this;
    };

    this.punch = function(ninja){
        if(ninja instanceof Ninja){
            ninja.health -= 5;
            console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health");
            return this;
        } else {
            console.log("Not a Ninja");
            return this;
        }
    };

    this.kick = function(ninja){
        if(ninja instanceof Ninja){
            var damage = 15 * strength;
            ninja.health -= damage;
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health");
            return this;
        } else {
            console.log("Not a Ninja");
            return this;
        }
    };
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");

blueNinja.showStats();
redNinja.punch(blueNinja);
blueNinja.showStats();

redNinja.showStats();
blueNinja.kick(redNinja);
redNinja.showStats();
