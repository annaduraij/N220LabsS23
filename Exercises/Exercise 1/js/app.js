
let w;
let h;

let x = 40;
let y = 40;

let r = 40;

let xSpeed = 2;
let ySpeed = 1;


function setup() {
    w = windowWidth;
    h = windowHeight;

    //createCanvas(displayWidth, displayHeight);
    createCanvas (w,h);
}

function draw() {
    console.log(x);
    x += xSpeed;
    y += ySpeed;
    circle(x, y, r);

    if (mouseIsPressed){
        xSpeed+= 0.05;
    } else {
        xSpeed-= 0.05;
    }

    if ((y >= (h - r)) || (y <= r)){
        ySpeed = ySpeed * (-1);
    }

    if ((x >= (w - r)) || (x <= r)){
        xSpeed = xSpeed * (-1);
    }
}