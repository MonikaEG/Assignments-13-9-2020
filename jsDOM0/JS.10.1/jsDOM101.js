let today = new Date()

console.log(today); //Returns current local date and time

// var txt = document.getElementById("today"); virkede ikke, men jeg ville gerne have et alternativ til document.write

Math.floor(Math.random() * 100) + 1; //generates a random number between 0 - 100
console.log(Math.random() * 100) +1;

//Creates slider
var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle) - dette kunne jeg ikke umiddelbart få til at virke.
slider.oninput = function() {
  output.innerHTML = this.value;
}