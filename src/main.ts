import * as vpet from './lib/vpet'
function main(petName : string) : void{
    var pet : vpet.Vpet = new vpet.Vpet(petName, new vpet.StateLimit() , new vpet.StateLimit); 
    var exit = 0;
    while(exit == 0){
        //console.log(vpet.printState);
    }
}