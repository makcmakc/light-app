var five = require("johnny-five"),
    board = new five.Board({port:"/dev/ttyUSB0"});

board.on("ready", function() {
  // Create an Led on pin 13
  var led = new five.Led(13);

  // Strobe the pin on/off, defaults to 100ms phases
  led.strobe();
});