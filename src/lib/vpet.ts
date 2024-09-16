export class Vpet {
//Virtual pet class, no much to explain yet.
    name : string ;
    state : VpetState ; 
    traits : VpetTrait[] ;
    stateMaxs : StateLimit;
    stateMins : StateLimit;
    constructor(name: string , stateMaxs: StateLimit , stateMins : StateLimit ,  state?: VpetState, traits?: VpetTrait[]){
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
    name : string ;
    level : number ;
}
