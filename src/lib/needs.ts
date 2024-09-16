import * as vpet from '../lib/vpet'
export enum food{
    Meat = 50,
    Carrot = 25,
    Chocolate = 75
}
/*Functions to manage vpet needs.
function adjustState() : void {
    // Check and make that hunger is between the limits.
    this.state.hunger = Math.min(this.stateMaxs.hunger, Math.max(this.stateMins.hunger, this.state.hunger));
    
    // Check and make that happiness is between limits.
    this.state.happiness = Math.min(this.stateMaxs.happiness, Math.max(this.stateMins.happiness, this.state.happiness));
    
    // Check and make that energy is between limits
    this.state.energy = Math.min(this.stateMaxs.energy, Math.max(this.stateMins.energy, this.state.energy));
  }
  */
  function feed(pet : vpet.Vpet , food : food) : void {
//Adds the food value to the vpet hunger.
    pet.state.hunger += food ;
    if (pet.state.hunger > pet.stateMaxs.hunger){
        pet.state.hunger = pet.stateMaxs.hunger;
    }
  }
  
  function sleep(pet : vpet.Vpet) :void {
//Adds 100 to the vpet energy.
    pet.state.energy += 100;
    if(pet.state.energy > pet.stateMaxs.energy){
        pet.state.energy = pet.stateMaxs.energy;
    }
  }