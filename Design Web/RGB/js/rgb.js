let red = 0;
let green = 0;
let blue = 0;
let iteration = 0;

let speed = 10; // Change speed here

setInterval(RGB, speed);

function RGB() {
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
    $('body').css("background-color", "RGB(" + red + "," + green + "," + blue + ")");
}


