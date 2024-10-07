import { needsRatio } from "./needs";
export class Vpet {
//Virtual pet class, no much to explain yet.
    name : string ;
    state : VpetState ; 
    traits : VpetTrait[] ;
    stateMaxs : StateLimit;
    stateMins : StateLimit;
   // ratios : needsRatio;
    constructor(name: string , stateMaxs: StateLimit , stateMins : StateLimit ,  state?: VpetState, traits?: VpetTrait[] /*, ratios? : needsRatio*/){
        this.name = name;
        this.state = state || new VpetState ; //Sets initial state, with the VpetState constructor if no state was passed.
        this.traits = traits || [] ;
        this.stateMaxs = stateMaxs ;
        this.stateMins = stateMins ;
 //       this.ratios = ratios || new needsRatio ;
    }
}
class VpetState{
//Contains the state of a vpet.
    hunger: number ;
    happiness: number ;
    energy: number ;
    mood: Mood ;

    constructor(hunger: number = 500, happiness: number = 1000, energy: number = 500, mood: Mood = Mood.Happy){
//Max value 1000 at start. Modifiable limits by traits.
        this.hunger = hunger ;
        this.happiness = happiness ;
        this.energy = energy ;
        this.mood = mood ;
    }
}
enum Mood {
    Happy = 'Happy',
    Sad = 'Sad' ,
    Angry = 'Angry' ,
    Tired = 'Tired'
}
export class StateLimit{
    hunger : number ;
    happiness: number ;
    energy: number ;

    constructor(hunger : number = 1000, happiness : number = 1000, energy : number = 1000){
        this.hunger = hunger ;
        this.happiness = happiness ;
        this.energy = energy ;
    }
}
class VpetTrait{
//Physical traits like 'Horned' and its level of growth.
//Maybe move it to it's own file later, easier to implement.
    name : string ;
    level : number ;
    constructor(name : string , level : number){
        this.name = name;
        this.level = level;
    }
}



//FUNCTIONS
export function logBar(level : number , max : number) : string{
//Logs a pipe based bar, showing 1 bar for every 100 levels between 0 and max.
//Pre: max must be a higher number than level.
    let bars : string = "";
    let empty : string = "";
    while(max > 0 && max > level ){
        empty = empty + "-";
        max = max - 100 ;
    }
    while(max > 0 ){
        bars = bars + "|";
        max = max - 100 ;
    }
    bars = "[" + bars + empty + "]"
//    console.log(bars);
return bars;
}

export function showState(pet : Vpet) : string {
//Logs out the State of 'pet' in a bar format.
console.log('Hunger:');
    let a = logBar(pet.state.hunger, pet.stateMaxs.hunger);
console.log('Energy:');
    let b = logBar(pet.state.energy, pet.stateMaxs.energy);
console.log('Happiness:');
    let c = logBar(pet.state.happiness, pet.stateMaxs.happiness);
    let ret = "Hunger: " + a + " " + "Energy: " + b + " " + "Happiness: " + c;
    return ret;
}