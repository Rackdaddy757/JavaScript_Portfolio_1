//import username from "../main.js"

let firstThing = prompt('Welcome to my "Matrix". Please enter your name.'); 

  const username = firstThing;

let pageInfo = document.querySelector("#pageInfo");
const synopsis = document.createElement("p");
const daysOfWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date();
let currentDay= daysOfWeek[today.getDay()];
let message = document.createTextNode(
`Welcome ${username}!
First off, Thank You for viewing my page on this
wonderful ${currentDay}. As cliche as it sounds, you literally could be doing anything else
but you're here. So, thank you! I have an "About Me" page that talks about who I am and why I've 
chosen a path in tech. My "Works" page is where you will find the projects that I've been working on
as well as the link to my Github profile. The "Contact" page is a mock up of a typical contact page. 
Any personally identifiable information presented on that page is fictional. Lastly, this website does not
store anything in a database. `);
synopsis.appendChild(message);
pageInfo.appendChild(synopsis);