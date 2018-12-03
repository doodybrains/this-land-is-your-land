let sound;
let fft;
let waveform;
let play = 0;

function preload(){
  sound = loadSound('sound.m4a');
}

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);  
  fft = new p5.FFT();
  sound.amp(0.35);
}

function draw(){
  background(0);
  waveform = fft.waveform();

  for (var i = 0; i < waveform.length; i++){
    // var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -0.03, 0.03, 0, 3);

    textSize(60);
    fill(255, 255, 255);
    
    if (sound.currentTime() < 6.25) {
      textFont("Merriweather");
      text('this type is your type', y, 320);
    }
    if (sound.currentTime() > 6.25 && sound.currentTime() < 8.5) {
      textFont("Gamja Flower");
      text('this type is my type', y, 320);
    }
    if (sound.currentTime() > 8.5 && sound.currentTime() < 11.5) {
      textFont("Roboto");
      text('from Roboto Bold', y, 320);
    }
    if (sound.currentTime() > 11.5 && sound.currentTime() < 13.5) {
      textFont("Fira Sans");
      text('to Fira Sans Light', y, 320);
    }
    if (sound.currentTime() > 13.5 && sound.currentTime() < 15.5) {
      textFont("Playfair Display");
      text('from Playfair Display Black', y, 320);
    }
    if (sound.currentTime() > 15.5 && sound.currentTime() < 17.5) {
      textFont("Ubuntu");
      text('to Ubuntu Regular', y, 320);
    }
    if (sound.currentTime() > 17.5 && sound.currentTime() < 20.5) {
      textFont("Merriweather");
      text('this type was made for you and me', y, 320);
    }
    if (sound.currentTime() > 22) {
      sound.pause();
    }
  }
}


function keyPressed() {
  if (play === 0) {
    console.log('playing');
    sound.loop();
  } else {
    sound.pause();
  }
}
