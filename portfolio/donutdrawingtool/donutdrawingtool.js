var img;
var initials ='ah'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://Anqho231.github.io/74.png');
  img2 = loadImage('https://Anqho231.github.io/bakery-shop-interior-cartoon-vector-48434834.jpeg');
}

function setup() {
 createCanvas(600, 600);  // canvas size
 background(screenbg);   // use our background screen color
 image(img2, 0, 0, width, height);
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
  }
function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // dough for jelly donut
  stroke(230, 180, 130);
    strokeWeight(25);
    fill(280, 201, 153);
    circle(mouseX, mouseY, 50, 50);
    
      } else if (toolChoice == '2') { // (jelly)

    stroke(176, 23, 23, 95);
    strokeWeight(15);
    stroke("magenta")
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // (yellow sprinkle)

    stroke(247, 218, 161);
    strokeWeight(5);
    stroke("yellow")
   strokeWeight(4);
line(0, 0, 0, 0);
line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') { // (green sprinkle)

   stroke(247, 218, 161);
    strokeWeight(5);
    stroke("green")
    line(0, 0, 0, 10, 10, 0);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') { // (blue sprinkle)
      
     stroke(247, 218, 161);
    strokeWeight(5);
    stroke("blue")
    line(0, 0, 0, 10, 10, 0);
    line(mouseX, mouseY, pmouseX, pmouseY);
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  }  if (toolChoice == '6' ) {  // dough for glazed donut
  stroke(350, 160, 120);
    strokeWeight(25);
    fill(280, 201, 153);
    circle(mouseX, mouseY, 40, 40);
}
  
  else if (toolChoice == '7') { // (glaze)
    
    stroke(28, 26, 22);
    strokeWeight(8);
    stroke("white")
    circle(mouseX, mouseY, 5, 5);
  } 
  
  else if (toolChoice == '8') { // (oreo/chocolate cookie bits)
  stroke(28, 26, 22);
    strokeWeight(8);
    fill (0,0,0)
    ellipse(pmouseX-3, pmouseY, 30, 25, 30);
  } 
   else if (toolChoice == '9') { // (strawberry sauce)
  stroke(176, 23, 23, 95);
    strokeWeight(8)
    stroke("red");
    fill(127,0,0);
 line(0, 0, 0, 10, 10, 0) ;
    line(mouseX, mouseY, pmouseX, pmouseY);
  } 
   else if (toolChoice == '0') { // (light pink frosting)
  stroke(176, 23, 23, 95);
    strokeWeight(8)
    stroke("pink");
    fill(255,200,200);
    line(mouseX, mouseY, pmouseX, pmouseY);
    }
else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded;
    image(img, mouseX, mouseY, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
