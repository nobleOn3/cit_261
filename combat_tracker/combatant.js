/******************************************************************
 * Combatant class
 *  This class holds a character's name, health, and initiative
 *  for combat.
 *****************************************************************/
export default class Combatant {
    constructor(n, i, h) {
        this.name = n;
        this.hp =  parseInt(h);
        this.initiative = i;
        this.alive = true;
    }

    getHit(value) {
        this.hp -= value;
    }

    getHealed(value) {
        this.hp += parseInt(value);
    }

    isAlive() {
        return this.alive;
    }

    kill() {
        this.alive = false;
    }

}