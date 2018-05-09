import express from "express";
import { Bork } from "./bork";
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));

// console.log("test", express);

let myBork = new Bork();

//Property initializers are not on the prototype.
console.log(myBork.__proto__.boundFunction); // > undefined

//Bound functions are bound to the class instance.
console.log(myBork.boundFunction.call(undefined)); // > "bork"

//Static function exists on the class.
console.log(Bork.staticFunction()); // > "babelIsCool"
