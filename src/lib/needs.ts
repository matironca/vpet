//Functions to manage vpet needs.
function adjustState() : void {
    // Check and make that hunger is between the limits.
    this.state.hunger = Math.min(this.stateMaxs.hunger, Math.max(this.stateMins.hunger, this.state.hunger));
    
    // Check and make that happiness is between limits.
    this.state.happiness = Math.min(this.stateMaxs.happiness, Math.max(this.stateMins.happiness, this.state.happiness));
    
    // Check and make that energy is between limits
    this.state.energy = Math.min(this.stateMaxs.energy, Math.max(this.stateMins.energy, this.state.energy));
  }
  