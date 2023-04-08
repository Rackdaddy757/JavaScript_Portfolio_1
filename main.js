
const navvyList= document.getElementById("navvyList");
const redOne= document.querySelector("#redPill");
const blueOne= document.querySelector("#bluePill");



function redPill () {
  window.location.href= "./home/home.html";  
 
}

function bluePill () {
  alert("Believe what you will...");
  window.location.href= "./sleep.html";    
}

//function calls for the page
redOne.addEventListener('click', redPill);
blueOne.addEventListener('click', bluePill);

//export default username;