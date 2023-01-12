//Based off of Daniel Shiffman's Sine Wave animation: https://p5js.org/examples/math-sine-wave.html


//---------------- Particle Parameters ----------------//
//Distance between rendered particles
let particleSpacing = 20;
//Size of rendered particles
let particleSize = 15;

//---------------- Wave Parameters ----------------//
//Width of Wave in Pixels, initialized for use in setup()
let waveWidth;
//Amplitude of Wave in Pixels AKA Magnitude
let waveAmp = 100;
//Period of Wave in Pixels AKA Frequency
let wavePeriod = 1000;

//---------------- Animation Parameters ----------------//
//Theta is the angle of the point on a unit circle, AKA the wavePhase
let theta = 0;
//CHange in Theta with respect to time is technically Angular Velocity
//Think of a unit circle and a point traced on the outer edge, thetaIncrement numerates how quickly it goes around
//As this is a sine wave, it refers specifically to the vertical oscillation frequency
//Basically, it's how fast the particles move up and down for this program, if 0, the wave is static
let thetaIncrement = 0.8; //Unit: degrees


//---------------- Degree & Radian Conversions----------------//
//Value of Pi for Theta conversions from Radians to Degrees
const PI = 3.14159265358979323846264338327950288419716939937510;


function convertDegtoRad(degrees){
    return degrees/360 * 2*PI;
}
function convertRadtoDeg(radians){
    return radians/2*PI * 360;
}

theta = convertDegtoRad(theta);
thetaIncrement = convertDegtoRad(thetaIncrement);





//---------------- Automatic Parameters - Do not Tinker ----------------//
//Computed Angular Frequency of the Wave and adjusted in setup()  based on waveSpace
//This is the Angular Frequency of the Drawn Wave rather than the speed of the animation itself
let waveAngFreq; //= (TWO_PI / wavePeriod); Question: Why can't I even start the variable here before it breaks?

//Initalize Array to Store Vertical Positions of the Wave Particles, initalized for use in setup()
let particleYDisplacements;

//Intialize Array to store vertical span of the Wave Particles, initalized for use in setup()

//Initialize the count of Particles which is directly determined by the particleYDisplacements Array, initialized for use in setup()
let particleCount;



//p5.js Setup Function
function setup(){

    //Create a Canvas that is the size of the User's Display
    createCanvas(displayWidth, displayHeight);
   
    //Question: Why do these all need to be placed within the setup?
    //Set the width of the wave to the user's display width
    waveWidth = displayWidth; 

    //Adjusted Angular Frequency of the Wave
    waveAngFreq = ((2*PI)/wavePeriod) * particleSpacing;

    //Builds the Array for the Particle Displacements, Array Size is determined by waveWidth and spacing between particles
    //Note: Floor, a function that rounds values to the nearest integer
    particleYDisplacements = new Array(floor(waveWidth / waveAngFreq));

    //Count of particles as dictated by the quantity of slots in the particleDisplacements Array
    particleCount = particleYDisplacements.length;
}



//Isolate the thetaIncrement to a new function such that the increment occurs once per draw call
function animate(thetaIncrement){
    //Increment Theta such that a new wave is drawn
    theta += thetaIncrement;
}

//Function to calculate the coordinate points of the particles of the wave
function buildSineWave(waveAmp,wavePhaseShift = 0){

    //A Theta specicific to the loop
    //On function run, will increment inside the loop
    //Meanwhile, the original theta is preserved for when the calc function is run again
    //wavePhaseShift shifts the start of the wave AKA the phase of the wave and since theta is defined as one step, it's scaled by the particle count and then divided by the degrees
    let waveTheta = theta+convertDegtoRad(wavePhaseShift);

    //Loop to Calculate the Y position of the Particles
    //Increments through all available particles
    for (let particle = 0; particle < particleCount; particle++){
        //Particle's Y displacement is determined by sin(theta)
        particleYDisplacements[particle] = waveAmp * sin(waveTheta);
        //Move to the next particle as dictated by the adjusted Wave Angular Frequency
        waveTheta += waveAngFreq;
    }

}

//Function to calculate the coordinate points of the particles of the wave
function buildCosineWave(waveAmp,wavePhaseShift = 0){

    //A Theta specicific to the loop
    //On function run, will increment inside the loop
    //Meanwhile, the original theta is preserved for when the calc function is run again
    //wavePhaseShift shifts the start of the wave AKA the phase of the wave
    let waveTheta = theta+convertDegtoRad(wavePhaseShift);


    //Loop to Calculate the Y position of the Particles
    //Increments through all available particles
    for (let particle = 0; particle < particleCount; particle++){
        //Particle's Y displacement is determined by sin(theta)
        particleYDisplacements[particle] = waveAmp * cos(waveTheta);
        //Move to the next particle as dictated by the adjusted Wave Angular Frequency
        waveTheta += waveAngFreq;
    }

}

function renderWave(particleSize,particleR=255,particleG=255,particleB=255){

    //Sets the stroke of a particle to zero
    noStroke();

    //Sets the fill of the Drawn Particles
    fill(particleR,particleG,particleB);

    //Count of particles as dictated by the quantity of slots in the particleDisplacements Array
    let particleCount = particleYDisplacements.length;

    //Loop to draw a shape at each particle location
    //Increments through all available particles
    for (let particle = 0; particle < particleCount; particle++){
        //Ellipse(x coord, y coord, width, height)
        //x coordinate here is multiplied such that the increment specifically to the x coordinate is scaled to the space between a particle
        ellipse(particle*particleSpacing,height/2 + particleYDisplacements[particle], particleSize/2,particleSize);
    }

}

//p5.js Draw function that automatically loops
function draw(){
    //Refresh the background to the original color to wipe previous entities on screen
    background(100);

    //Set the animation speed
    animate(thetaIncrement);

    //Build and Render a Sine Wave
    buildSineWave(waveAmp,0);
    renderWave(particleSize,254,208,73);

    //Build and Render a Sine Wave
    buildSineWave(2*waveAmp,0);
    renderWave(1.2*particleSize,254,208,73);

    //Build and Render a Sine Wave with 90 degree phase shift
    buildSineWave(waveAmp,90);
    renderWave(particleSize,207,253,225);

    //Build and Render a Sine Wave with 90 degree phase shift
    buildSineWave(2*waveAmp,90);
    renderWave(1.2*particleSize,207,253,225);

    //Build and Render a Sine Wave with 180 degree phase shift
    buildSineWave(waveAmp,180);
    renderWave(particleSize,104,185,132);

    //Build and Render a Sine Wave with 180 degree phase shift
    buildSineWave(2*waveAmp,180);
    renderWave(1.2*particleSize,104,185,132);

    //Build and Render a Sine Wave with 270 degree phase shift
    buildSineWave(waveAmp,270);
    renderWave(particleSize,61,86,86);

    //Build and Render a Sine Wave with 270 degree phase shift
    buildSineWave(2*waveAmp,270);
    renderWave(1.2*particleSize,61,86,86);


}