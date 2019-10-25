import {DeputyInterface} from "../intefaces";

export class Faction {
    deputy_arr: Array<DeputyInterface> = []

    constructor(deputy_arr: Array<DeputyInterface>) {
        this.deputy_arr = deputy_arr;
    }

    addDeputy (newDeputy: DeputyInterface) {
        this.deputy_arr.push(newDeputy)
    }

    delDeputy (someDeputy: DeputyInterface) {

        const delDeputy = this.deputy_arr.findIndex(deputy => {
            deputy === someDeputy
        })
    }
}