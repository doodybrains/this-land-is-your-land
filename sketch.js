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
  sound.amp(0.16);
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
    if (sound.currentTime() > 5.92 && sound.currentTime() < 8.40) {
      textFont("Gamja Flower");
      text('this type is my type', y, 320);
    }
    if (sound.currentTime() > 8.40 && sound.currentTime() < 11.04) {
      textFont("Roboto");
      text('from Roboto Bold', y, 320);
    }
    if (sound.currentTime() > 11.04 && sound.currentTime() < 13.61) {
      textFont("Fira Sans Light");
      text('to Fira Sans Light', y, 320);
    }
    if (sound.currentTime() > 13.61 && sound.currentTime() < 16.09) {
      textFont("Playfair Display");
      text('from Playfair Display', y, 320);
    }
    if (sound.currentTime() > 16.09 && sound.currentTime() < 19.71) {
      textFont("Ubuntu");
      text('to Ubuntu Regular', y, 320);
    }
    
    if (sound.currentTime() > 19.71 && sound.currentTime() < 23.9) {
      textFont("Bungee");
      text('this type was made for you and me', y, 320);
    }
    //////////////////////
    if (sound.currentTime() > 23.9 && sound.currentTime() < 26.35) {
      textFont("Black And White Picture");
      text('As I was typing', y, 320);
    }
    if (sound.currentTime() > 26.35 && sound.currentTime() < 29.04) {
      textFont("Incosolata");
      text('this series of texts,', y, 320);
    }
    if (sound.currentTime() > 29.04 && sound.currentTime() < 31.53) {
      textFont("Open Sans Condensed");
      text('I kept on looking', y, 320);
    }
    if (sound.currentTime() > 31.53 && sound.currentTime() < 34.26) {
      textFont("Indie Flower");
      text('at the fonts on Google:', y, 320);
    }
    if (sound.currentTime() > 34.26 && sound.currentTime() < 36.65) {
      textFont("Playfair Display");
      text('I wished I knew of', y, 320);
    }
    if (sound.currentTime() > 36.65 && sound.currentTime() < 39.92) {
      textFont("Gamja Flower");
      text('a better place but: ', y, 320);
    }
    if (sound.currentTime() > 39.92 && sound.currentTime() < 44.1) {
      textFont("Merriweather");
      text('This type was made for you and me.', y, 320);
    }
    //////////////////////
    if (sound.currentTime() > 44.1 && sound.currentTime() < 46.58) {
      textFont("Bungee");
      text('I followed my searches,', y, 320);
    }
    if (sound.currentTime() > 46.58 && sound.currentTime() < 49.42) {
      textFont("Incosolata");
      text('to a site called Typewolf,', y, 320);
    }
    if (sound.currentTime() > 49.42 && sound.currentTime() < 51.53) {
      textFont("Open Sans Condensed");
      text('they have a P D F', y, 320);
    } 
    if (sound.currentTime() > 51.53 && sound.currentTime() < 54.26) {
      textFont("Indie Flower");
      text('called Guide To Free Fonts', y, 320);
    }
    if (sound.currentTime() > 54.26 && sound.currentTime() < 56.65) {
      textFont("Playfair Display");
      text('you have to buy it,', y, 320);
    }
    if (sound.currentTime() > 56.65 && sound.currentTime() < 58.42) {
      textFont("Gamja Flower");
      text('it costs thirty nine dollars', y, 320);
    }
    if (sound.currentTime() > 59.42 && sound.currentTime() < 64.1) {
      textFont("Merriweather");
      text('this type was made for you and me.', y, 320);
    }
    /////////////////
    if (sound.currentTime() > 64.1 && sound.currentTime() < 66.58) {
      textFont("Nunito Sans");
      text('The font Futura,', y, 320);
    }
    if (sound.currentTime() > 66.58 && sound.currentTime() < 69.42) {
      textFont("Nunito Sans");
      text('made in nineteen twenty seven,', y, 320);
    }
    if (sound.currentTime() > 69.42 && sound.currentTime() < 71.53) {
      textFont("Nunito Sans");
      text('was meant to carry us', y, 320);
    } 
    if (sound.currentTime() > 71.53 && sound.currentTime() < 74.26) {
      textFont("Nunito Sans");
      text('into utopian society', y, 320);
    }
    if (sound.currentTime() > 74.26 && sound.currentTime() < 76.65) {
      textFont("Nunito Sans");
      text('its used in logos,', y, 320);
    }
    if (sound.currentTime() > 76.65 && sound.currentTime() < 80.42) {
      textFont("Nunito Sans");
      text(`like Domino's Pizza`, y, 320);
    }
    if (sound.currentTime() > 80.42 && sound.currentTime() < 85.1) {
      textFont("Nunito Sans");
      text('this free version was made for you and me', y, 320);
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
