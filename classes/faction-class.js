"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Faction {
    constructor(name, deputy_arr) {
        this.deputy_arr = [];
        this.name = name;
        this.deputy_arr = deputy_arr;
    }
    addDeputy(newDeputy) {
        console.log(this.deputy_arr.push(newDeputy));
    }
    delDeputy(someDeputy) {
        const delDeputy = this.deputy_arr.findIndex((deputy) => {
            return deputy === someDeputy;
        });
        console.log(this.deputy_arr.splice(delDeputy, 1));
    }
    delBribeDeputy() {
        const honestDeputy_arr = this.deputy_arr.filter(deputy => {
            return !deputy.bribe_taker;
        });
        console.log(honestDeputy_arr);
    }
    maxBribeDeputy() {
        const bribe_arr = this.deputy_arr.map(bribe => {
            return bribe.bribe_size;
        });
        const max_bribe = Math.max(...bribe_arr);
        const biggestBribe = this.deputy_arr.find((deputy) => {
            return deputy.bribe_size === max_bribe;
        });
        console.log(biggestBribe);
    }
    showAllDeputies() {
        console.log(this.deputy_arr);
    }
    delAllDeputies() {
        console.log(this.deputy_arr.splice(0, this.deputy_arr.length));
    }
    sumOfBribes() {
        const bribe_arr = this.deputy_arr.map((bribe) => {
            return bribe.bribe_size;
        });
        console.log(bribe_arr.reduce((a, b) => {
            return a + b;
        }));
    }
}
exports.Faction = Faction;
