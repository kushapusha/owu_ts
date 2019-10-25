import {Human} from "./human-class";

export class Deputy extends Human{
    name: string
    surname: string
    age: number
    bribe_taker: boolean
    bribe_size?: number

    constructor(height: number, weight: number, name: string, surname: string, age: number, bribe_taker: boolean, bribe_size: number) {
        super(height, weight);
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.bribe_taker = bribe_taker;
        this.bribe_size = bribe_size;
    }

    giveBribe (money: number) {

        if (!this.bribe_taker) {
            console.log('i am not a bribe-taker!!! go away!')
        }
        else if (money < 15000) {
            this.bribe_size += money
        } else if (money >= 15000) {
            console.log('are you crazy man??')
        }
    }
}