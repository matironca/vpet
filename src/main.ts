import * as vpet from './lib/vpet'
import * as needs from './lib/needs'
    let petName;
    petName = "pato";
    let pet : vpet.Vpet = new vpet.Vpet(petName, new vpet.StateLimit() , new vpet.StateLimit); 
    let exit = false;
    while(!exit){
        console.log(pet.name);
        exit = true;
    }
