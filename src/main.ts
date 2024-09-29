import {Vpet , showState , StateLimit} from './lib/vpet.js'
//Functions
async function updateState(pet:Vpet , divText : HTMLElement | null) {
//Updates the state bars
    if(divText == null)
    divText = document.getElementById('STATE_BARS')
    while(divText){
        divText.innerText = showState(pet);
        await wait(5);
    }
}
function wait(s : number){
    return new Promise(resolve => setTimeout(resolve, s*1000));
}
function createPet() : Vpet{
    let petName :string | null = prompt('Enter pet name: ');
    let pet : Vpet = new Vpet(petName || 'Unnamed', new  StateLimit , new StateLimit); 
    let petNameDiv = document.getElementById('PET_NAME');
    if (petNameDiv){
        petNameDiv.innerText = petName;
    }
    return pet;
}

//Main code
    let petCreated : boolean = false;
    let pet : Vpet;
    if(!petCreated){
        pet = createPet();
        petCreated = true;
    }
    if(petCreated = true){
    updateState(pet, null);
    }