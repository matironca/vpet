import  {Vpet} from '../lib/vpet.js'
import { wait } from './tools.js';
export enum food{
    Meat = 500,
    Carrot = 250,
    Chocolate = 750
}
export class needsRatio{
  hungerRatio : number ;
  happinessRatio : number ;
  energyRatio : number ;
    constructor(hungerRatio? : number , happinessRatio? : number , energyRatio? : number){
      this.hungerRatio = hungerRatio || 1;
      this.happinessRatio = happinessRatio || 1;
      this.energyRatio = energyRatio || 1;
    }
}
//Functions to manage vpet needs.

  export function feed(pet : Vpet , food : food) : void {
//Adds the food value to the vpet hunger.
    pet.state.hunger += food ;
    if (pet.state.hunger > pet.stateMaxs.hunger){
        pet.state.hunger = pet.stateMaxs.hunger;
    }
  }
  
  export function sleep(pet : Vpet) :void {
//Adds 100 to the vpet energy.
    pet.state.energy += 100;
    if(pet.state.energy > pet.stateMaxs.energy){
        pet.state.energy = pet.stateMaxs.energy;
    }
  }

  export async function passTime(pet : Vpet , ratio1 : number , ratio2: number , ratio3 : number){
//Reduces a pet state value constantly.
//For testing it only applies to hunger right now.
    while(pet){
      if(pet.state.hunger > 0){
      pet.state.hunger = pet.state.hunger - 25 * ratio1;
      }
      if(pet.state.energy > 0){
      pet.state.energy = pet.state.energy;
      }
      if(pet.state.happiness > 0 && (pet.state.hunger < pet.stateMaxs.hunger/2 || pet.state.energy < pet.stateMaxs.energy/2)){
        pet.state.happiness = pet.state.happiness - 25 * ratio3;
        }
        else if (pet.state.hunger >= pet.stateMaxs.hunger/2 && pet.state.energy >= pet.stateMaxs.energy/2){
        pet.state.happiness = pet.state.happiness + 25 * ratio3;
        }
      await wait(1);
    }
}