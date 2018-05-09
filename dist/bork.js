"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bork = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bork = exports.Bork = function Bork() {
  var _this = this;

  (0, _classCallCheck3.default)(this, Bork);
  this.instanceProperty = "bork";

  this.boundFunction = function () {
    return _this.instanceProperty;
  };
}
//Property initializer syntax


//Static class properties
;

Bork.staticProperty = "babelIsCool";

Bork.staticFunction = function () {
  return Bork.staticProperty;
};
//# sourceMappingURL=bork.js.map