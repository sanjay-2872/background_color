
var colorcode=document.querySelector("h3");
var color1=document.querySelector(".inp1");
var color2=document.querySelector(".inp2");
var body=document.getElementById("bgradient");
// console.log(body);
 
 function usegradent(){
 	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";

 	colorcode.textContent=body.style.background+";";
 }

 color1.addEventListener("input",usegradent);
 color2.addEventListener("input",usegradent);

// console.log(colorcode);



