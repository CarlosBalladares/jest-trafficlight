const lightEnum  = {
  RED :0,
  YELLOW:1,
  GREEN:2
}


module.exports =  class Trafficlight{
  constructor(){
    this.state = lightEnum.RED;
  }

  getState(){
    return this.state;
  }

  setState(state){
    const vals = Object.values(lightEnum);
    if(vals.indexOf(state)===-1) return;

    this.state = state;
  }
}

module.exports.lightEnum  = lightEnum;