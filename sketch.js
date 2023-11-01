function setup() {
    createCanvas(400, 400);
     background("lightgray");
    
    }
  function draw() {
   
    stroke("purple");
    fill("lightblue");
    
    if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 20);
  }
  
  
  }