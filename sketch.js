// references
// Bardin, M. (2021, January 14). Making the Paint App: p5 tutorial. Www.youtube.com. https://www.youtube.com/watch?v=MLLN5Zxzu5I&t=574s

// Coding Challenge: simple Color picker using p5.js. (2019, October 5). Www.youtube.com. https://www.youtube.com/watch?v=ws9NcFF1Ysc

// Coding, C. (2020, December 15). Make an advanced drawing app in p5.js | Coding Project #8. Www.youtube.com. https://www.youtube.com/watch?v=S9pT7dpb2Zk&t=84s

// p5.js Buttons part 2 - styling buttons, changin size and location. (2019, May 12). Www.youtube.com. https://www.youtube.com/watch?v=7_jNZLu_6H8

// reference | p5.js. (n.d.-a). P5js.org. https://p5js.org/reference/#/p5/displayWidth

// reference | p5.js. (n.d.-b). P5js.org. https://p5js.org/reference/#/p5/createButton

// reference | p5.js. (n.d.-c). P5js.org. https://p5js.org/reference/#/p5.Element

// The Coding Train. (2015). 4.1: while and for Loops - p5.js tutorial [YouTube Video]. In YouTube. https://www.youtube.com/watch?v=cnRD9o6odjk

var pic;
var slider;
//preload image of sunflower to use for the sunflower brush
function preload() {
  pic = loadImage("sunflower.png");
}

//wrote individual functions for different brushes using key code events and mouse events
function ShiftPressed() {
  if (keyCode === SHIFT) {
    fill(random, 40, 500);
    ellipse(mouseX, mouseY, slider.value(), slider.value());
  }
}
function ControlPressed() {
  if (keyCode === CONTROL) {
    fill(0, 191, 255);
    rectMode(CENTER)
    rect(mouseX, mouseY, slider.value(), slider.value());
  }
}

function DRAWLINE() {
    push();
    strokeWeight(slider.value());
    line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
}
function ActivatesunFlower() {
  if (keyCode === ENTER) {
    push();
    translate(mouseX, mouseY);
    rotate(random(0, 360));
    image(pic, 0, 0, slider.value(), slider.value());
    pop();
  } else if (keyCode === BACKSPACE) {
  }
}

function setup() {
  //needed to write variables for the colours used on the button background
  var col = color(0);
  var col2 = color(200, 100, 100);
  var col3 = color(50, 50, 800);
  var col4 = color(50, 500, 50);
  var col5 = color(255);

//used x and y variables used for the Text Loop
  var x;
  var y;

//created canvas
  createCanvas(1000, 500);

//Buttons load on start up
//added style attributes to buttons using the colour variables specified above
  START = createButton("START");

  clearBut = createButton("Clear");

  blackBut = createButton("B");
  blackBut.style("background-color", col);
  blackBut.style("text-color", col5);

  redbut = createButton("R");
  redbut.style("background-color", col2);

  blueBut = createButton("B");
  blueBut.style("background-color", col3);
  
  greenBut = createButton("G");
  greenBut.style("background-color", col4);

  Eraser = createButton("ERASER");
  
  SunBut=createButton("ENTER = Sunflower");
  
  circBut=createButton("SHIFT = Ellipse");
  
  RectBut=createButton("Ctrl = Rectangle");
  
  BackBut=createButton("BACKSPACE = stop")


  slider = createSlider(1, 100, 10);
  background(255);

// welcome screen is a loop of the text to start when the program is opened
  for (x = 10; x < width; x = x + 230) {
    for (y = 30; y <= height; y += 50) {
      fill(random(50), 0, random(500));
      text("WELCOME Press 'START' to draw", x, y, 250, 25);
    }
  }
}

function draw() {
//called functions into the draw function so they could be used
  ControlPressed();
  ShiftPressed();
  ActivatesunFlower();

//added if statement to the DRAWLINE function to activate the pen when the mouse is clicked
  if (mouseIsPressed) {
    if (mouseY < 480) {
      DRAWLINE();
    }
  }
//called buttons into the Draw function and added mouse pressed events to activate specific colours
  clearBut.mousePressed(function () {
    background(255);
  });
  redbut.mousePressed(function () {
    stroke(200, 100, 100);
  });
  blueBut.mousePressed(function () {
    stroke(50, 50, 800);
  });
  greenBut.mousePressed(function () {
    stroke(50, 500, 50);
  });
  blackBut.mousePressed(function () {
    stroke(0);
  });
  Eraser.mousePressed(function () {
    stroke(255);
  });
  START.mousePressed(function () {
    background(255);
  });
}
