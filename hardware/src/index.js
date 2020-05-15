
const Board = require('firmata')

const NUM_LEDS = 98,          // Number of LEDs in the tape
 			DI_PIN = 13,						// Pin to which the tape is connected
 			OFF_TIME = 10, 					// Time (seconds) after which the tape will turn off when the signal disappears
 			MAX_BRIGHT = 50,				// Maximum brightness (0 - 255)
 			MIN_BRIGHT = 50,				// Minimum brightness (0 - 255)
 			BRIGHT_CONSTANT = 500,	// Gain constant from external light (0 - 1023), than LESS the constant, the "sharper" the brightness will be added
 			COEF = 0.9							// Filter coefficient (0.0 - 1.0), the more - the slower the brightness changes


Board.requestPort((err, port) => {
	if (err) {
		console.log(err)
		return 
	}

	const board = new Board(port.conName)
	board.on('ready', () => {
		board.pinMode(DI_PIN, board.MODES.OUTPUT)
	})

})