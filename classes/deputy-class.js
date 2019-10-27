"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const human_class_1 = require("./human-class");
class Deputy extends human_class_1.Human {
    constructor(height, weight, name, surname, age, bribe_taker, bribe_size) {
        super(height, weight);
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.bribe_taker = bribe_taker;
        this.bribe_size = bribe_size;
    }
    giveBribe(money) {
        if (!this.bribe_taker) {
            console.log('i am not a bribe-taker!!! go away!');
            // return
        }
        if (money < 20000) {
            this.bribe_size += money;
            console.log(this.bribe_size);
        }
        else {
            console.log('are you crazy man??');
        }
    }
}
exports.Deputy = Deputy;
