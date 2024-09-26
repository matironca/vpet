import {Vpet , showState , StateLimit} from './lib/vpet.js'
//Main code
    let petName;
    petName = "Pato";
    let pet : Vpet = new Vpet(petName, new  StateLimit , new StateLimit); 

    let test : string =  showState(pet);
    const testdiv = document.getElementById('test');
    if(testdiv)
        testdiv.innerText = showState(pet);
    