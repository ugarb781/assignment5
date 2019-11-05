//get elements from html document with id names called letterB,letterU, letterRand letterY
b = document.getElementById('letterB');
u = document.getElementById('letterU');
r = document.getElementById('letterR');
y = document.getElementById('letterY');

//when mouse is over b perform oneLine function
b.addEventListener("mouseover", oneLine);
u.addEventListener("click", changeColor);
u.addEventListener("mouseup", stayColor);
r.addEventListener("click", outlineElements);


//during oneLine function b,u,y change style position to 800px
//INTERACTION 1
function oneLine(){
  b.style.top = "1700px";
  u.style.top = "1700px";
  r.style.top = "1700px";
  y.style.top = "1700px";
}
//interaction2
// when mouse is up change to this color
function stayColor(){
  u.style.backgroundColor = "rgb(247, 173, 9)";
}

// creates a prompt that pops up to ask user to write a number
//INTERACTION 3
function changeColor(){
  var u_id = prompt("enter a number between 1 and 4");

  //if u_id equals 1 the U letter turns white
  if (u_id == 1){
    u.style.backgroundColor = "white";
  }
  // turns black
  else if (u_id == 2){
    u.style.backgroundColor = "black";
  }
  //turns to rgb color
  else if (u_id == 3){
    u.style.backgroundColor = "rgb(39, 135, 123)";
  }

  //turns to rgbb color
  else if (u_id == 4){
    u.style.backgroundColor = "rgb(44, 64, 60)";
  }
}

//Interaction 4

//get elements by their id names and change to background color
function outlineElements(){
  hole = document.getElementById('rhole');
  hole.style.border = "solid 2px white";
  upperR = document.getElementById('upperR');
  upperR.style.border = "solid 2px white";
  upperR.style.backgroundColor = "rgb(50, 25, 16)";
  leg = document.getElementById ('Rstem');
  leg.style.border = "solid 2px white";
  leg.style.backgroundColor = "rgb(50, 25, 16)";
  otherl = document.getElementById('Rleg');
  otherl.style.border = "solid 2px white";
  otherl.style.backgroundColor = "rgb(50, 25, 16)";
  inner = document.getElementById('inner');
  inner.style.border = "solid 2px white";
  inner.style.backgroundColor = "rgb(50, 25, 16)";
  //delay 2 seconds and change to similar look except grey
  setTimeout (function change(){  inner.style.border = "solid 0px";hole.style.border = "solid 0px"; upperR.style.backgroundColor = "grey"; upperR.style.border = "solid 0px"; leg.style.backgroundColor = "grey"; leg.style.border = "solid 0px "; otherl.style.backgroundColor = "grey"; otherl.style.border = "solid 0px";}, 2000)
}

//create a div element called circle
function createCircleDiv(){
	var circle = document.createElement("div");
  //add a CSS class called circle
	circle.classList.add("circle");
  //get a div id called bury
  var bury = document.getElementById('bury');
  //apply bury div id to circle class
	bury.appendChild(circle);
}


//calling function and makes one iteration
createCircleDiv();


//if i is less than 495 make a circle
for (i = 0; i < 495; i++){
	createCircleDiv();
}
