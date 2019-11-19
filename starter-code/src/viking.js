// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(oneViking) {
    this.vikingArmy.push(oneViking);
  }

  addSaxon(oneSaxon) {
    this.saxonArmy.push(oneSaxon);
  }

  //   selectRandom(person) {
  //     let randomPerson = Math.floor(Math.random() * person.length);
  //     return randomPerson;
  //   }

  vikingAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    let hitViking = this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].strength
    );

    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
      return "A Saxon has died in combat";
    } else {
      return hitViking;
    }
  }
  saxonAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    let hitSaxon = this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].strength
    );

    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
      return "A Viking has died in combat";
    } else {
      return hitSaxon;
    }
  }
  showStatus() {
    return !this.saxonArmy.length
      ? "Vikings have won the war of the century!"
      : !this.vikingArmy.length
      ? "Saxons have fought for their lives and survived another day..."
      : "Vikings and Saxons are still in the thick of battle.";
  }
}

addViking();
addSaxon();
vikingAttack();
saxonAttack();
showStatus();

// if (!this.saxonArmy.length) {
//   return "Vikings have won the war of the century!";
// }
// if (!this.vikingArmy.length) {
//   return "Saxons have fought for their lives and survived another day...";
// } else {
//   return "Vikings and Saxons are still in the thick of battle.";
// }
