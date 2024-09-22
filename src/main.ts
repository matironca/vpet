import * as vpet from './lib/vpet'
import * as needs from './lib/needs'

const readline = require('readline'); //Definition of the user interface
const rl = readline.createInterface({
    input: process.stdin,  // stdin
    output: process.stdout // stdout
  });

function menu(){
    console.log('1. Show state');
    rl.question('Choose operation: ', (op : number) => {
        
        switch(op){
            case 1:
                vpet.showState(pet);
                break;
        }
        
        rl.close(); // Close the readline interface
      });

}

//Main code
    let petName;
    petName = "pato";
    let pet : vpet.Vpet = new vpet.Vpet(petName, new vpet.StateLimit() , new vpet.StateLimit); 
    let exit = false;
    while(!exit){
        console.log(pet.name);
        vpet.logBar(600, 1000);
        menu();
        exit = true;
    }