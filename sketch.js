var button , greeting , input;

function setup(){
  
  var canvas = createCanvas(displayWidth/2,displayHeight/2);

  // The First Coloumn

  button = createButton("YES");
  button.position(displayWidth - 1370,displayHeight-910);
  button.mouseClicked(vote1);
  button = createButton("NO");
  button.position(displayWidth - 1370,displayHeight-880);
  button.mouseClicked(vote1);
  greeting = createElement("h3");
  greeting.html("Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
  greeting.position(displayWidth-1400,displayHeight-980);

  // The Second Coloumn

  button = createButton("YES");
  button.position(displayWidth - 1370,displayHeight-760);
  button.mouseClicked(vote2);
  button = createButton("NO");
  button.position(displayWidth - 1370,displayHeight-730);
  button.mouseClicked(vote2);
  greeting = createElement("h3");
  greeting.html("Would you be willing to contribute a small amount every month for such a program?");
  greeting.position(displayWidth-1400,displayHeight-820);

  // The Third Coloumn

  button = createButton("100");
  button.position(displayWidth - 1370,displayHeight - 620);
  button.mouseClicked(vote3);
  button = createButton("500");
  button.position(displayWidth - 1370,displayHeight - 590);
  button.mouseClicked(vote3);
  button = createButton("1000");
  button.position(displayWidth - 1370,displayHeight - 560);
  button.mouseClicked(vote3);
  button = createButton("5000");
  button.position(displayWidth - 1370,displayHeight - 530);
  button.mouseClicked(vote3);
  button = createButton("MORE");
  button.position(displayWidth - 1370,displayHeight - 500);
  button.mouseClicked(vote4);
  greeting = createElement("h3");
  greeting.html("How much per month would you be willing to pay?");
  greeting.position(displayWidth-1400,displayHeight-680);
  input = createInput("Name");
  input.position(displayWidth - 1100,displayHeight - 1040);
  
}
function draw(){

}
function vote1(){
  greeting = createElement("h2");
  greeting.html("VOTED!");
  greeting.position(displayWidth - 1000,displayHeight - 930);
}
function vote2(){
  greeting = createElement("h2");
  greeting.html("VOTED!");
  greeting.position(displayWidth - 1000,displayHeight - 770);
}
function vote3(){
  greeting = createElement("h2");
  greeting.html("THANKS FOR YOUR DONATION! :)");
  greeting.position(displayWidth - 1000,displayHeight-600);
}
function vote4(){
  input = createInput("AMOUNT PLEASE!");
  input.position(displayWidth - 1000,displayHeight - 580);
  button = createButton("SUBMIT");
  button.position(displayWidth - 800,displayHeight - 580);
  button.mouseClicked(vote5);
}
function vote5(){
  greeting = createElement("h2");
  greeting.html("THANKS FOR YOUR DONATION! :)");
  greeting.position(displayWidth - 1100,displayHeight - 550);
}