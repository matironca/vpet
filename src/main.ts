import { feed, passTime , food, sleep , sleepV2  } from './lib/needs.js';
import {Vpet , showState , StateLimit} from './lib/vpet.js'
import { wait } from './lib/tools.js';

//Functions
async function updateState(pet:Vpet , divText : HTMLElement | null) {
//Updates the state bars
    if(divText == null)
    divText = document.getElementById('STATE_BARS');
    while(divText){
        divText.innerText = showState(pet);
        await wait(0.1);
    }
}
function createPet() : Vpet{
    //let petName :string | null = prompt('Enter pet name: ');
    let petName :string = "Pato";
    let pet : Vpet = new Vpet(petName || 'Unnamed', new  StateLimit , new StateLimit); 
    let petNameDiv = document.getElementById('PET_NAME');
    if (petNameDiv){
        petNameDiv.innerText = petName;
    }
    return pet;
}
function menu(){
    
}
//Buttons Code
window.onload = function(){
    //Feed button
    const feedButton = document.getElementById("FEED_PET") as HTMLButtonElement;
    if(feedButton){
        feedButton.addEventListener('click', () => feed(pet , food.Carrot));
    }
    //Sleep button
    const sleepButton = document.getElementById("SLEEP_PET") as HTMLButtonElement;
    if(sleepButton){
        sleepButton.addEventListener('click', async () => {
            sleepButton.disabled = true;
            feedButton.disabled = true;
            sleeping = true;
            await sleepV2(pet);
            sleeping = false;
            sleepButton.disabled = false;
            feedButton.disabled = false;

        } )
    }
}

//Main code
    let petCreated : boolean = false;
    let pet : Vpet | null = createPet();
    petCreated = true; 
    let sleeping : boolean = false;

    if(petCreated = true){
        if (sleeping = false){
            passTime(pet, 1,0,1);
        }
        else{
        passTime(pet, 1,1,1);
        }
        updateState(pet , null);
    }
