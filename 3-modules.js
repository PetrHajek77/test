// const names = require("./4-names");
const { john, paul } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
console.log(data);

sayHi("Petr");
sayHi(john);
sayHi(paul);
