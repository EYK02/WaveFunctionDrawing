let time = 0;
let size = 200;
let wave = [];
let wave_2 = [];

let slider1; //Number of arms
let slider2; //Time

function setup() {
  let com = 100;
  
  createCanvas(1000, 550);
  slider1 = createSlider(1, com, 1);
  slider2 = createSlider(0, 0.25, 0.05, 0.01);
}

function draw() {
  background(0);
  
  //Square funciton
  
  translate(400, 150);  
  
  let x = 0;
  let y = 0; 
  
  
  for (let i = 0; i<slider1.value(); i++){
    let prevx = x;
    let prevy = y;
    
    n = i*2+1;
    
    radius = size/(PI*n);
    
    x += radius * cos(n*time);
    y += radius * sin(n*time);
    
    
    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius*2);
    
    stroke(255);
    line(prevx, prevy, x, y);
  }
  wave.unshift(y);
  
  translate(200, 0);
  line(x-200, y, 0, wave[0]);
  
  beginShape();
  noFill();
  for(let i=0; i<wave.length; i++){
    vertex(i, wave[i]);
  }
  endShape();
  
  
  
  // Staircase function
  
  translate(-200, 250);  
  
  let x_2 = 0;
  let y_2 = 0; 
  
  
  for (let i = 0; i<slider1.value(); i++){
    let prevx_2 = x_2;
    let prevy_2 = y_2;
    
    n_2 = i+1;
    
    if (n_2%2!=0){
      n_2=-n_2
    }
    radius_2 = size/(PI*n_2);
  
    x_2 += radius_2 * -cos(Math.abs(n_2)* -time);
    y_2 += radius_2 * sin(Math.abs(n_2)* -time);
    
    stroke(255, 100);
    noFill();
    ellipse(prevx_2, prevy_2, radius_2*2);
    
    stroke(255);
    line(x_2, y_2, prevx_2, prevy_2);
  }
  wave_2.unshift(y_2);
  
  translate(200, 0);
  line(x_2-200, y_2, 0, wave_2[0]);
  
  beginShape();
  noFill();
  for(let i=0; i<wave_2.length; i++){
    vertex(i, wave_2[i]);
  }
  endShape();
  
  time -= slider2.value();

  if(wave.length>250){
    wave.pop();
    wave_2.pop();
  }
}
