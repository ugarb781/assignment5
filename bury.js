//interaction #1
// hover over any letter
//orange screen pops up white font
// move away
//back to normal
//get elements from html document with id names called letterB,letterU, letterRand letterY

//get elements from the html document named  letter b, u, r ,y
b = document.getElementById('letterB');
u = document.getElementById('letterU');
r = document.getElementById('letterR');
y = document.getElementById('letterY');

//b.addEventListener("mouseover", createOrange);
//u.addEventListener("mouseover", createOrange);
//r.addEventListener("mouseover", createOrange);
//y.addEventListener("mouseover", createOrange);



//function createOrange(){
  //create an element called oscreen
//  var oscreen = document.createElement("div");
  //get class element from css called cover
//  oscreen.classList.add("cover");
  //get an element id from the html document called cover
//  var cover = document.getElementById('cover');
  //add oscren to cover
//  cover.appendChild(oscreen);

//}

//listens for a click
//performs function change changeColor
u.addEventListener("click", changeColor);


//INTERACTION 1: CHANGE THE COLOR
//function name
function changeColor(){
  var u_id = prompt("enter a number between 1 and 4");

  //if u_id equals 1 the U letter turns white
  if (u_id == 1){
    u.style.backgroundColor = "white";
  }
  // turns black
  else if (u_id == 2){
    u.style.backgroundColor = "rgb(85, 124, 64)";
  }
  //turns to rgb color
  else if (u_id == 3){
    u.style.backgroundColor = "rgb(39, 135, 123)";
  }

  //turns to rgb color
  else if (u_id == 4){
    u.style.backgroundColor = "rgb(54, 17, 55)";
  }
}

b.addEventListener("click", coverScreen);
//INTERACTION 2: randomize and make "bury" the screen with shapes
//if the random number is higher than some number background color of shapes are black and rgb

//trouble im having i want some of the letter shapes to stretch

function coverScreen() {
  for (i = 0; i < 7; i++){
  	var letter = document.createElement('div');
    // make a div
    //random positioning
    letter.style.left = Math.random() * 1500 + "px";
    letter.style.top = Math.random() * 800 + "px";
    //changing the features of the upperB
    letter.style.height ="50px";
    letter.style.width = "80px";
    //applies css class called upperb
    letter.classList.add("upperB");
    letter.id = i
    //letter is assigned variable
    //get element bby the id name Bury
    var bury = document.getElementById('bury');
    //bury is applied to letter?
    bury.appendChild(letter);
    //if random number is greater than .25 color is black
    if (Math.random() > 0.25){
      letter.style.backgroundColor = "black";
    }// less than it's rgb
    if (Math.random() < 0.25){
      letter.style.backgroundColor= "rgb(255, 168, 54)";

    }
  }
}



//INTERACTION 3: offuscate


//trying to add animation here too
//listening for the mouse to go over the div to offuscate
b.addEventListener("mouseover", offuscateShape);
u.addEventListener("mouseover", offuscateShape);
r.addEventListener("mouseover", offuscateShape);
y.addEventListener("mouseover", offuscateShape);

//listens for the mouse leaving to perform returnShape function
b.addEventListener("mouseout", returnShape);
u.addEventListener("mouseout", returnShape);
r.addEventListener("mouseout", returnShape);
y.addEventListener("mouseout", returnShape);

function offuscateShape(){
  //grab element by the id body assign as bg
  bg = document.getElementById('body');
  //changes background color
  bg.style.backgroundColor = "rgb(222, 125, 11)";
  var def = document.createElement("p");
	//create a p tag element
	var defintion = document.createTextNode("(v) to cover from view");
	// creating a text node
	def.appendChild(defintion);
	// attaching the def to the defintion so p tag to the text node
	var textdef = document.getElementById('textdef');

  //style elements CSS
  textdef.style.color = "white";
  textdef.style.height= "100px";
  textdef.style.fontSize= "25px";
  textdef.style.width = "300px";
  textdef.style.display="block";
  textdef.style.position = "absolute";
  textdef.style.fontFamily = "Arial";
  textdef.style.bottom = "140px";
  textdef.style.left= "850px";
  //applying the id to the def
	textdef.appendChild(def);
}
//makes everything sort of disappear
function returnShape(){
  bg.style.backgroundColor = "black";
  textdef.style.display="none";
  // im not sure how to remove this container.removeChild(para);

}

bury.addEventListener("click", vanish);

var alerted = false;

// variable called alerted equals false
function vanish(){
  //when true perform function
  alerted = true;
  wasClicked();
  // i'm not sure why this isn't working
  //bury.style.backgroundColor = "rgb(255, 0, 138)";
  //delays change by 3 seconds and the bury features are all gones
  setTimeout(function gone(){  bury.style.display = "none";}, 3000)
}
//when it is clicked it shows an alert
function wasClicked(){
  if (alerted == true){
     alert("You are removing the shapes. Refresh to make more shapes.");
  }
}

//having trouble making this the text be responsive
//referencing coding from W3 schools to test media query
//function myFunction(x) {
  //if (x.matches) { // If media query matches
    //document.body.style.backgroundColor = "yellow";
  //  var textdef = document.getElementById('textdef');
  //  textdef.style.bottom = "10px";
  //  textdef.style.color = "red";
  //  textdef.style.left= "100px;"
//  } else {
   document.body.style.backgroundColor = "black";
//  }
//}

//var x = window.matchMedia("(max-width: 667px)")
//myFunction(x) // Call listener function at run time
//x.addListener(myFunction) // Attach listener function on state changes


//INTERACTION 4:remove the new shapes?
//basically make a function where you can return to normal
