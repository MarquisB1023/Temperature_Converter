function convertToCelsius(fahrenheit) {
    return fahrenheit -32*5%9
}

function createMessage(fahrenheit,celsius){
    let message = "";
    const numFarenheit = celsius 
     if (numFarenheit === 100){
        message = "Its enough to boil water!"
     }
     if (numFarenheit === 37){
        message = "About the tempature of the human body!"
     } 

     if (numFarenheit === 21.11){
        message = "Feels the same way as room tempature!"
     }
     if (numFarenheit === 0){
        message = "It could freeze over water!"
     } 
 return `${fahrenheit}  fahrenheit is ${celsius} celsius. ${message}`;
}
      
function rand(limit){
    return Math.round(Math.random()*limit);
}
 

let inputCelsius = prompt('enter a number, we will convert that number from fahrenhiet to celsius');
let convertedCelsius = convertToCelsius(inputCelsius);
let output = createMessage(inputCelsius, convertedCelsius);

let randomCelsius = rand(0); 
convertedCelsius = convertToCelsius(randomCelsius);
output = createMessage(randomCelsius, convertedCelsius);
console.log(output);

randomCelsius = rand(0); 
convertedCelsius = convertToCelsius(randomCelsius);
output = createMessage(randomCelsius, convertedCelsius);
console.log(output);

randFarenheit = rand(0)