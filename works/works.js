const workArea=document.querySelector("#workArea"); //This the parent node that contains the links for the works
const workButton= document.createElement("a");//Creates a button that opens the options of works
workButton.setAttribute("id", "currentWorks");
let workWords= document.createTextNode(`Click here to choose between works`);
workButton.appendChild(workWords);
workArea.appendChild(workButton);
workButton.addEventListener("click", addWorks);

function addWorks() {
    const randomMessageGenerator= document.createElement("a"); //Creates a link that holds the function to open the works page
    randomMessageGenerator.setAttribute("class", "workLinks"); //Groups work links together so that they can be styled as one
    const generatorWords = document.createTextNode(`Random Message Generator`);
    randomMessageGenerator.appendChild(generatorWords);
    workButton.appendChild(randomMessageGenerator);
    randomMessageGenerator.addEventListener("click", toMessages);
}


function toMessages () {
    window.location.href= "./messageGenerator/randomMessages.html";
}


