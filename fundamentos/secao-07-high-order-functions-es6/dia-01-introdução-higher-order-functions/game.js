const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragon = () => {
  return battleMembers.dragon.damage = Math.floor(Math.random() * (51 - 15)) + 15;
}

const danoWarrior = () => {
  const minDamage = warrior.strength;
  const maxDamage = warrior.strength * warrior.weaponDmg;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
  return damage;
}

const manaDanoMago = () => {
  const minDamage = mage.intelligence;
  const maxDamage = mage.intelligence * 2;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;

  let manaSpent = 0;
  mage.mana >= 15 ? manaSpent = 15 : damage = 'Não possui mana suficiente';

  return { damage, manaSpent };
}

const gameActions = {
  turnoWarrior: (warriorAttack) => {
    const damage = warriorAttack();
    dragon.healthPoints -= damage;
    battleMembers.warrior.damage = damage;
  },

  turnoMago: (mageAttack) => {
    const { damage, manaSpent } = mageAttack();
    dragon.healthPoints -= damage;
    battleMembers.mage.damage = damage;
    battleMembers.mage.mana -= manaSpent;
  },

  turnoDragon: (dragonAttack) => {
    const damage = dragonAttack();
    battleMembers.mage.healthPoints -= damage;
    battleMembers.warrior.healthPoints -= damage;
    battleMembers.dragon.damage = damage;
  },

  resultadoTurno: () => {
    console.log(battleMembers);
    return battleMembers;
  },
};

gameActions.turnoWarrior(danoWarrior);
gameActions.turnoMago(manaDanoMago);
gameActions.turnoDragon(danoDragon);
gameActions.resultadoTurno();
