//Global functions needed by other functions to work.
export function wait(s : number){
    return new Promise(resolve => setTimeout(resolve, s*1000));
}
