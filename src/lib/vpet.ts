export class Vpet {
//Virtual pet class, no much to explain yet.
    name : string ;
    state : VpetState ; 
    traits : VpetTrait[] ;
    stateMaxs : StateLimit;
    stateMins : StateLimit;
    constructor(name: string , stateMaxs: StateLimit , stateMins : StateLimit ,  state?: VpetState, traits?: VpetTrait[]){
        this.name = name;
        this.state = state || new VpetState ; //Sets initial state, with the VpetState constructor if no state was passed.
        this.traits = traits || [] ;
        this.stateMaxs = stateMaxs ;
        this.stateMins = stateMins ;
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
}



//FUNCTIONS
export function logBar(level : number , max : number) : void{
//Logs a pipe based bar, showing 1 bar for every 100 levels between 0 and max.
//Pre: max must be a higher number than level.
    let bars : string = "";
    let empty : string = "";
    for(level ; max > 0 && max > level ; max = max - 100 ){
        empty = empty + "-";
    }
    for(level ; max > 0; max = max - 100 ){
        bars = bars + "|";
    }
    bars = "[" + bars + empty + "]"
console.log(bars);
}

export function showState(pet : Vpet){
//Logs out the State of 'pet' in a bar format.
console.log('Hunger:');
    logBar(pet.state.hunger, pet.stateMaxs.hunger);
console.log('Energy:');
    logBar(pet.state.energy, pet.stateMaxs.energy);
console.log('Happiness:');
    logBar(pet.state.happiness, pet.stateMaxs.happiness);
}
