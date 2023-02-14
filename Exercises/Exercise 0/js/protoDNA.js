// (C) Jay Annadurai 2023

//Based off of Daniel Shiffman's Sine Wave animation: https://p5js.org/examples/math-sine-wave.html


//---------------- Color Parameters ----------------//
//Distance between rendered particles
//Wave A Particle RGB
let r1 = 0;
let g1 = 0;
let b1 = 0;
//Determines if the colors are ramping up or down
let ramp1 = true;

//Wave B Particle RGB
//Starts at opposite end of the value spectrum
let r2 = 255;
let g2 = 255;
let b2 = 255;
//Determines if the colors are ramping up or down
let ramp2 = false;

//Speed of Ramping Effect
let rampIncrement = 1;

//---------------- Particle Parameters ----------------//
//Distance between rendered particles
let particleSpacing = 40;
//Size of rendered particles
let particleSize = 10;

//---------------- Wave Parameters ----------------//
//Width of Wave in Pixels, initialized for use in setup()
let waveWidth;
//Amplitude of Wave in Pixels AKA Magnitude
let waveAmp;
//Period of Wave in Pixels AKA Frequency
let wavePeriod = 1000;
//Vertical Dilation Factor of the Wave
let waveDilation = 1.2;

//---------------- Animation Parameters ----------------//
//Theta is the angle of the point on a unit circle, AKA the wavePhase
let theta = 0;
//Change in Theta with respect to time is technically Angular Velocity
//Think of a unit circle and a point traced on the outer edge, thetaIncrement numerates how quickly it goes around
//As this is a sine wave, it refers specifically to the vertical oscillation frequency
//Basically, it's how fast the particles move up and down for this program, if 0, the wave is static
let thetaIncrement = 2; //Unit: degrees


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
let waveAparticleYs;

//Initalize Array to Store Dilated Vertical Position of the Wave Particles, initalized for use in setup()
let particaleAAdjYs;

//Initalize Array to Store Opposite Initial Vertical Positions of the Wave Particles, initalized for use in setup()
let waveBparticleYs;

//Initalize Array to Store Dilated Vertical Position of the Wave Particles, initialized for use in setup()
let particaleBAdjYs;

//Initialize the count of Particles which corresponds to the waveWidth and the amount of spacing
//Formula for the count is intialized in setup()
let particleCount;



//p5.archive Setup Function
//Sets up the Canvas, Background, and Fundamental Variables
function setup(){

    //Create a Canvas that is the size of the User's window
    createCanvas(windowWidth, windowHeight);
   
    //Question: Why do these all need to be placed within the setup?
    //Set the width of the wave to the user's window width
    waveWidth = displayWidth;

    //Set the amplitude of the wave proportionate to the user's window height
    waveAmp = windowHeight/10;

    //Adjusted Angular Frequency of the Wave
    waveAngFreq = ((2*PI)/wavePeriod) * particleSpacing;

    //Array Size is determined by waveWidth and spacing between particles
    //Note: Floor, a function that rounds values to the nearest integer so that there is a whole number of particles
    particleCount = floor(waveWidth / waveAngFreq);

    //Builds the Array for the Particles of Wave A's Vertical Positions
    waveAparticleYs= new Array(particleCount);

    //Builds the Array for the Particles of Wave A's Final Vertical Positions
    waveAparticleAdjYs= new Array(particleCount);

    //Builds the Array for the Particle of Wave B's Vertical Positions
    waveBparticleYs= new Array(particleCount);

    //Builds the Array for the Particle of Wave B's Final Vertical Positions
    waveBparticleAdjYs= new Array(particleCount);

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
        //Store the computed vertical coordinate of the ideal Wave A particles
        //Actually used as the vertical start coordinate for the line segment
        waveAparticleYs[particle] = waveAmp * sin(waveTheta);

        //Wave A particles' Y coord value is determined by sin(theta) and the wave amplitude 
        //Multiplied by waveDilation to add some visual effect and spacing at the crest of the wave
        waveAparticleAdjYs[particle] = waveDilation * waveAmp * sin(waveTheta);

        //Wave B is a 180 degree Phase Shifted Sine Wave compared to Wave A
        //Otherwise, same idea of storing the computed vertical coordinate
        //Actually used as the vertical end coordinate for the line segment
        waveBparticleYs[particle] = waveAmp * sin(waveTheta + convertDegtoRad(180));

        //Wave B particles' Y coord value is determined by sin(theta + convertDegtoRad(180)) and the wave amplitude * waveDilation
        //Multiplied by waveDilation to add some visual effect and spacing at the crest of the wave
        waveBparticleAdjYs[particle] = waveDilation * waveAmp * sin(waveTheta + convertDegtoRad(180));


        //Move to the next particle's [for both Wave A and Wave B] angle as dictated by the adjusted Wave Angular Frequency 
        waveTheta += waveAngFreq;
    }

}



