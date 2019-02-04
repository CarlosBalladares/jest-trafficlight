const Intersection = require("./../src/intersection");

const inter= new Intersection();

describe("Traffic light", ()=>{
  describe("set light", ()=>{
    it("should initialize to both red", ()=>{
      
      const res = inter.getState().every((light)=>{
        return light.getState()===0;
      });

      expect(res).toEqual(true);
    });

    it("should switch state to both yello", ()=>{

      const states = inter.getNextState();
      const res = states.every((light)=>{
        return light.getState()===1;
      });

      expect(res).toEqual(true);

      
    });

    it("should switch to only valid states", ()=>{

      let i=100;
      let res = true;
      while(i--){
        if(!res) {
          break;
        }
        let stt  = inter.getNextState();
        let bothred = stt[0].getState()===0 && stt[0].getState() ===stt[1].getState();

        let bothyellow = stt[0].getState()===1 && stt[0].getState() ===stt[1].getState();

        let bothdiff = (stt[0].getState() ===2 && stt[1].getState() ===0 )|| (stt[0].getState() ===0 && stt[1].getState() ===2)
        
        let valid = bothred|| bothyellow || bothdiff;

        res = res&&valid;
      }
      expect(res).toEqual(true);

      
    });

    
  });
});
