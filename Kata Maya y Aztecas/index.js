class Warrior {
  constructor(fName, life, power) {
    this.fName = fName;
    this.life = life;
    this.power = power;
  }
  attack = function (opponent) {
    console.log(`Baaaam! ${this.fName} attacks!!`);
    return this.power;
  };
  defend = function (damage) {
    this.life -= damage;
    console.log(`${this.fName} life is ${this.life} now..`);
  };
}

class Maya extends Warrior {
  constructor(fName, life, power) {
    super(fName, life, power);
  }
  drinkColaCao = function () {
    this.power += 10;
    console.log(
      `After ColaCao, {this.fName} the life is ${this.life} and the power is ${this.power}!`
    );
  };
}
class Aztec extends Warrior {
  constructor(fName, life, power) {
    super(fName, life, power);
  }
  drinkNesquik = function () {
    this.life += 10;
    console.log(
      `After Nesquik ${this.fName} the life is ${this.life} and the power is ${this.power}! `
    );
  };
}

const aztecWarrior = new Aztec("Jack the Aztec", 55, 34);
const mayaWarrior = new Maya("John the Maya", 70, 27);

aztecWarrior.drinkNesquik();
mayaWarrior.drinkColaCao();

//Maya attacks
aztecWarrior.defend(mayaWarrior.attack());
// Aztec attacks
mayaWarrior.defend(aztecWarrior.attack());
