let sound;
let fft;
let waveform;
let play = 0;
let currenttime = 0;
let can;
function preload(){
  sound = loadSound('sound.m4a');
}

function setup(){
 can = createCanvas(window.innerWidth,window.innerHeight);  
  
  fft = new p5.FFT();
  sound.amp(0.16);
}

function draw(){
  background(0);
  waveform = fft.waveform();
  const timelog = document.getElementById("time");
  // timelog.innerHTML = currenttime;

  for (var i = 0; i < waveform.length; i++){
    var y = map(waveform[i], -0.04, 0.04, 0, 4);
    textSize(60);
    fill(255, 255, 255);
    
    if (sound.currentTime() < 5.909) {
      textFont("Merriweather");
      text('this type is your type', y, 320);
    }
    if (sound.currentTime() > 5.909 && sound.currentTime() < 8.79) {
      textFont("Gamja Flower");
      text('this type is my type', y, 320);
    }
    if (sound.currentTime() > 8.79 && sound.currentTime() < 11.13) {
      textFont("Roboto");
      text('from Roboto Bold', y, 320);
    }
    if (sound.currentTime() > 11.13 && sound.currentTime() < 13.67) {
      textFont("Fira Sans Light");
      text('to Fira Sans Light', y, 320);
    }
    if (sound.currentTime() > 13.67 && sound.currentTime() < 16.22) {
      textFont("Playfair Display");
      text('from Playfair Display', y, 320);
    }
    if (sound.currentTime() > 16.22 && sound.currentTime() < 19.74) {
      textFont("Ubuntu");
      text('to Ubuntu Regular', y, 320);
    }
    if (sound.currentTime() > 19.74 && sound.currentTime() < 23.81) {
      textFont("Bungee");
      text('this type was made for you and me', y, 320);
    }
    //////////////////////
    if (sound.currentTime() > 23.81 && sound.currentTime() < 26.33) {
      textSize(120);
      can.style('letter-spacing', '-0.2em');
      textFont("Black And White Picture");
      text('As I was typing', y*1.5, 320);
    }
    if (sound.currentTime() > 26.33 && sound.currentTime() < 29.24) {
      textSize(25);
      can.style('letter-spacing', '1.5em');
      textFont("Incosolata");
      text('this series of texts', y*0.5, 320);
    }
    if (sound.currentTime() > 29.24 && sound.currentTime() < 31.32) {
      textSize(120);
      can.style('letter-spacing', '-0.2em');
      textFont("Open Sans Condensed");
      text('I kept on looking', y*1.5, 320);
    }
    if (sound.currentTime() > 31.32 && sound.currentTime() < 34.11) {
      textSize(25);
      can.style('letter-spacing', '1.5em');
      textFont("Indie Flower");
      text('at the fonts on Google', y*0.5, 320);
    }
    if (sound.currentTime() > 34.11 && sound.currentTime() < 36.56) {
      textSize(120);
      can.style('letter-spacing', '-0.2em');
      textFont("Playfair Display");
      text('I wished I knew of', y*1.5, 320);
    }
    if (sound.currentTime() > 36.56 && sound.currentTime() < 39.47) {
      textSize(25);
      can.style('letter-spacing', '0.5em');
      textFont("Gamja Flower");
      text('a better website', y*1.5, 320);

    }
    if (sound.currentTime() > 39.47  && sound.currentTime() < 40.06) {
      textSize(120);
      can.style('letter-spacing', '-0.2em');
      textFont("Playfair Display");
      text('but', y*1.5, 320);
    }
    if (sound.currentTime() > 40.06 && sound.currentTime() < 44.1) {
      textSize(60);
      can.style('letter-spacing', '0');
      textFont("Merriweather");
      text('this type was made for you and me', y*1.5, 320);
    }
    //////////////////////
    if (sound.currentTime() > 44.1 && sound.currentTime() < 46.58) {
      textFont("Bungee");
      text('I followed my searches,', y, 320);
    }
    if (sound.currentTime() > 46.58 && sound.currentTime() < 49.42) {
      textFont("Incosolata");
      text('to a site called Typewolf', y, 320);
    }
    if (sound.currentTime() > 49.42 && sound.currentTime() < 51.53) {
      textFont("Open Sans Condensed");
      text('they have a P D F', y, 320);
    }
    if (sound.currentTime() > 51.53 && sound.currentTime() < 54.26) {
      textFont("Merriweather");
      text('called the Guide To Free Fonts', y, 320);
    }
    if (sound.currentTime() > 54.26 && sound.currentTime() < 56.65) {
      textFont("Bungee");
      text('you have to buy it...', y, 320);
    }
    if (sound.currentTime() > 56.65 && sound.currentTime() < 58.42) {
      textFont("Playfair Display");
      text('it costs thirty nine dollars', y, 320);
    }
    if (sound.currentTime() > 59.42 && sound.currentTime() < 64.1) {
      textFont("Gamja Flower");
      text('this type was made for you and me', y, 320);
    }
    /////////////////
    if (sound.currentTime() > 64.1 && sound.currentTime() < 66.58) {
      textFont("Nunito Sans");
      text('The font Futura,', y * 0.5, 320);
    }
    if (sound.currentTime() > 66.58 && sound.currentTime() < 69.42) {
      textFont("Nunito Sans");
      text('made in nineteen twenty seven,', y * 0.5, 320);
    }
    if (sound.currentTime() > 69.42 && sound.currentTime() < 71.53) {
      textFont("Nunito Sans");
      text('was meant to carry us', y * 0.5, 320);
    } 
    if (sound.currentTime() > 71.53 && sound.currentTime() < 74.26) {
      textFont("Nunito Sans");
      text('to a utopian society', y * 0.5, 320);
    }
    if (sound.currentTime() > 74.26 && sound.currentTime() < 76.65) {
      textFont("Nunito Sans");
      text('its used in logos', y * 0.5, 320);
    }
    if (sound.currentTime() > 76.65 && sound.currentTime() < 80.25) {
      textFont("Nunito Sans");
      text(`like Domino's Pizza`, y * 0.5, 320);
    }
    if (sound.currentTime() > 80.25 && sound.currentTime() < 85.1) {
      textFont("Nunito Sans");
      text('this free version was made for you and me', y * 0.5, 320);
    }
  }
}

function keyPressed() {
  if (play === 0) {
    sound.play();
    currenttime = sound.currentTime();
    play = 1;
  } else {
    currenttime = sound.currentTime();
    play = 0;
    sound.pause();
  }
}
