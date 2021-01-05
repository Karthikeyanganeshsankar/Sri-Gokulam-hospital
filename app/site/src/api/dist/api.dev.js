"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CONFIG = "http://localhost:8000";

var fetchData = function fetchData(url, method, data) {
  var AUTH_TOKEN;
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          AUTH_TOKEN = sessionStorage.getItem('SGH');

          if (AUTH_TOKEN) {
            _axios["default"].defaults.headers['authorization'] = AUTH_TOKEN;
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(_axios["default"][method](CONFIG + url, data));

        case 4:
          return _context.abrupt("return", _context.sent);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = fetchData;
exports["default"] = _default;