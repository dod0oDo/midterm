// Midterm project: d0do faces

let faces = []; // ARRAY: stores all the moving faces
let faceImage;

function preload() {
  faceImage = loadImage('face.webp');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  
  for (let i = 0; i < 150; i++) {
    faces.push(new mover());
  }
}

function draw() {
  background(255, 60, 100, 50); // transparent background makes trails

  // LOOP: display and move every face in the array
  for (let i = 0; i < faces.length; i++) {
    faces[i].display();
    faces[i].update();
    faces[i].keepInCanvas();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
