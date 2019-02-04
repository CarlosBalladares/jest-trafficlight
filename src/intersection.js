const Trafficlight = require("./trafficlight");

/*
     r  y  g
  r  s  x  s
  y  x  s  x
  g  s  x  x

*/

module.exports = class Intersection {
  constructor() {
    this.route1 = new Trafficlight(0);
    this.route2 = new Trafficlight(0);
    this.nextGreen = 0;
  }

  getState() {
    return [this.route1, this.route2];
  }

  getNextState() {
    if ( this.route1.getState() === 0 && 0 === this.route2.getState()) {
      this.route1.setState(1);
      this.route2.setState(1);
    } else if ( this.route1.getState() === 1 && 1 === this.route2.getState() ) {
      if (this.nextGreen === 0) {
        this.route1.setState(2);
        this.route2.setState(0);
        
      } else {
        this.route1.setState(0);
        this.route2.setState(2);
      }
    } else if (this.route1.getState() === 0 && this.route2.getState() === 2 ) {

      this.route1.setState(1);
      this.route2.setState(1);
      this.nextGreen = 0;
    } else {

      this.route1.setState(1);
      this.route2.setState(1);
      this.nextGreen = 1;

    }

    return [this.route1, this.route2];
  }


}
