class CustomLogging {
    constructor() {
      // choose whatever defaults you'd like!
      this.body = {
        color: "#008f68",
        size: "2rem"
      };
    }
  
    setBodyStyle({ color, size }) {
      // this will only set a value that is passed-in
      if (color !== undefined) this.body.color = color;
      if (size !== undefined) this.body.size = size;
    }
  
    log(body = "") {
      // adds dynamic styling via the template literals
      console.log(
        `%c${body}`,
        `color: ${this.body.color}; font-weight: bold; font-size: ${
          this.body.size
        }; text-shadow: 0 0 5px rgba(0,0,0,0.2);`
      );
    }
  }
  
  export default CustomLogging;