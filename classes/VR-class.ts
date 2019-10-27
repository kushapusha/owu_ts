import {DeputyInterface} from "../intefaces";
import {Faction} from "./faction-class";

export class VRClass {
    faction_arr: Array<Faction> = [];

    constructor(faction_arr: Array<Faction>) {
        this.faction_arr = faction_arr;
    }

    addFaction(newFaction: Faction) {
        console.log(this.faction_arr.push(newFaction))
    }

    delFaction(nameOfFaction: string) {
        const delFaction = this.faction_arr.findIndex(faction => {
            return faction.name === nameOfFaction
        });

        console.log(this.faction_arr.splice(delFaction, 1));
    }

    showAllFactions() {
        console.log(this.faction_arr);
    }

    showSomeFaction(nameOfFaction: string) {
        console.log(this.faction_arr.find(faction => {
            return faction.name === nameOfFaction
        }));
    }

    addDeputy(nameOfFaction: string, deputy: DeputyInterface) {
        const deputyFaction = this.faction_arr.find(faction => {
            return faction.name === nameOfFaction
        });

        deputyFaction ? deputyFaction.addDeputy(deputy) : console.log('No faction');
    }

    delDeputy(nameOfFaction: string, deputy: DeputyInterface) {
        const deputyFaction = this.faction_arr.find(faction => {
            return faction.name === nameOfFaction
        });

        deputyFaction ? deputyFaction.delDeputy(deputy) : console.log('No faction');
    }

    showAllBribesOfFaction(nameOfFaction: string) {
        const someFaction = this.faction_arr.find(faction => {
            return faction.name === nameOfFaction
        });

        someFaction ?
            console.log(someFaction.deputy_arr.filter(deputy => {
                return deputy.bribe_taker
            })) :
            console.log('No faction - no bribes')
    }

    showBiggestBriberOfFraction (nameOfFaction: string) {
        const someFaction = this.faction_arr.find(faction => {
            return faction.name === nameOfFaction
        });

        someFaction ? someFaction.maxBribeDeputy() : console.log('No faction');
    }

    showAllDeputies(nameOfFaction: string){
        const someFaction = this.faction_arr.find(faction => {
            return faction.name === nameOfFaction
        });

        someFaction ? someFaction.showAllDeputies() : console.log('No faction');
    }

    theBiggestBriberOfVR () {
        const bribe_arr = this.faction_arr.map(faction => {
            return faction.deputy_arr.map(bribe => {
                return bribe.bribe_size;
            });
        });
        const arr = bribe_arr.flat();
        const max_bribe = Math.max(...arr);

        const biggestBribeFaction = this.faction_arr.find(faction => {
            return faction.deputy_arr.find(deputy => {
                return deputy.bribe_size === max_bribe
            })
        });

        biggestBribeFaction?
        console.log(biggestBribeFaction.deputy_arr.find(deputy => {
            return deputy.bribe_size === max_bribe
        })): console.log('No bribes!!!')
    }
}