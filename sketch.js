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
  sound.amp(0.25);

}

function draw(){
  background(0);
  waveform = fft.waveform();
  console.log(sound.currentTime());
  for (var i = 0; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -0.03, 0.03, 0, 3);
    // 5.92
    // 8.35
    // 11.04
    // 13.61
    // 16.09
    // 19.71
    // 23.9
    textSize(60);
    fill(255, 255, 255);
    
    if (sound.currentTime() < 5.92) {
      textFont("Merriweather");
      text('this type is your type', y, 320);
    }
    if (sound.currentTime() > 5.92 && sound.currentTime() < 8.35) {
      textFont("Gamja Flower");
      text('this type is my type', y, 320);
    }
    if (sound.currentTime() > 8.35 && sound.currentTime() < 11.04) {
      textFont("Roboto");
      text('from Roboto Bold', y, 320);
    }
    if (sound.currentTime() > 11.04 && sound.currentTime() < 13.61) {
      textFont("Fira Sans");
      text('to Fira Sans Light', y, 320);
    }
    if (sound.currentTime() > 13.61 && sound.currentTime() < 16.09) {
      textFont("Playfair Display");
      text('from Playfair Display Black', y, 320);
    }
    if (sound.currentTime() > 16.09 && sound.currentTime() < 19.71) {
      textFont("Ubuntu");
      text('to Ubuntu Regular', y, 320);
    }
    if (sound.currentTime() > 19.71 && sound.currentTime() < 23.9) {
      textFont("Merriweather");
      text('this type was made for you and me', y, 320);
    }
    if (sound.currentTime() > 23.9 && sound.currentTime() < 26.35) {
      textFont("Ubuntu");
      text('there is a serif typeface', y, 320);
    }
    if (sound.currentTime() > 26.35 && sound.currentTime() < 29.04) {
      textFont("Playfair Display");
      text('its called lexicon', y, 320);
    }
    if (sound.currentTime() > 29.04 && sound.currentTime() < 31.53) {
      textFont("Fira Sans");
      text('i would have used it', y, 320);
    }
    if (sound.currentTime() > 31.53 && sound.currentTime() < 34.26) {
      textFont("Merriweather");
      text('but its really expensive', y, 320);
    }
    if (sound.currentTime() > 34.26 && sound.currentTime() < 36.65) {
      textFont("Playfair Display");
      text('it costs three hundred', y, 320);
    }
    if (sound.currentTime() > 36.65 && sound.currentTime() < 39.92) {
      textFont("Ubuntu");
      text('and ninety one dollars', y, 320);
    }
    if (sound.currentTime() > 39.92 && sound.currentTime() < 44.3) {
      textFont("Merriweather");
      text('is this type made for you and me?', y, 320);
    }


    if (sound.currentTime() > 44.3) {
      sound.pause();
    }
  }
}


function keyPressed() {
  if (play === 0) {
    console.log('playing');
    sound.play();
    play = 1;
  } else {
    play = 0;
    sound.pause();
  }
}
