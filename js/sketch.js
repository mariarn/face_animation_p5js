/*
* JavaScript functions for Face animation in p5.js and p5.play v.0.0.1
* by @mariarn 2019 
* See other projects in:
* https://codepen.io/mariarn
* https://www.linkedin.com/in/mariajoserodrigueznistal/
*/

var eye, mouth, eyeX, eyeY, eyeResizedX, eyeResizedY, mouthDefault, mouthX, mouthY;
var isBlink = false;
var nBlink = 0; var rndmBlink = 0;

function preload() {
	eyeDefault = loadImage('assets/eyes_blink/b01.png');
	mouthDefault = loadImage('assets/mouth_smile/m01.png');
	eye = loadAnimation('assets/eyes_blink/b01.png', 'assets/eyes_blink/b35.png');
	mouth = loadAnimation('assets/mouth_smile/m01.png', 'assets/mouth_smile/m20.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	eye.frameDelay = 1;
	eyeX = (windowWidth - eyeDefault.width) / 2;
	eyeY = (windowHeight - eyeDefault.height) / 4;
	eyeResizedX = windowWidth / 2;
	//eyeResizedY = windowHeight * 0.33;
	eyeResizedY = eyeY + (eyeDefault.height/2);
	mouthX = (windowWidth) / 2;
	mouthY = (windowHeight - mouthDefault.height) / 2;
	
		//random blink
	  (function loop() {
		    var rand = Math.round(Math.random() * (10000 - 9000)) + 9000;
		    setTimeout(function() {		 
		    	rndmBlink = Math.round(Math.random() * (3 - 1)) + 1;
		    		isBlink = true;
		            loop();  
		    }, rand);
		}());
}

function draw() {
  background(50, 54, 57);
	
  if (isBlink) eyeBlink(rndmBlink); 
  else image(eyeDefault, eyeX, eyeY);
  
  animation(mouth, mouthX, mouthY);
  //image(mouthDefault, mouthX, mouthY);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	
}

function eyeBlink(rndmBlink) {	

	if (eye.getFrame() == 0) nBlink++;
	
	if (nBlink <= rndmBlink){
		animation(eye, eyeResizedX, eyeResizedY);
	} else {
		nBlink = 0;
		isBlink = false;
		image(eyeDefault, eyeX, eyeY);
	}
}
