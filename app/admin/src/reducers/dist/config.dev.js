"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = config;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function config() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    name: 'SRI GOKULAM HOSPITAL',
    description: 'SRI GOKULAM HOSPITAL admin panel',
    url: 'https://d-board-nextjs.mobifica.com',
    layout: 'layout-1',
    collapsed: false,
    rightSidebar: false,
    backdrop: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_CONFIG':
      return _objectSpread({}, state, {}, action.config);

    case 'SET_CONFIG_KEY':
      return _objectSpread({}, state, _defineProperty({}, "".concat(action.key), action.value));

    default:
      return state;
  }
}