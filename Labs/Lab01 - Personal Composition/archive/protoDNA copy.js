//Based off of Daniel Shiffman's Sine Wave animation: https://p5js.org/examples/math-sine-wave.html


//---------------- Particle Parameters ----------------//
//Distance between rendered particles
let particleSpacing = 20;
//Size of rendered particles
let particleSize = 16;

//---------------- Wave Parameters ----------------//
//Width of Wave in Pixels, initialized for use in setup()
let waveWidth;
//Amplitude of Wave in Pixels AKA Magnitude
let waveAmp = 100;
//Period of Wave in Pixels AKA Frequency
let wavePeriod = 1000;
//Vertical Dilation Factor of the Wave
let waveDilation = 1.2;

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

//Initalize Array to Store Initial Vertical Positions of the Wave Particles, initalized for use in setup()
let particleAYs;

//Initalize Array to Store Final Vertical Positions of the Wave Particles, initalized for use in setup()
let particleBYs;

//Initialize the count of Particles 
let particleCount;



//p5.archive Setup Function
function setup(){

    //Create a Canvas that is the size of the User's Display
    createCanvas(displayWidth, displayHeight);
   
    //Question: Why do these all need to be placed within the setup?
    //Set the width of the wave to the user's display width
    waveWidth = displayWidth; 

    //Adjusted Angular Frequency of the Wave
    waveAngFreq = ((2*PI)/wavePeriod) * particleSpacing;

    //Array Size is determined by waveWidth and spacing between particles
    //Note: Floor, a function that rounds values to the nearest integer
    particleCount = floor(waveWidth / waveAngFreq);

    //Builds the Array for the Particles of Wave A's Vertical Positions
    particleAYs= new Array(particleCount);

    //Builds the Array for the Particle of Wave B's Vertical Positions
    particleBYs= new Array(particleCount);

}



//Isolate the thetaIncrement to a new function such that the increment occurs once per draw call
function animate(thetaIncrement){
    //Increment Theta such that a new wave is drawn
    theta += thetaIncrement;
}

//Function to calculate the coordinate points of the particles of two opposite Sine Waves
function buildDualWave(waveAmp,wavePhaseShift = 0){

    //A Theta specicific to the loop
    //On function run, will increment inside the loop
    //Meanwhile, the original theta is preserved for when the calc function is run again
    //wavePhaseShift shifts the start of the wave AKA the phase of the wave and since theta is defined as one step, it's scaled by the particle count and then divided by the degrees
    let waveTheta = theta+convertDegtoRad(wavePhaseShift);


    //Loop to Calculate the Y position of the Particles
    //Increments through all available particles
    for (let particle = 0; particle < particleCount; particle++){
        //Store the computed vertical coordinate of the Wave A particle
        particleAYs[particle] = waveAmp * sin(waveTheta);

        //Wave B is a 180 degree Phase Shifted Sine Wave compared to Wave A
        //Otherwise, same idea of storing the computed vertical coordinate
        particleBYs[particle] = waveAmp * sin(waveTheta + convertDegtoRad(180));

        //Move to the next particle as dictated by the adjusted Wave Angular Frequency for both waves
        waveTheta += waveAngFreq;
    }

}


function renderDNA(particleSize,particle1R=255,particle1G=255,particle1B=255, particle2R=255,particle2G=255,particle2B=255,){

    

    //Loop to draw a shape at each particle location
    //Increments through all available particles
    for (let particle = 0; particle < particleCount; particle++){
        //Line(x0,y0,x1,y1)
        //x coordinate here is multiplied such that the increment specifically to the x coordinate is scaled to the space between a particle
        //x0 and x1 should be identical
        //y0 and y1 are stored in their respective arrays
        let x = particle*particleSpacing;
        line(x, height/2 + particleAYs[particle], x, height/2 + particleBYs[particle]);
        
        //Ellipse(x coord, y coord, width, height)
        
        //Ellipse for the Point with Wave A's vertical displacement
        //Sets the fill of the Drawn Particles
        fill(particle1R,particle1G,particle1B);
        ellipse(x,height/2 + particleAYs[particle],particleSize,particleSize);
        
        //Ellipse for the Point with Wave B's vertical displacement
        //Sets the fill of the Drawn Particles
        fill(particle2R,particle2G,particle2B);
        ellipse(x,height/2 + particleBYs[particle],particleSize,particleSize);
        
    }

}

//p5.archive Draw function that automatically loops
function draw(){
    //Refresh the background to the original color to wipe previous entities on screen
    background(200);

    //Set the animation speed
    animate(thetaIncrement);

    //Build and Render a Sine Wave
    buildDualWave(waveAmp,0);
    renderDNA(particleSize,254,208,73,73,208,254);

}