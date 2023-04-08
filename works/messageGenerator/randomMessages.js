
/*
The purpose of this challenge was to use javascript to create a random message. The random message
is created through the click of a button. 
*/ 

//Arrays used to create random messages
const city = ["Portsmouth", "Abilene", "Poughkeepsie", "New York"];
const state = ["Virginia", "Texas", "California", "New York"];
const message = [
    "The alpaca is know to hunt tigers with their bear hooves in this location!",
    "The average pizza slice in this state is better than pizzas from Italy!",
    "There was a Wooly Mammoth spotted here in 1976!",
    "This city is the only city that Chuck Norris can't visit!"
];


const messageGenerator = () => {
//randomOutPut function is used to randomize index selection of an array.
const randomOutput = (arr) => {
    let output = arr[Math.floor(Math.random()*arr.length)];
    console.log(output)
    return output;
};
//These variables were used to run and hold the result of the randomOutPut() on each variable of city, state, and message.
//Thus, returning a random message
let randomCity = randomOutput(city);
let randomState = randomOutput(state);
let randomMessage = randomOutput(message);
return `Here's a fun fact about ${randomCity}, ${randomState}. ${randomMessage}`;
};

//Event listener to display random message when a button is clicked
const msgButton = document.getElementById("messageButton");
msgButton.addEventListener("click", (event) => {
    document.getElementById("rMessage").innerHTML= messageGenerator();
})

