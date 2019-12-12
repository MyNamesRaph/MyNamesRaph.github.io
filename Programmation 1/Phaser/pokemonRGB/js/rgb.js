let red = 0;
let green = 0;
let blue = 0;
let iteration = 0;

let speed = 10; // Change speed here


function RGB() {
    let rgb;
    if (iteration === 0) {
        red++;
        if (red === 255) {
            iteration = 1;
        }
    }
    else if (iteration === 1) {
        red--;
        green++;
        if (green === 255) {
            iteration = 2;
        }
    }
    else if (iteration === 2) {
        green--;
        blue++;
        if (blue === 255) {
            iteration = 3;
        }
    }
    else if (iteration === 3) {
        blue--;
        red++;
        if (red === 255) {
            iteration = 1;
        }
    }
    let redString = red.toString(16);
    let greenString = green.toString(16);
    let blueString = blue.toString(16);
    if (redString.length === 1){
        redString = "0"+redString;
    }
    if (blueString.length === 1){
        blueString = "0"+blueString;
    }
    if (greenString.length === 1){
        greenString = "0"+greenString;
    }

    return ("0x"+redString+greenString+blueString);
}


