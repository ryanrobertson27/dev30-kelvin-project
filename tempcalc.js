// creating a constant, kelvin, and assign it the value 293

const kelvin = 0;

// converting kelvin to celsius. C = K - 273

let celsius = kelvin - 273;

// converting celsius to fahrenheit. F = C * (9 / 5) + 32

let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

// converting fahrenheit to a whole number;

fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)

// converting celsius to newton. N = C * (33 / 100)

let newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${newton} degrees newton.`)