"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bork = require("./bork");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get("/", function (req, res) {
  return res.send("Hello World!");
});

app.listen(3000, function () {
  return console.log("Example app listening on port 3000!");
});

// console.log("test", express);

var myBork = new _bork.Bork();

//Property initializers are not on the prototype.
console.log(myBork.__proto__.boundFunction); // > undefined

//Bound functions are bound to the class instance.
console.log(myBork.boundFunction.call(undefined)); // > "bork"

//Static function exists on the class.
console.log(_bork.Bork.staticFunction()); // > "babelIsCool"
//# sourceMappingURL=index.js.map