class dustbin extends BaseClass {
    constructor(x, y) {
      super(x,y,5,80)
      var options = {
          'isStatic': true,
      }
      this.body = Bodies.rectangle(x, y,5,80,options);
    }
  }