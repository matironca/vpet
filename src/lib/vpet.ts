export class Vpet {
//Virtual pet class, no much to explain yet.
    name : string ;
    state : VpetState ; 
    traits : VpetTrait[] ;
    stateMaxs : StateLimit;
    stateMins : StateLimit;
    constructor(name: string ,  state?: VpetState, traits?: VpetTrait[] , stateMaxs?: StateLimit , stateMins? : StateLimit ){
        this.state = state || new VpetState ; //Sets initial state, with the VpetState constructor if no state was passed.
        this.traits = traits || [] ;
        this.
    }
}
class VpetState{
//Contains the state of a vpet.
    hunger: number ;
    happiness: number ;
    energy: number ;
    mood: string;

    constructor(hunger: number = 500, happiness: number = 1000, energy: number = 500, mood: string = 'Happy'){
//Max value 1000 at start. Modifiable limits by traits.
        this.hunger
    }
}
class StateLimit{
    hunger : number ;
    happiness: number;
    energy: number;
}
class VpetTrait{
//Physical traits like 'Horned' and its level of growth.
    name : string;
    level : number;
}
