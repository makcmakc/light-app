
//---------------------- SETTINGS -----------------------

#define NUM_LEDS 98          // Number of LEDs in the tape
#define DI_PIN 13            // Pin to which the tape is connected
#define OFF_TIME 10          // Time (seconds) after which the tape will turn off when the signal disappears

#define MAX_BRIGHT 255       // Maximum brightness (0 - 255)
#define MIN_BRIGHT 50        // Minimum brightness (0 - 255)

#define BRIGHT_CONSTANT 500  // Gain constant from external light (0 - 1023)
														 // than LESS the constant, the "sharper" the brightness will be added

#define COEF 0.9             // Filter coefficient (0.0 - 1.0), the more - the slower the brightness changes