//Renders the actual particles and line segments that represent the double wave structure
function renderDNA(particleSize,waveYShift=height/2,particle1R=255,particle1G=255,particle1B=255, particle2R=255,particle2G=255,particle2B=255,){

    //Loop to draw a shape at each particle location
    //Increments through all available particles
    for (let particle = 0; particle < particleCount; particle++){
        
        //The 'x' coordinate will be consistent
        //Let the space a particle occupies be equal to it's horizontal particle size and the spacing between two particles
        let x = particle*(particleSize+particleSpacing);

        //-----Draw the vertical line segment between the two waves-----

        //Set the Line Segment stroke weight proportionate to the horizontal particle sizeand color to white
        strokeWeight(particleSize/2);
        stroke(0,0,255);
        //Line(x0,y0,x1,y1)
        //x coordinate here is multiplied such that the increment specifically to the x coordinate is scaled to the space between a particle
        //x0 and x1 should be identical
        //y0 and y1 are stored in their respective arrays

        //Prototype code to draw line segments instead.
       /* let verticalLineMag = (Math.abs(waveAparticleYs[particle])+Math.abs(waveBparticleYs[particle]))/particleSize);
        let verticalLineSegmentMag = verticalLineMag/particleSize
        let i = 0;
        while(i < verticalLineMag){

        }*/

        //Variable that represents the total size of the line
        let verticalLineMag = 0.5*( Math.abs(waveAparticleYs[particle]) + Math.abs(waveBparticleYs[particle])/particleSize);
        if (verticalLineMag <= 0.3*waveAmp){
            stroke(0,255,0)
        }
        if (verticalLineMag >= 0.5*waveAmp){
            stroke(255,0,0)
        }

        line(x, waveYShift + waveAparticleYs[particle], x, waveYShift + waveBparticleYs[particle]);
        
        
        //-----Draw the particles as ellipses that respectively represent each wave----

        //Set the Outer Edge stroke of the ellipse to 0.5px
        strokeWeight(0.5);
        stroke(128,128,128);
        //Ellipse(x coord, y coord, width, height)

        //Ellipse for the Point with Wave A's vertical displacement
        //Sets the fill of the Drawn Particles
        fill(particle1R,particle1G,particle1B);
        //The Math.abs(...) takes the absolute value of the difference between the current Y coordinate and the previous particle Y coordinate and then uses that to set the particle's vertical dilation
        ellipse(x,waveYShift + waveAparticleAdjYs[particle],particleSize,Math.abs(waveAparticleAdjYs[particle] - waveAparticleAdjYs[particle-1]) + 2);

        //Ellipse for the Point with Wave B's vertical displacement
        //Sets the fill of the Drawn Particles
        fill(particle2R,particle2G,particle2B);
        //The Math.abs(...) takes the absolute value of the difference between the current Y coordinate and the previous particle Y coordinate and then uses that to set the particle's vertical dilation
        ellipse(x,waveYShift + waveBparticleAdjYs[particle],particleSize,Math.abs(waveBparticleAdjYs[particle] - waveBparticleAdjYs[particle-1]) + 2);
        //polygon(x, waveYShift + waveBparticleAdjYs[particle],particleSize,6);
    }

}

//p5.archive Draw function that automatically loops
function draw(){
    //Refresh the background to the original color to wipe previous entities on screen
    background(20);

    //Set the animation speed and increment
    animate(thetaIncrement);

    //Build and Render a Sine Wave
    buildDualWave(waveAmp,0);
    renderDNA(particleSize,height/2,r1,g1,b1,r2,g2,b2);


    //This code block functions to make the color of the ellipses go smoothly to and from red
    //The opposite waves are set to be the opposite color
    //If ramp1 is enabled, increase the color value
    if(ramp1){
        //However, if the color is at max, turn off the ramp
        if(g1 >= 255){
            ramp1 = false;
            ramp2 = true;
        }
        r1+= rampIncrement;
        g1+= rampIncrement;
        b1+= rampIncrement;
        r2-= rampIncrement;
        g2-= rampIncrement;
        b2-= rampIncrement;
    }
    //If ramp is disabled, decrease the color value
    else {
        //However, if the color is at minimum, turn on the ramp
        if(g1 <= 0){
            ramp1 = true
            ramp2 = false;
        }
        r1-= rampIncrement;
        g1-= rampIncrement;
        b1-= rampIncrement;
        r2+= rampIncrement;
        g2+= rampIncrement;
        b2+= rampIncrement;
    }


}//End of Draw

//Create some User Interactivity
//On Mouseclick, increase wave animation speed by increasing theta increment for computation functions and ramp increment to change speed of color changes
function mouseClicked(){
    thetaIncrement += 0.004;
    rampIncrement++;
}
