const Trafficlight = require("./../src/trafficlight");
const lightEnum = Trafficlight.lightEnum;

const tfl = new Trafficlight(lightEnum.RED);

describe("Traffic light", ()=>{
  describe("set and get light", ()=>{
    it("should switch to red", ()=>{
      tfl.setState(lightEnum.RED);
      const result = tfl.getState();
      expect(result).toEqual(lightEnum.RED);
    });
    it("should switch to yellow", ()=>{
      tfl.setState(lightEnum.YELLOW);
      const result = tfl.getState();
      expect(result).toEqual(lightEnum.YELLOW);
    });
    it("should switch to green", ()=>{
      tfl.setState(lightEnum.GREEN);
      const result = tfl.getState();
      expect(result).toEqual(lightEnum.GREEN);
    });

    it("should not switch to unkown color", ()=>{
      tfl.setState(lightEnum.GREEN);
      tfl.setState(897798);
      const result = tfl.getState();
      expect(result).toEqual(lightEnum.GREEN);
    });
  });
});
