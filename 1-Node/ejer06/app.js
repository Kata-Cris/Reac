let supervillains = require("supervillains")
let factorial = require("./funciones/funcion")


for (let i = 0; i < 4; i++) {

    console.log(supervillains.all[factorial(Math.floor(Math.random() * (5-1) + 1))])

}
