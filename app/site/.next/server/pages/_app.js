module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "0NCP":
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2X1V":
/***/ (function(module, exports) {



/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4GYc":
/***/ (function(module, exports) {



/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6gEJ":
/***/ (function(module, exports) {



/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "D9l6":
/***/ (function(module, exports) {



/***/ }),

/***/ "DbpL":
/***/ (function(module, exports) {

module.exports = require("react-switch");

/***/ }),

/***/ "EUNP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/section-title/index.js
var section_title = __webpack_require__("L4s6");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/components/tabs/index.js
var __jsx = external_react_default.a.createElement;


const UnderlinedTabs = ({
  tabs
}) => {
  const {
    0: openTab,
    1: setOpenTab
  } = Object(external_react_["useState"])(0);
  return __jsx("div", {
    className: "flex flex-wrap flex-col w-full tabs"
  }, __jsx("div", {
    className: "flex lg:flex-wrap flex-row lg:space-x-2"
  }, tabs.map((tab, key) => __jsx("div", {
    key: key,
    className: "flex-none"
  }, __jsx("button", {
    onClick: () => {
      setOpenTab(tab.index);
    },
    className: openTab === tab.index ? 'tab tab-underline tab-active' : 'tab tab-underline',
    type: "button"
  }, __jsx(link_default.a, {
    href: tab.url
  }, __jsx("a", null, tab.title)))))), tabs.map((tab, key) => __jsx("div", {
    key: key,
    className: `tab-content ${openTab !== tab.index ? 'hidden' : 'block'}`
  }, tab.content)));
};
// EXTERNAL MODULE: ./src/components/widget/index.js
var widget = __webpack_require__("gWdR");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/components/portal/index.js
var portal = __webpack_require__("TqBW");

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("jDDT");

// EXTERNAL MODULE: ./src/api/api.js
var api = __webpack_require__("TsPW");

// EXTERNAL MODULE: external "react-datetime"
var external_react_datetime_ = __webpack_require__("TxAV");
var external_react_datetime_default = /*#__PURE__*/__webpack_require__.n(external_react_datetime_);

// CONCATENATED MODULE: ./src/pages/tabs.js
var tabs_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import AccountLinks from './account-links'
// import {FiSettings, FiHeart, FiMenu} from 'react-icons/fi'
// import {FiPlus} from 'react-icons/fi'
// import SectionTitle from '../components/section-title'
// import Modal1 from '../components/modals/modal-1'
// import Link from 'next/link'
// 
// import React, {useState, useEffect, useRef} from 'react'









const tabs_tabs = [{
  index: 0,
  title: 'Home',
  active: true,
  url: '/'
}, {
  index: 1,
  title: 'About Us',
  active: false,
  url: '/about'
}, {
  index: 2,
  title: 'Facilities',
  active: false,
  url: '/facilities'
}, {
  index: 3,
  title: 'Departments',
  active: false,
  url: '/departments'
}, {
  index: 4,
  title: 'Education',
  active: false,
  url: '/education'
}, {
  index: 5,
  title: 'Insurance',
  active: false,
  url: '/insurance'
}, {
  index: 6,
  title: 'Health Plan',
  active: false,
  url: '/health-plan'
}, {
  index: 7,
  title: 'Career',
  active: false,
  url: '/career'
}, {
  index: 8,
  title: 'Contact Us',
  active: false,
  url: '/contact-us'
}];

const Index = ({
  title,
  body
}) => {
  let router = Object(router_["useRouter"])();
  let {
    0: name,
    1: setname
  } = Object(external_react_["useState"])(''),
      {
    0: name_err,
    1: setname_err
  } = Object(external_react_["useState"])(false),
      {
    0: clicked,
    1: setclicked
  } = Object(external_react_["useState"])(false),
      {
    0: email,
    1: setemail
  } = Object(external_react_["useState"])(''),
      {
    0: email_err,
    1: setemail_err
  } = Object(external_react_["useState"])(false),
      {
    0: phone,
    1: setphone
  } = Object(external_react_["useState"])(''),
      {
    0: phone_err,
    1: setphone_err
  } = Object(external_react_["useState"])(false),
      {
    0: gender,
    1: setgender
  } = Object(external_react_["useState"])(''),
      {
    0: gender_err,
    1: setgender_err
  } = Object(external_react_["useState"])(false),
      {
    0: age,
    1: setage
  } = Object(external_react_["useState"])(''),
      {
    0: age_err,
    1: setage_err
  } = Object(external_react_["useState"])(false),
      {
    0: date,
    1: setdate
  } = Object(external_react_["useState"])(''),
      {
    0: time,
    1: settime
  } = Object(external_react_["useState"])(''),
      {
    0: time_err,
    1: settime_err
  } = Object(external_react_["useState"])(false),
      {
    0: department_arr,
    1: setdepartment_arr
  } = Object(external_react_["useState"])(false),
      {
    0: department_id,
    1: setdepartment_id
  } = Object(external_react_["useState"])(''),
      {
    0: department_id_err,
    1: setdepartment_id_err
  } = Object(external_react_["useState"])(false),
      {
    0: appoinment_date_err,
    1: setappoinment_date_err
  } = Object(external_react_["useState"])(false),
      {
    0: appoinment_date,
    1: setappoinment_date
  } = Object(external_react_["useState"])(new Date());

  let onChange = (e, name) => {
    if (String(name) === String('name')) {
      if (!e.target.value) {
        setname_err(true);
      } else {
        setname_err(false);
      }

      setname(e.target.value);
    }

    if (String(name) === String('email')) {
      if (!e.target.value) {
        setemail_err(true);
      } else {
        setemail_err(false);
      }

      setemail(e.target.value);
    }

    if (String(name) === String('phone')) {
      if (!e.target.value) {
        setphone_err(true);
      } else {
        setphone_err(false);
      }

      setphone(e.target.value);
    }

    if (String(name) === String('gender')) {
      if (!e.target.value) {
        setgender_err(true);
      } else {
        setgender_err(false);
      }

      setgender(e.target.value);
    }

    if (String(name) === String('age')) {
      if (!e.target.value) {
        setage_err(true);
      } else {
        setage_err(false);
      }

      setage(e.target.value);
    }

    if (String(name) === String('date')) {
      if (!e.target.value) {
        setdate_err(true);
      } else {
        setdate_err(false);
      }

      setdate(e.target.value);
    }

    if (String(name) === String('appoinment_date')) {
      if (!e) {
        setappoinment_date_err(true);
      } else {
        setappoinment_date_err(false);
      }

      setappoinment_date(e);
    }

    if (String(name) === String('time')) {
      if (!e.target.value) {
        settime_err(true);
      } else {
        settime_err(false);
      }

      settime(e.target.value);
    }

    if (String(name) === String('department_id')) {
      if (!e.target.value) {
        setdepartment_id_err(true);
      } else {
        setdepartment_id_err(false);
      }

      setdepartment_id(e.target.value);
    }

    if (String(name) === String('appoinment_date')) {
      if (!e) {
        setappoinment_date_err(true);
      } else {
        setappoinment_date_err(false);
      }

      setappoinment_date(e);
    }
  };

  let submit = e => {
    e.preventDefault();

    if (!name) {
      setname_err(true);
      return external_react_toastify_["toast"].error('Name is required');
    }

    if (!email) {
      setemail_err(true);
      return external_react_toastify_["toast"].error('Email is required');
    }

    if (!phone) {
      setphone_err(true);
      return external_react_toastify_["toast"].error('Phone is required');
    }

    if (!gender) {
      setgender_err(true);
      return external_react_toastify_["toast"].error('Gender is required');
    }

    if (!age) {
      setage_err(true);
      return external_react_toastify_["toast"].error('Age is required');
    }

    if (!time) {
      settime_err(true);
      return external_react_toastify_["toast"].error('Time is required');
    }

    if (name_err) {
      return external_react_toastify_["toast"].error('Name is required');
    }

    if (email_err) {
      return external_react_toastify_["toast"].error('Email is required');
    }

    if (phone_err) {
      return external_react_toastify_["toast"].error('Phone is required');
    }

    if (gender_err) {
      return external_react_toastify_["toast"].error('Gender is required');
    }

    if (age_err) {
      return external_react_toastify_["toast"].error('Age is required');
    }

    if (time_err) {
      return external_react_toastify_["toast"].error('Time is required');
    }

    if (department_id_err) {
      return external_react_toastify_["toast"].error('department_id is required');
    }

    if (!appoinment_date) {
      setappoinment_date_err(true);
      return external_react_toastify_["toast"].error('Appoinment Date is required');
    }

    if (appoinment_date_err) {
      return external_react_toastify_["toast"].error('Appoinment Date is required');
    }

    setclicked(true);
    let data = {
      department_id,
      name,
      email,
      phone,
      gender,
      age,
      date,
      time,
      appoinment_date
    };
    let response = Object(api["a" /* default */])('/site/submit/appointments/details', 'post', data);
    response.then(res => {
      setclicked(false);

      if (res && res.data && +res.data.status === 0) {
        if (res.data.errors && res.data.errors.length > 0 && Array.isArray(res.data.errors)) {
          res.data.errors.map(item => {
            return external_react_toastify_["toast"].error(item.msg);
          });
        } else {
          external_react_toastify_["toast"].error(res.data.response);
        }
      } else {
        if (res && res.data && +res.data.status === 1) {
          external_react_toastify_["toast"].success(res.data.response);
          setOpen(false);
          setTimeout(() => {
            setname('');
            setemail('');
            setname_err(false);
            setemail_err(false);
            setphone('');
            setphone_err(false);
            setgender('');
            setgender_err(false);
            setage('');
            setage_err(false);
            setappoinment_date_err(false);
            settime('');
            settime_err(false);
            setdepartment_id('');
            setdepartment_id_err(false);
          }, 1000);
        }
      }
    }).catch(err => {
      console.log("err", err);
      setOpen(false);
    });
  };

  const {
    palettes
  } = Object(external_react_redux_["useSelector"])(state => ({
    palettes: state.palettes
  }), external_react_redux_["shallowEqual"]);

  let {
    background
  } = _objectSpread({}, palettes);

  const modalRef = Object(external_react_["useRef"])(null);
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);

  const show = () => {
    router.push({
      pathname: '/appoinment'
    }); // setOpen(true)
  };

  const hide = () => {
    setOpen(false);
  };

  let get_department = () => {
    let response = Object(api["a" /* default */])('/site/department/list', 'post', {});
    response.then(res => {
      if (res && res.data && +res.data.status === 0) {
        if (res.data.errors && res.data.errors.length > 0 && Array.isArray(res.data.errors)) {
          res.data.errors.map(item => {
            return external_react_toastify_["toast"].error(item.msg);
          });
        } else {
          setdepartment_arr([]);
        }
      } else {
        if (res && res.data && +res.data.status === 1) {
          setdepartment_arr(res.data.response && res.data.response.length > 0 ? res.data.response : []);
        }
      }
    }).catch(err => {
      console.log("err", err);
    });
  };

  Object(external_react_["useEffect"])(() => {
    get_department();

    const handleClickOutside = event => {
      if (!modalRef || !modalRef.current) return false;
      console.log(modalRef.current.contains(event.target));

      if (!open || modalRef.current.contains(event.target)) {
        return false;
      }

      setOpen(!open);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, modalRef]);
  return tabs_jsx(external_react_default.a.Fragment, null, tabs_jsx(external_react_toastify_["ToastContainer"], {
    position: "top-right",
    autoClose: 2500,
    closeOnClick: true
  }), tabs_jsx(widget["a" /* default */], null, tabs_jsx("div", {
    className: "flex flex-wrap"
  }, tabs_jsx("div", {
    className: "w-full"
  }, tabs_jsx(UnderlinedTabs, {
    tabs: tabs_tabs
  }))), tabs_jsx("button", {
    className: "btn btn-default btn-rounded bg-blue-500 hover:bg-blue-600 text-white",
    type: "button",
    onClick: show
  }, tabs_jsx("i", {
    className: "fa fa-bell-o"
  }), "Appointment")), open && tabs_jsx(portal["a" /* default */], {
    selector: "#portal"
  }, tabs_jsx("div", {
    className: "modal-backdrop fade-in"
  }), tabs_jsx("div", {
    className: `modal show ${background === 'dark' ? 'dark-mode' : ''}`,
    "data-background": background
  }, tabs_jsx("div", {
    className: "relative min-w-sm w-auto mx-auto lg:max-w-5xl",
    ref: modalRef
  }, tabs_jsx("div", {
    className: "modal-content"
  }, tabs_jsx("div", {
    className: "modal-header"
  }, tabs_jsx("h3", {
    className: "text-xl font-semibold"
  }, "BOOK YOUR APPOINTMENT"), tabs_jsx("button", {
    className: "modal-close btn btn-transparent",
    onClick: hide
  }, tabs_jsx(fi_["FiX"], {
    size: 18,
    className: "stroke-current"
  }))), tabs_jsx("div", {
    className: "relative p-4 flex-auto"
  }, tabs_jsx("div", null, tabs_jsx("form", null, tabs_jsx("div", {
    className: "flex flex-col lg:flex-row lg:flex-wrap lg:w-1/2"
  }, tabs_jsx("div", {
    className: "w-full "
  }, tabs_jsx("div", {
    className: `form-element`
  }, tabs_jsx("input", {
    type: "text",
    className: `form-input form-input-${name_err ? 'invalid' : 'valid'}`,
    placeholder: "name",
    value: name,
    onChange: e => onChange(e, 'name')
  }), name_err ? tabs_jsx("div", {
    className: "form-error"
  }, " Name is required") : null)), tabs_jsx("div", {
    className: "w-full "
  }, tabs_jsx("div", {
    className: `form-element`
  }, tabs_jsx("input", {
    type: "email",
    className: `form-input form-input-${email_err ? 'invalid' : 'valid'}`,
    placeholder: "email",
    value: email,
    onChange: e => onChange(e, 'email')
  }), email_err ? tabs_jsx("div", {
    className: "form-error"
  }, " Email is required") : null)), tabs_jsx("div", {
    className: "w-full "
  }, tabs_jsx("div", {
    className: `form-element`
  }, tabs_jsx("input", {
    type: "number",
    className: `form-input form-input-${phone_err ? 'invalid' : 'valid'}`,
    placeholder: "Phone Number",
    value: phone,
    onChange: e => onChange(e, 'phone')
  }), phone_err ? tabs_jsx("div", {
    className: "form-error"
  }, "phone is required") : null)), tabs_jsx("div", {
    className: "w-full "
  }, tabs_jsx("div", {
    className: `form-element`
  }, tabs_jsx("select", {
    name: "gender",
    value: gender,
    onChange: e => onChange(e, 'gender'),
    className: `form-input form-input-${gender_err ? 'invalid' : 'valid'}`
  }, tabs_jsx("option", {
    value: ""
  }, "Gender"), tabs_jsx("option", {
    value: "1"
  }, "Male"), tabs_jsx("option", {
    value: "2"
  }, "Female")), gender_err ? tabs_jsx("div", {
    className: "form-error"
  }, "Gender is required") : null)), tabs_jsx("div", {
    className: "w-full"
  }, tabs_jsx("div", {
    className: `form-element`
  }, tabs_jsx("input", {
    type: "text",
    className: `form-input form-input-${age_err ? 'invalid' : 'valid'}`,
    placeholder: "Age",
    value: age,
    onChange: e => onChange(e, 'age')
  }), age_err ? tabs_jsx("div", {
    className: "form-error"
  }, "Age is required") : null)), tabs_jsx("div", {
    className: "w-full "
  }, tabs_jsx("div", {
    className: `form-element`
  }, tabs_jsx("select", {
    name: "department_id",
    value: department_id,
    onChange: e => onChange(e, 'department_id'),
    className: `form-input form-input-${department_id_err ? 'invalid' : 'valid'}`
  }, tabs_jsx("option", {
    value: ""
  }, "Choose Department"), department_arr && department_arr.length > 0 ? department_arr.map((item, index) => {
    return tabs_jsx(external_react_default.a.Fragment, null, tabs_jsx("option", {
      key: index,
      value: item._id
    }, item.name));
  }) : null), department_id_err ? tabs_jsx("div", {
    className: "form-error"
  }, "Department is required") : null)), tabs_jsx("div", {
    className: "w-full mt-3 mb-6"
  }, tabs_jsx("div", {
    className: `form-element`
  }, tabs_jsx("div", {
    className: "form-label"
  }, "Appoinment Date ", tabs_jsx("span", {
    className: "form-error"
  }, "*")), tabs_jsx(external_react_datetime_default.a, {
    className: `form-input form-input-${appoinment_date_err ? 'invalid' : 'valid'}`,
    value: appoinment_date,
    defaultValue: new Date(),
    dateFormat: "DD-MM-YYYY",
    timeFormat: false,
    input: true,
    inputProps: {
      className: 'form-input',
      placeholder: 'Select date'
    },
    viewMode: 'days',
    onChange: e => onChange(e, 'appoinment_date')
  }), appoinment_date_err ? tabs_jsx("div", {
    className: "form-error"
  }, "Posting Date is required") : null)), tabs_jsx("div", {
    className: "w-full "
  }, tabs_jsx("div", {
    className: `form-element`
  }, tabs_jsx("select", {
    name: "time",
    value: time,
    onChange: e => onChange(e, 'time'),
    className: `form-input form-input-${time_err ? 'invalid' : 'valid'}`
  }, tabs_jsx("option", {
    value: ""
  }, "Time"), tabs_jsx("option", {
    value: "8:00 AM"
  }, "8 : 00 AM"), tabs_jsx("option", {
    value: "10:00 AM"
  }, "10 : 00 AM"), tabs_jsx("option", {
    value: "12:00 PM"
  }, "12 : 00 PM"), tabs_jsx("option", {
    value: "2:00 PM"
  }, "2 : 00 PM"), tabs_jsx("option", {
    value: "4:00 PM"
  }, "4 : 00 PM"), tabs_jsx("option", {
    value: "6:00 PM"
  }, "6 : 00 PM"), tabs_jsx("option", {
    value: "8:00 PM"
  }, "8 : 00 PM"), tabs_jsx("option", {
    value: "10:00 PM"
  }, "10 : 00 PM")), time_err ? tabs_jsx("div", {
    className: "form-error"
  }, "Time is required") : null))), tabs_jsx("button", {
    className: "btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded",
    onClick: e => submit(e),
    disabled: clicked
  }, "Submit", " "), ' '))))))));
};

/* harmony default export */ var pages_tabs = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "EooJ":
/***/ (function(module, exports) {



/***/ }),

/***/ "FwQj":
/***/ (function(module, exports) {



/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "GwD7":
/***/ (function(module, exports) {



/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ App; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./src/layouts/centered/index.js
var __jsx = external_react_default.a.createElement;


const Centered = ({
  children
}) => __jsx("div", {
  "data-layout": "centered",
  className: "w-full h-screen flex items-center justify-center bg-grey-50"
}, children);

/* harmony default export */ var centered = (Centered);
// CONCATENATED MODULE: ./src/layouts/empty/index.js
var empty_jsx = external_react_default.a.createElement;


const Empty = ({
  children
}) => {
  return empty_jsx(external_react_default.a.Fragment, null, children);
};

/* harmony default export */ var empty = (Empty);
// EXTERNAL MODULE: ./src/pages/tabs.js + 1 modules
var tabs = __webpack_require__("EUNP");

// CONCATENATED MODULE: ./src/components/navbar-1/index.js
var navbar_1_jsx = external_react_default.a.createElement;




const Navbar = () => {
  const {
    config
  } = Object(external_react_redux_["useSelector"])(state => ({
    config: state.config
  }), external_react_redux_["shallowEqual"]);
  return navbar_1_jsx("div", {
    className: "navbar navbar-1 border-b"
  }, navbar_1_jsx("div", {
    className: "navbar-inner w-full flex items-center justify-start"
  }, navbar_1_jsx(tabs["default"], null)));
};

/* harmony default export */ var navbar_1 = (Navbar);
// CONCATENATED MODULE: ./src/components/left-sidebar-1/title.js
var title_jsx = external_react_default.a.createElement;


const Title = ({
  children
}) => {
  return title_jsx("div", {
    className: "left-sidebar-title"
  }, title_jsx("span", null, children));
};

/* harmony default export */ var left_sidebar_1_title = (Title);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// CONCATENATED MODULE: ./src/components/left-sidebar-1/item.js
var item_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Item = ({
  url,
  icon,
  title,
  badge,
  items
}) => {
  const {
    0: hidden,
    1: setHidden
  } = Object(external_react_["useState"])(true);
  const router = Object(router_["useRouter"])();

  let {
    pathname
  } = _objectSpread({}, router);

  let active = pathname === url ? true : false;

  if (pathname === '/' && url === '/dashboard') {
    active = true;
  }

  if (pathname === '/' && url !== '/dashboard') {
    active = false;
  }

  if (items.length === 0) {
    return item_jsx(link_default.a, {
      href: url
    }, item_jsx("a", {
      className: `left-sidebar-item ${active ? 'active' : ''}`
    }, icon, item_jsx("span", {
      className: "title"
    }, title), badge && item_jsx("span", {
      className: `badge badge-circle badge-sm ${badge.color}`
    }, badge.text)));
  }

  return item_jsx("button", {
    onClick: () => setHidden(!hidden),
    className: `left-sidebar-item ${active ? 'active' : ''} ${hidden ? 'hidden-sibling' : 'open-sibling'}`
  }, icon, item_jsx("span", {
    className: "title"
  }, title), badge && item_jsx("span", {
    className: `badge badge-circle badge-sm ${badge.color}`
  }, badge.text), item_jsx(fi_["FiChevronRight"], {
    className: "ml-auto arrow"
  }));
};

/* harmony default export */ var left_sidebar_1_item = (Item);
// CONCATENATED MODULE: ./src/components/left-sidebar-1/logo.js
var logo_jsx = external_react_default.a.createElement;

function logo_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function logo_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { logo_ownKeys(Object(source), true).forEach(function (key) { logo_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { logo_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function logo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Logo = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    config,
    leftSidebar
  } = Object(external_react_redux_["useSelector"])(state => ({
    config: state.config,
    leftSidebar: state.leftSidebar
  }), external_react_redux_["shallowEqual"]);

  const {
    name,
    collapsed
  } = logo_objectSpread({}, config);

  const {
    showLogo
  } = logo_objectSpread({}, leftSidebar);

  if (showLogo) {
    return logo_jsx("div", {
      className: "logo truncate"
    }, logo_jsx(link_default.a, {
      href: "/"
    }, logo_jsx("a", {
      className: "flex flex-row items-center justify-start space-x-2"
    }, logo_jsx(fi_["FiBox"], {
      size: 28
    }), logo_jsx("span", null, name))), logo_jsx("button", {
      onClick: () => dispatch({
        type: 'SET_CONFIG_KEY',
        key: 'collapsed',
        value: !collapsed
      }),
      className: "ml-auto mr-4 block lg:hidden"
    }, logo_jsx(fi_["FiMenu"], {
      size: 20
    })));
  }

  return null;
};

/* harmony default export */ var logo = (Logo);
// CONCATENATED MODULE: ./src/components/left-sidebar-1/index.js
var left_sidebar_1_jsx = external_react_default.a.createElement;






const LeftSidebar = () => {
  const {
    customizeNav
  } = Object(external_react_redux_["useSelector"])(state => ({
    customizeNav: state.customizeNav
  }), external_react_redux_["shallowEqual"]);
  return left_sidebar_1_jsx("div", {
    className: "left-sidebar left-sidebar-1"
  }, left_sidebar_1_jsx(logo, null), customizeNav.map((menu, i) => left_sidebar_1_jsx(external_react_default.a.Fragment, {
    key: i
  }, left_sidebar_1_jsx(left_sidebar_1_title, null, menu.title), left_sidebar_1_jsx("ul", null, menu.items.map((l0, a) => left_sidebar_1_jsx("li", {
    key: a,
    className: "l0"
  }, left_sidebar_1_jsx(left_sidebar_1_item, l0), left_sidebar_1_jsx("ul", null, l0.items.map((l1, b) => left_sidebar_1_jsx("li", {
    key: b,
    className: "l1"
  }, left_sidebar_1_jsx(left_sidebar_1_item, l1), left_sidebar_1_jsx("ul", null, l1.items.map((l2, c) => left_sidebar_1_jsx("li", {
    key: c,
    className: "l2"
  }, left_sidebar_1_jsx(left_sidebar_1_item, l2), left_sidebar_1_jsx("ul", null, l2.items.map((l3, d) => left_sidebar_1_jsx("li", {
    key: d,
    className: "l3"
  }, left_sidebar_1_jsx(left_sidebar_1_item, l3), left_sidebar_1_jsx("ul", null, l3.items.map((l4, e) => left_sidebar_1_jsx("li", {
    key: e,
    className: "l4"
  }, left_sidebar_1_jsx(left_sidebar_1_item, l4)))))))))))))))))));
};

/* harmony default export */ var left_sidebar_1 = (LeftSidebar);
// CONCATENATED MODULE: ./src/components/right-sidebar-1/colors.js
var colors_jsx = external_react_default.a.createElement;



const Colors = ({
  title,
  palettes,
  name
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  return colors_jsx("div", {
    className: "mb-2"
  }, colors_jsx("div", {
    className: "uppercase text-sm font-normal text-grey-500 tracking-wider mb-2"
  }, title), colors_jsx("div", {
    className: "flex flex-row space-x-1"
  }, palettes.map((color, i) => colors_jsx("button", {
    key: i,
    className: `btn btn-circle btn-raised ${color.bg} ${color.text}`,
    onClick: () => {
      dispatch({
        type: 'SET_PALETTE',
        palette: {
          [`${name}`]: color.name
        }
      });
    }
  }))));
};

/* harmony default export */ var right_sidebar_1_colors = (Colors);
// CONCATENATED MODULE: ./src/components/right-sidebar-1/toggle.js
var toggle_jsx = external_react_default.a.createElement;

function toggle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function toggle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { toggle_ownKeys(Object(source), true).forEach(function (key) { toggle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { toggle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function toggle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Toggle = ({
  title,
  palettes,
  name
}) => {
  const {
    config
  } = Object(external_react_redux_["useSelector"])(state => ({
    config: state.config
  }), external_react_redux_["shallowEqual"]);

  let {
    rightSidebar
  } = toggle_objectSpread({}, config);

  const dispatch = Object(external_react_redux_["useDispatch"])();
  return toggle_jsx("button", {
    onClick: () => dispatch({
      type: 'SET_CONFIG_KEY',
      key: 'rightSidebar',
      value: !rightSidebar
    }),
    className: "btn btn-transparent btn-circle"
  }, toggle_jsx(fi_["FiX"], {
    size: 18
  }));
};

/* harmony default export */ var toggle = (Toggle);
// EXTERNAL MODULE: external "react-switch"
var external_react_switch_ = __webpack_require__("DbpL");
var external_react_switch_default = /*#__PURE__*/__webpack_require__.n(external_react_switch_);

// CONCATENATED MODULE: ./src/functions/colors.js
function isDarkPalette(color) {
  return ['dark'].includes(color);
}
function toRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
}
function getColor(color) {
  const colors = {
    transparent: 'transparent',
    black: '#000000',
    white: '#FFFFFF',
    red: {
      '50': '#ffebee',
      '100': '#ffcdd2',
      '200': '#ef9a9a',
      '300': '#e57373',
      '400': '#ef5350',
      '500': '#f44336',
      '600': '#e53935',
      '700': '#d32f2f',
      '800': '#c62828',
      '900': '#b71c1c',
      A100: '#ff8a80',
      A200: '#ff5252',
      A400: '#ff1744',
      A700: '#d50000'
    },
    pink: {
      '50': '#fce4ec',
      '100': '#f8bbd0',
      '200': '#f48fb1',
      '300': '#f06292',
      '400': '#ec407a',
      '500': '#e91e63',
      '600': '#d81b60',
      '700': '#c2185b',
      '800': '#ad1457',
      '900': '#880e4f',
      A100: '#ff80ab',
      A200: '#ff4081',
      A400: '#f50057',
      A700: '#c51162'
    },
    purple: {
      '50': '#f3e5f5',
      '100': '#e1bee7',
      '200': '#ce93d8',
      '300': '#ba68c8',
      '400': '#ab47bc',
      '500': '#9c27b0',
      '600': '#8e24aa',
      '700': '#7b1fa2',
      '800': '#6a1b9a',
      '900': '#4a148c',
      A100: '#ea80fc',
      A200: '#e040fb',
      A400: '#d500f9',
      A700: '#aa00ff'
    },
    'deep-purple': {
      '50': '#ede7f6',
      '100': '#d1c4e9',
      '200': '#b39ddb',
      '300': '#9575cd',
      '400': '#7e57c2',
      '500': '#673ab7',
      '600': '#5e35b1',
      '700': '#512da8',
      '800': '#4527a0',
      '900': '#311b92',
      A100: '#b388ff',
      A200: '#7c4dff',
      A400: '#651fff',
      A700: '#6200ea'
    },
    indigo: {
      '50': '#e8eaf6',
      '100': '#c5cae9',
      '200': '#9fa8da',
      '300': '#7986cb',
      '400': '#5c6bc0',
      '500': '#3f51b5',
      '600': '#3949ab',
      '700': '#303f9f',
      '800': '#283593',
      '900': '#1a237e',
      A100: '#8c9eff',
      A200: '#536dfe',
      A400: '#3d5afe',
      A700: '#304ffe'
    },
    blue: {
      '50': '#e3f2fd',
      '100': '#bbdefb',
      '200': '#90caf9',
      '300': '#64b5f6',
      '400': '#42a5f5',
      '500': '#2196f3',
      '600': '#1e88e5',
      '700': '#1976d2',
      '800': '#1565c0',
      '900': '#0d47a1',
      A100: '#82b1ff',
      A200: '#448aff',
      A400: '#2979ff',
      A700: '#2962ff'
    },
    'light-blue': {
      '50': '#e1f5fe',
      '100': '#b3e5fc',
      '200': '#81d4fa',
      '300': '#4fc3f7',
      '400': '#29b6f6',
      '500': '#03a9f4',
      '600': '#039be5',
      '700': '#0288d1',
      '800': '#0277bd',
      '900': '#01579b',
      A100: '#80d8ff',
      A200: '#40c4ff',
      A400: '#00b0ff',
      A700: '#0091ea'
    },
    cyan: {
      '50': '#e0f7fa',
      '100': '#b2ebf2',
      '200': '#80deea',
      '300': '#4dd0e1',
      '400': '#26c6da',
      '500': '#00bcd4',
      '600': '#00acc1',
      '700': '#0097a7',
      '800': '#00838f',
      '900': '#006064',
      A100: '#84ffff',
      A200: '#18ffff',
      A400: '#00e5ff',
      A700: '#00b8d4'
    },
    teal: {
      '50': '#e0f2f1',
      '100': '#b2dfdb',
      '200': '#80cbc4',
      '300': '#4db6ac',
      '400': '#26a69a',
      '500': '#009688',
      '600': '#00897b',
      '700': '#00796b',
      '800': '#00695c',
      '900': '#004d40',
      A100: '#a7ffeb',
      A200: '#64ffda',
      A400: '#1de9b6',
      A700: '#00bfa5'
    },
    green: {
      '50': '#e8f5e9',
      '100': '#c8e6c9',
      '200': '#a5d6a7',
      '300': '#81c784',
      '400': '#66bb6a',
      '500': '#4caf50',
      '600': '#43a047',
      '700': '#388e3c',
      '800': '#2e7d32',
      '900': '#1b5e20',
      A100: '#b9f6ca',
      A200: '#69f0ae',
      A400: '#00e676',
      A700: '#00c853'
    },
    'light-green': {
      '50': '#f1f8e9',
      '100': '#dcedc8',
      '200': '#c5e1a5',
      '300': '#aed581',
      '400': '#9ccc65',
      '500': '#8bc34a',
      '600': '#7cb342',
      '700': '#689f38',
      '800': '#558b2f',
      '900': '#33691e',
      A100: '#ccff90',
      A200: '#b2ff59',
      A400: '#76ff03',
      A700: '#64dd17'
    },
    lime: {
      '50': '#f9fbe7',
      '100': '#f0f4c3',
      '200': '#e6ee9c',
      '300': '#dce775',
      '400': '#d4e157',
      '500': '#cddc39',
      '600': '#c0ca33',
      '700': '#afb42b',
      '800': '#9e9d24',
      '900': '#827717',
      A100: '#f4ff81',
      A200: '#eeff41',
      A400: '#c6ff00',
      A700: '#aeea00'
    },
    yellow: {
      '50': '#fffde7',
      '100': '#fff9c4',
      '200': '#fff59d',
      '300': '#fff176',
      '400': '#ffee58',
      '500': '#ffeb3b',
      '600': '#fdd835',
      '700': '#fbc02d',
      '800': '#f9a825',
      '900': '#f57f17',
      A100: '#ffff8d',
      A200: '#ffff00',
      A400: '#ffea00',
      A700: '#ffd600'
    },
    amber: {
      '50': '#fff8e1',
      '100': '#ffecb3',
      '200': '#ffe082',
      '300': '#ffd54f',
      '400': '#ffca28',
      '500': '#ffc107',
      '600': '#ffb300',
      '700': '#ffa000',
      '800': '#ff8f00',
      '900': '#ff6f00',
      A100: '#ffe57f',
      A200: '#ffd740',
      A400: '#ffc400',
      A700: '#ffab00'
    },
    orange: {
      '50': '#fff3e0',
      '100': '#ffe0b2',
      '200': '#ffcc80',
      '300': '#ffb74d',
      '400': '#ffa726',
      '500': '#ff9800',
      '600': '#fb8c00',
      '700': '#f57c00',
      '800': '#ef6c00',
      '900': '#e65100',
      A100: '#ffd180',
      A200: '#ffab40',
      A400: '#ff9100',
      A700: '#ff6d00'
    },
    'deep-orange': {
      '50': '#fbe9e7',
      '100': '#ffccbc',
      '200': '#ffab91',
      '300': '#ff8a65',
      '400': '#ff7043',
      '500': '#ff5722',
      '600': '#f4511e',
      '700': '#e64a19',
      '800': '#d84315',
      '900': '#bf360c',
      A100: '#ff9e80',
      A200: '#ff6e40',
      A400: '#ff3d00',
      A700: '#dd2c00'
    },
    brown: {
      '50': '#efebe9',
      '100': '#d7ccc8',
      '200': '#bcaaa4',
      '300': '#a1887f',
      '400': '#8d6e63',
      '500': '#795548',
      '600': '#6d4c41',
      '700': '#5d4037',
      '800': '#4e342e',
      '900': '#3e2723'
    },
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121'
    },
    'blue-grey': {
      '50': '#eceff1',
      '100': '#cfd8dc',
      '200': '#b0bec5',
      '300': '#90a4ae',
      '400': '#78909c',
      '500': '#607d8b',
      '600': '#546e7a',
      '700': '#455a64',
      '800': '#37474f',
      '900': '#263238'
    }
  };
  let parts = color.replace('bg-', '').replace('text-', '').split('-');

  try {
    let key = parts[0];

    if (parts.length === 1) {
      color = colors[key];
    } else if (parts.length === 2) {
      color = colors[key][parts[1]];
    } else if (parts.length === 3) {
      key = `${parts[0]}-${parts[1]}`;
      color = colors[key][parts[2]];
    }
  } catch (e) {
    console.log(e);
  }

  return color;
}
function lighten(col, amt) {
  amt = Math.abs(amt) / 100;
  return colorLuminance(col, amt);
}
function darken(col, amt) {
  amt = Math.abs(amt);
  amt = amt / 100 * -1;
  return colorLuminance(col, amt);
}
function hexToRgbA(hex, opacity) {
  let c;
  const o = opacity || 1;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');

    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }

    c = '0x' + c.join('');
    return 'rgba(' + [c >> 16 & 255, c >> 8 & 255, c & 255].join(',') + ',' + o + ')';
  }

  return '';
}
function colorLuminance(hex, lum) {
  hex = String(hex).replace(/[^0-9a-f]/gi, '');

  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  lum = lum || 0;
  let rgb = '#',
      c,
      i;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
}
function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}
// CONCATENATED MODULE: ./src/components/right-sidebar-1/sidebar.js
var sidebar_jsx = external_react_default.a.createElement;

function sidebar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function sidebar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sidebar_ownKeys(Object(source), true).forEach(function (key) { sidebar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sidebar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function sidebar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const sidebar_Component = () => {
  let onColor = `bg-blue-200`;
  let onHandleColor = `bg-blue-500`;
  let offColor = `bg-grey-200`;
  let offHandleColor = 'bg-white';
  const {
    config
  } = Object(external_react_redux_["useSelector"])(state => ({
    config: state.config
  }), external_react_redux_["shallowEqual"]);

  let {
    collapsed
  } = sidebar_objectSpread({}, config);

  const dispatch = Object(external_react_redux_["useDispatch"])();
  return sidebar_jsx(external_react_switch_default.a, {
    onChange: () => {
      dispatch({
        type: 'SET_CONFIG',
        config: {
          collapsed: !collapsed
        }
      });
    },
    checked: collapsed,
    onColor: getColor(onColor),
    onHandleColor: getColor(onHandleColor),
    offColor: getColor(offColor),
    offHandleColor: getColor(offHandleColor),
    handleDiameter: 24,
    uncheckedIcon: false,
    checkedIcon: false,
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.2)",
    activeBoxShadow: "0px 1px 5px rgba(0, 0, 0, 0.2)",
    height: 20,
    width: 48,
    className: "react-switch"
  });
};

const Sidebar = () => {
  return sidebar_jsx("div", {
    className: "flex flex-col p-4"
  }, sidebar_jsx("div", {
    className: "uppercase text-sm font-bold tracking-wider mb-2"
  }, "Toggle sidebar"), sidebar_jsx("div", {
    className: "flex flex-col"
  }, sidebar_jsx(sidebar_Component, null)));
};

/* harmony default export */ var sidebar = (Sidebar);
// CONCATENATED MODULE: ./src/components/right-sidebar-1/demos.js
var demos_jsx = external_react_default.a.createElement;



const Demos = () => {
  const demos = [{
    name: 'demo-1',
    title: 'Light background'
  }, {
    name: 'demo-2',
    title: 'Dark background'
  }, {
    name: 'demo-3',
    title: 'Small sidebar'
  }, {
    name: 'demo-4',
    title: 'Dark sidebar'
  }, {
    name: 'demo-5',
    title: 'Dark small sidebar'
  }, {
    name: 'demo-6',
    title: 'Dark navbar'
  }];
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const setDemo = demo => {
    switch (demo) {
      case 'demo-1':
        dispatch({
          type: 'SET_CONFIG',
          config: {
            layout: 'layout-1',
            collapsed: false,
            backdrop: false
          }
        });
        dispatch({
          type: 'SET_PALETTE',
          palette: {
            background: 'light',
            leftSidebar: 'light',
            navbar: 'light'
          }
        });
        break;

      case 'demo-2':
        dispatch({
          type: 'SET_CONFIG',
          config: {
            layout: 'layout-1',
            collapsed: false,
            backdrop: false
          }
        });
        dispatch({
          type: 'SET_PALETTE',
          palette: {
            background: 'dark',
            leftSidebar: 'dark',
            navbar: 'dark'
          }
        });
        break;

      case 'demo-3':
        dispatch({
          type: 'SET_CONFIG',
          config: {
            layout: 'layout-1',
            collapsed: true,
            backdrop: false
          }
        });
        dispatch({
          type: 'SET_PALETTE',
          palette: {
            background: 'light',
            leftSidebar: 'light',
            navbar: 'light'
          }
        });
        break;

      case 'demo-4':
        dispatch({
          type: 'SET_CONFIG',
          config: {
            layout: 'layout-1',
            collapsed: false,
            backdrop: false
          }
        });
        dispatch({
          type: 'SET_PALETTE',
          palette: {
            background: 'light',
            leftSidebar: 'dark',
            navbar: 'light'
          }
        });
        break;

      case 'demo-5':
        dispatch({
          type: 'SET_CONFIG',
          config: {
            layout: 'layout-1',
            collapsed: true,
            backdrop: false
          }
        });
        dispatch({
          type: 'SET_PALETTE',
          palette: {
            background: 'light',
            leftSidebar: 'dark',
            navbar: 'light'
          }
        });
        break;

      case 'demo-6':
        dispatch({
          type: 'SET_CONFIG',
          config: {
            layout: 'layout-1',
            collapsed: false,
            backdrop: false
          }
        });
        dispatch({
          type: 'SET_PALETTE',
          palette: {
            background: 'light',
            leftSidebar: 'light',
            navbar: 'dark'
          }
        });
        break;

      default:
        break;
    }
  };

  return demos_jsx("div", {
    className: "flex flex-col p-4"
  }, demos_jsx("div", {
    className: "uppercase text-sm font-bold tracking-wider mb-2"
  }, "Demos"), demos_jsx("div", {
    className: "flex flex-col"
  }, demos.map((demo, i) => demos_jsx("button", {
    key: i,
    className: "flex h-8 w-full",
    onClick: () => setDemo(demo.name)
  }, demo.title))));
};

/* harmony default export */ var right_sidebar_1_demos = (Demos);
// CONCATENATED MODULE: ./src/components/right-sidebar-1/index.js
var right_sidebar_1_jsx = external_react_default.a.createElement;

function right_sidebar_1_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function right_sidebar_1_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { right_sidebar_1_ownKeys(Object(source), true).forEach(function (key) { right_sidebar_1_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { right_sidebar_1_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function right_sidebar_1_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const RightSidebar = () => {
  const colors = [{
    bg: 'bg-white',
    text: 'text-white',
    name: 'light'
  }, {
    bg: 'bg-grey-900',
    text: 'text-grey-900',
    name: 'dark'
  }];
  const items = [{
    title: 'Background',
    key: 'background'
  }, {
    title: 'Navbar',
    key: 'navbar'
  }, {
    title: 'Left sidebar',
    key: 'leftSidebar'
  }];
  const {
    config
  } = Object(external_react_redux_["useSelector"])(state => ({
    config: state.config
  }), external_react_redux_["shallowEqual"]);

  let {
    rightSidebar
  } = right_sidebar_1_objectSpread({}, config);

  return right_sidebar_1_jsx("div", {
    className: `right-sidebar right-sidebar-1 ${rightSidebar ? 'open' : ''}`
  }, right_sidebar_1_jsx("div", null, right_sidebar_1_jsx("div", null, right_sidebar_1_jsx("div", {
    className: "flex flex-col"
  }, right_sidebar_1_jsx("div", {
    className: "px-4 h-16 flex flex-row items-center justify-between bg-blue-500 text-white"
  }, right_sidebar_1_jsx("div", {
    className: "uppercase text-sm font-bold tracking-wider"
  }, "Settings"), right_sidebar_1_jsx(toggle, null))), right_sidebar_1_jsx(right_sidebar_1_demos, null), right_sidebar_1_jsx(sidebar, null), right_sidebar_1_jsx("div", {
    className: "flex flex-col p-4"
  }, right_sidebar_1_jsx("div", {
    className: "mb-2"
  }, right_sidebar_1_jsx("div", {
    className: "uppercase text-sm font-bold tracking-wider mb-2"
  }, "Colors")), items.map((item, i) => right_sidebar_1_jsx(right_sidebar_1_colors, {
    key: item.key,
    title: item.title,
    palettes: colors,
    name: item.key
  }))))));
};

/* harmony default export */ var right_sidebar_1 = (RightSidebar);
// CONCATENATED MODULE: ./src/layouts/layout-1/index.js
var layout_1_jsx = external_react_default.a.createElement;

function layout_1_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function layout_1_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { layout_1_ownKeys(Object(source), true).forEach(function (key) { layout_1_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { layout_1_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function layout_1_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // import Navbar1 from '../../components/navbar-1'
// import Head1 from '../../components/head'

const Layout1 = ({
  children
}) => {
  const {
    config,
    palettes
  } = Object(external_react_redux_["useSelector"])(state => ({
    config: state.config,
    palettes: state.palettes
  }), external_react_redux_["shallowEqual"]);

  const {
    layout,
    collapsed
  } = layout_1_objectSpread({}, config);

  let {
    background,
    navbar,
    leftSidebar,
    rightSidebar
  } = layout_1_objectSpread({}, palettes);

  return layout_1_jsx(external_react_default.a.Fragment, null, layout_1_jsx(head_default.a, null, layout_1_jsx("title", null, "D-board")), layout_1_jsx("div", {
    "data-layout": layout,
    "data-collapsed": collapsed,
    "data-background": background,
    "data-navbar": navbar,
    "data-left-sidebar": leftSidebar,
    "data-right-sidebar": rightSidebar,
    className: `font-sans antialiased text-sm disable-scrollbars ${background === 'dark' ? 'dark-mode' : 'default-mode'}`
  }, layout_1_jsx(right_sidebar_1, null), layout_1_jsx("div", {
    className: "wrapper"
  }, layout_1_jsx("div", {
    className: "main w-full bg-grey-50 text-grey-900 dark:bg-grey-900 dark:text-white"
  }, layout_1_jsx(navbar_1, null), layout_1_jsx("div", {
    className: "min-h-screen w-full p-4"
  }, children)))));
};

/* harmony default export */ var layout_1 = (Layout1);
// CONCATENATED MODULE: ./src/layouts/index.js
var layouts_jsx = external_react_default.a.createElement;

function layouts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function layouts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { layouts_ownKeys(Object(source), true).forEach(function (key) { layouts_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { layouts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function layouts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Layouts = ({
  children
}) => {
  const router = Object(router_["useRouter"])();

  let {
    pathname
  } = layouts_objectSpread({}, router);

  if (['/404', '/500'].includes(pathname)) {
    return layouts_jsx(centered, null, children);
  }

  if (['/login-1', '/contact-us-1', '/create-account', '/email-confirmation', '/logout', '/reset-password', '/forgot-password', '/lock-screen', '/subscribe', '/error-page', '/coming-soon'].includes(pathname)) {
    return layouts_jsx(centered, null, children);
  } else if (['/landing', '/login-1', '/login-2', '/login-3'].includes(pathname)) {
    return layouts_jsx(empty, null, children);
  } else {
    return layouts_jsx(layout_1, null, children);
  }
};

/* harmony default export */ var layouts = (Layouts);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./src/reducers/dashboard.js
function dashboard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function dashboard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { dashboard_ownKeys(Object(source), true).forEach(function (key) { dashboard_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { dashboard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function dashboard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function dashboard(state = {
  value: 0,
  conversions: {}
}, action) {
  switch (action.type) {
    case 'SET_DASHBOARD':
      let {
        key,
        value
      } = dashboard_objectSpread({}, action);

      return dashboard_objectSpread(dashboard_objectSpread({}, state), {}, {
        [`${key}`]: value
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/reducers/colors.js
const colors_initialState = ['transparent', 'black', 'white', 'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'];
function colors_colors(state = colors_initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/reducers/config.js
function config_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function config_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { config_ownKeys(Object(source), true).forEach(function (key) { config_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { config_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function config_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function config_config(state = {
  name: 'D-board',
  description: 'Next.js Tailwind CSS admin template',
  url: 'https://d-board-nextjs.mobifica.com',
  layout: 'layout-1',
  collapsed: false,
  rightSidebar: false,
  backdrop: false
}, action) {
  switch (action.type) {
    case 'SET_CONFIG':
      return config_objectSpread(config_objectSpread({}, state), action.config);

    case 'SET_CONFIG_KEY':
      return config_objectSpread(config_objectSpread({}, state), {}, {
        [`${action.key}`]: action.value
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/reducers/left-sidebar.js
function left_sidebar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function left_sidebar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { left_sidebar_ownKeys(Object(source), true).forEach(function (key) { left_sidebar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { left_sidebar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function left_sidebar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function left_sidebar_leftSidebar(state = {
  showButtonText: true,
  showSectionTitle: true,
  showLogo: true,
  showCard: true,
  showAccountLinks: false,
  showProjects: true,
  showTags: true,
  card: 1
}, action) {
  switch (action.type) {
    case 'SET_LEFT_SIDEBAR_CONFIG':
      return left_sidebar_objectSpread(left_sidebar_objectSpread({}, state), {}, {
        [`${action.key}`]: action.value
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/reducers/palettes.js
function palettes_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function palettes_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { palettes_ownKeys(Object(source), true).forEach(function (key) { palettes_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { palettes_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function palettes_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function palettes_palettes(state = {
  background: 'light',
  leftSidebar: 'light',
  navbar: 'light',
  rightSidebar: 'light'
}, action) {
  switch (action.type) {
    case 'SET_PALETTE':
      return palettes_objectSpread(palettes_objectSpread({}, state), action.palette);

    case 'RESET_PALETTES':
      return {
        background: 'light',
        leftSidebar: 'light',
        navbar: 'light',
        rightSidebar: 'light'
      };

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/reducers/navigation.js
var navigation_jsx = external_react_default.a.createElement;


const navigation_initialState = [{
  title: 'Applications',
  items: [{
    url: '/dashboard',
    icon: navigation_jsx(fi_["FiCompass"], {
      size: 20
    }),
    title: 'Dashboard',
    items: []
  }, {
    url: '/',
    icon: navigation_jsx(fi_["FiActivity"], {
      size: 20
    }),
    title: 'Apps',
    items: [{
      url: '/social-feed',
      title: 'Social feed',
      items: []
    }, {
      url: '/tasks',
      title: 'Tasks',
      items: []
    }, {
      url: '/inbox',
      title: 'Inbox',
      items: []
    }, {
      url: '/kanban',
      title: 'Kanban',
      items: []
    }, {
      url: '/todo',
      title: 'Todo',
      items: []
    }]
  }, {
    url: '/',
    icon: navigation_jsx(fi_["FiList"], {
      size: 20
    }),
    title: 'Menu levels',
    items: Array.from(Array(4).keys()).map(i => {
      return {
        url: '/',
        title: `Level 1-${i + 1}`,
        items: Array.from(Array(4).keys()).map(j => {
          return {
            url: '/',
            title: `Level 2-${j + 1}`,
            items: Array.from(Array(4).keys()).map(k => {
              return {
                url: '/',
                title: `Level 3-${k + 1}`,
                items: Array.from(Array(4).keys()).map(l => {
                  return {
                    url: '/',
                    title: `Level 4-${l + 1}`,
                    items: []
                  };
                })
              };
            })
          };
        })
      };
    })
  }, {
    url: '/',
    icon: navigation_jsx(fi_["FiStar"], {
      size: 20
    }),
    title: 'Demos',
    badge: {
      color: 'bg-indigo-500 text-white',
      text: 6
    },
    items: [{
      url: '/demo-1',
      title: 'Light background',
      items: []
    }, {
      url: '/demo-2',
      title: 'Dark background',
      items: []
    }, {
      url: '/demo-4',
      title: 'Dark sidebar',
      items: []
    }, {
      url: '/demo-3',
      title: 'Small sidebar',
      items: []
    }, {
      url: '/demo-5',
      title: 'Dark small sidebar',
      items: []
    }, {
      url: '/demo-6',
      title: 'Dark navbar',
      items: []
    }]
  }, {
    url: '/',
    icon: navigation_jsx(fi_["FiShoppingCart"], {
      size: 20
    }),
    title: 'E-commerce',
    items: [{
      url: '/e-commerce',
      title: 'Products',
      items: []
    }, {
      url: '/invoice',
      title: 'Invoice',
      items: []
    }, {
      url: '/pricing-tables',
      title: 'Pricing tables',
      items: []
    }]
  }]
}, {
  title: 'Components',
  items: [{
    url: '/',
    icon: navigation_jsx(fi_["FiDroplet"], {
      size: 20
    }),
    title: 'UI Elements',
    items: [{
      url: '/badges',
      title: 'Badges',
      items: []
    }, {
      url: '/breadcrumbs',
      title: 'Breadcrumbs',
      items: []
    }, {
      url: '/buttons',
      title: 'Buttons',
      items: []
    }, {
      url: '/dropdowns',
      title: 'Dropdowns',
      items: []
    }, {
      url: '/images',
      title: 'Images',
      items: []
    }, {
      url: '/lists',
      title: 'Lists',
      items: []
    }, {
      url: '/progress-bars',
      title: 'Progress bars',
      items: []
    }, {
      url: '/pagination',
      title: 'Pagination',
      items: []
    }, {
      url: '/tabs',
      title: 'Tabs',
      items: []
    }, {
      url: '/typography',
      title: 'Typography',
      items: []
    }]
  }, {
    url: '/',
    icon: navigation_jsx(fi_["FiCalendar"], {
      size: 20
    }),
    title: 'Forms',
    badge: {
      color: 'bg-indigo-500 text-white',
      text: 6
    },
    items: [{
      url: '/default-forms',
      title: 'Default forms',
      items: []
    }, {
      url: '/sample-forms',
      title: 'Sample forms',
      items: []
    }, {
      url: '/sliders',
      title: 'Sliders',
      items: []
    }, {
      url: '/datepicker',
      title: 'Date picker',
      items: []
    }, {
      url: '/switches',
      title: 'Switches',
      items: []
    }, {
      url: '/steps',
      title: 'Form steps',
      items: []
    }, {
      url: '/validation',
      title: 'Form validation',
      items: []
    }]
  }, {
    url: '/',
    icon: navigation_jsx(fi_["FiGrid"], {
      size: 20
    }),
    title: 'Tables',
    items: [{
      url: '/default-tables',
      title: 'Default tables',
      items: []
    }, {
      url: '/datatables',
      title: 'Datatables',
      items: []
    }]
  }, {
    url: '/',
    icon: navigation_jsx(fi_["FiClock"], {
      size: 20
    }),
    title: 'Notifications',
    badge: {
      color: 'bg-indigo-500 text-white',
      text: 2
    },
    items: [{
      url: '/alerts',
      title: 'Alerts',
      items: []
    }, {
      url: '/notifications',
      title: 'Notifications',
      items: []
    }, {
      url: '/modals',
      title: 'Modals',
      items: []
    }, {
      url: '/popovers',
      title: 'Popovers',
      items: []
    }, {
      url: '/tooltips',
      title: 'Tooltips',
      items: []
    }]
  }]
}, {
  title: 'Pages',
  items: [{
    url: '/',
    icon: navigation_jsx(fi_["FiCopy"], {
      size: 20
    }),
    title: 'Authentication',
    badge: {
      color: 'bg-indigo-500 text-white',
      text: 7
    },
    items: [{
      url: '/contact-us-1',
      title: 'Contact us',
      items: []
    }, {
      url: '/login-1',
      title: 'Login 1',
      items: []
    }, {
      url: '/login-2',
      title: 'Login 2',
      items: []
    }, {
      url: '/login-3',
      title: 'Login 3',
      items: []
    }, {
      url: '/create-account',
      title: 'Create account',
      items: []
    }, {
      url: '/email-confirmation',
      title: 'Email confirmation',
      items: []
    }, {
      url: '/logout',
      title: 'Logout',
      items: []
    }, {
      url: '/reset-password',
      title: 'Reset password',
      items: []
    }, {
      url: '/forgot-password',
      title: 'Forgot password',
      items: []
    }, {
      url: '/lock-screen',
      title: 'Lock screen',
      items: []
    }, {
      url: '/subscribe',
      title: 'Subscribe',
      items: []
    }]
  }, {
    url: '/',
    icon: navigation_jsx(fi_["FiUser"], {
      size: 20
    }),
    title: 'User',
    items: [{
      url: '/user-profile',
      title: 'User profile',
      items: []
    }, {
      url: '/social-feed',
      title: 'Social feed',
      items: []
    }]
  }, {
    url: '/',
    icon: navigation_jsx(fi_["FiClock"], {
      size: 20
    }),
    title: 'Pages',
    items: [{
      url: '/support-1',
      title: 'Support',
      items: []
    }, {
      url: '/empty-page',
      title: 'Empty page',
      items: []
    }, {
      url: '/terms-of-service',
      title: 'Terms of service',
      items: []
    }, {
      url: '/privacy-policy',
      title: 'Privacy policy',
      items: []
    }, {
      url: '/error-page',
      title: 'Error page',
      items: []
    }, {
      url: '/coming-soon',
      title: 'Coming soon',
      items: []
    }]
  }]
}, {
  title: 'Other',
  items: [{
    url: '/',
    icon: navigation_jsx(fi_["FiPieChart"], {
      size: 20
    }),
    title: 'Charts',
    badge: {
      color: 'bg-indigo-500 text-white',
      text: 4
    },
    items: [{
      url: '/bar-charts',
      title: 'Bar charts',
      items: []
    }, {
      url: '/line-charts',
      title: 'Line and area charts',
      items: []
    }, {
      url: '/pie-charts',
      title: 'Pie and doughnut charts',
      items: []
    }, {
      url: '/other-charts',
      title: 'Other charts',
      items: []
    }]
  }, {
    url: '/',
    icon: navigation_jsx(fi_["FiToggleLeft"], {
      size: 20
    }),
    title: 'Icons',
    items: [{
      url: '/react-icons',
      title: 'React icons',
      items: []
    }, {
      url: '/country-flags',
      title: 'Country flags',
      items: []
    }]
  }]
}, {
  title: 'Docs',
  items: [{
    url: '/documentation',
    icon: navigation_jsx(fi_["FiHelpCircle"], {
      size: 20
    }),
    title: 'Documentation',
    items: []
  }]
}, {
  title: 'Intro',
  items: [{
    url: '/landing',
    icon: navigation_jsx(fi_["FiHome"], {
      size: 20
    }),
    title: 'Home page',
    items: []
  }]
}];
function navigation(state = navigation_initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/reducers/customize-nav.js
var customize_nav_jsx = external_react_default.a.createElement;


const customize_nav_initialState = [{
  title: 'Applications',
  items: [{
    url: '/',
    icon: customize_nav_jsx(fi_["FiCompass"], {
      size: 20
    }),
    title: 'Dashboard',
    items: []
  }, {
    url: '/users',
    icon: customize_nav_jsx(fi_["FiUser"], {
      size: 20
    }),
    title: 'Users',
    items: []
  }]
}];
function customize_nav_customizeNav(state = customize_nav_initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/reducers/index.js








const rootReducer = Object(external_redux_["combineReducers"])({
  dashboard: dashboard,
  navigation: navigation,
  colors: colors_colors,
  config: config_config,
  leftSidebar: left_sidebar_leftSidebar,
  palettes: palettes_palettes,
  customizeNav: customize_nav_customizeNav
});
/* harmony default export */ var reducers = (rootReducer);
// CONCATENATED MODULE: ./src/store.js
function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let store_store;

function initStore(initialState) {
  return Object(external_redux_["createStore"])(reducers, initialState, Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a));
}

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store_store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store_store) {
    _store = initStore(store_objectSpread(store_objectSpread({}, store_store.getState()), preloadedState)); // Reset the current store

    store_store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store_store) store_store = _store;
  return _store;
};
function useStore(initialState) {
  const store = Object(external_react_["useMemo"])(() => initializeStore(initialState), [initialState]);
  return store;
}
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: ./src/css/tailwind.css
var tailwind = __webpack_require__("qGkn");

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__("WF7/");

// EXTERNAL MODULE: ./src/css/animate.css
var animate = __webpack_require__("lAXI");

// EXTERNAL MODULE: ./src/css/components/buttons.css
var buttons = __webpack_require__("mi6J");

// EXTERNAL MODULE: ./src/css/components/datepicker.css
var datepicker = __webpack_require__("g3by");

// EXTERNAL MODULE: ./src/css/components/dropdowns.css
var dropdowns = __webpack_require__("u59O");

// EXTERNAL MODULE: ./src/css/components/forms.css
var components_forms = __webpack_require__("EooJ");

// EXTERNAL MODULE: ./src/css/components/left-sidebar-1/styles-lg.css
var styles_lg = __webpack_require__("t0Ea");

// EXTERNAL MODULE: ./src/css/components/left-sidebar-1/styles-sm.css
var styles_sm = __webpack_require__("0NCP");

// EXTERNAL MODULE: ./src/css/components/modals.css
var modals = __webpack_require__("FwQj");

// EXTERNAL MODULE: ./src/css/components/navbar.css
var components_navbar = __webpack_require__("6gEJ");

// EXTERNAL MODULE: ./src/css/components/nprogress.css
var nprogress = __webpack_require__("GwD7");

// EXTERNAL MODULE: ./src/css/components/recharts.css
var recharts = __webpack_require__("P8Vv");

// EXTERNAL MODULE: ./src/css/components/right-sidebar.css
var right_sidebar = __webpack_require__("MlqP");

// EXTERNAL MODULE: ./src/css/components/sliders.css
var sliders = __webpack_require__("dbva");

// EXTERNAL MODULE: ./src/css/components/steps.css
var steps = __webpack_require__("giVJ");

// EXTERNAL MODULE: ./src/css/components/tables.css
var tables = __webpack_require__("2X1V");

// EXTERNAL MODULE: ./src/css/components/tabs.css
var components_tabs = __webpack_require__("rmPA");

// EXTERNAL MODULE: ./src/css/components/user-widgets/widget-2.css
var widget_2 = __webpack_require__("4GYc");

// EXTERNAL MODULE: ./src/css/components/user-widgets/widget-4.css
var widget_4 = __webpack_require__("xb82");

// EXTERNAL MODULE: ./src/css/layouts/layout-1.css
var layouts_layout_1 = __webpack_require__("D9l6");

// CONCATENATED MODULE: ./src/pages/_app.js

var _app_jsx = external_react_default.a.createElement;



























router_default.a.events.on('routeChangeStart', () => external_nprogress_default.a.start());
router_default.a.events.on('routeChangeComplete', () => external_nprogress_default.a.done());
router_default.a.events.on('routeChangeError', () => external_nprogress_default.a.done());
function App({
  Component,
  pageProps
}) {
  console.log("RpageProps", pageProps);
  const store = useStore(pageProps.initialReduxState);
  return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(head_default.a, null, _app_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  })), _app_jsx(external_react_redux_["Provider"], {
    store: store
  }, _app_jsx(layouts, null, _app_jsx(Component, pageProps))));
}

/***/ }),

/***/ "L4s6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SectionTitle = ({
  title,
  subtitle,
  right = null
}) => {
  return __jsx("div", {
    className: "section-title w-full mb-6 pt-3"
  }, __jsx("div", {
    className: "flex flex-row items-center justify-between mb-4"
  }, __jsx("div", {
    className: "flex flex-col"
  }, __jsx("div", {
    className: "text-xs uppercase font-light text-grey-500"
  }, title), __jsx("div", {
    className: "text-xl font-bold"
  }, subtitle)), right));
};

/* harmony default export */ __webpack_exports__["a"] = (SectionTitle);

/***/ }),

/***/ "MlqP":
/***/ (function(module, exports) {



/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "P8Vv":
/***/ (function(module, exports) {



/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqBW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



const Portal = ({
  children,
  selector
}) => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: mounted,
    1: setMounted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);
  return mounted ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(children, ref.current) : null;
};

/* harmony default export */ __webpack_exports__["a"] = (Portal);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "TsPW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const CONFIG = "http://localhost:8000";

const fetchData = async (url, method, data) => {
  var AUTH_TOKEN = sessionStorage.getItem('SGH');

  if (AUTH_TOKEN) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers['authorization'] = AUTH_TOKEN;
  }

  return await axios__WEBPACK_IMPORTED_MODULE_0___default.a[method](CONFIG + url, data);
};

/* harmony default export */ __webpack_exports__["a"] = (fetchData);

/***/ }),

/***/ "TxAV":
/***/ (function(module, exports) {

module.exports = require("react-datetime");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "WF7/":
/***/ (function(module, exports) {



/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dbva":
/***/ (function(module, exports) {



/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "g3by":
/***/ (function(module, exports) {



/***/ }),

/***/ "gWdR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Widget = ({
  title = null,
  description = null,
  right = null,
  children
}) => {
  return __jsx("div", {
    className: "widget w-full p-4 mb-4 rounded-lg bg-white border border-grey-100 dark:bg-grey-895 dark:border-grey-890"
  }, (title || description || right) && __jsx("div", {
    className: "flex flex-row items-center justify-between mb-6"
  }, __jsx("div", {
    className: "flex flex-col"
  }, __jsx("div", {
    className: "text-sm font-light text-grey-500"
  }, title), __jsx("div", {
    className: "text-sm font-bold"
  }, description)), right), children);
};

/* harmony default export */ __webpack_exports__["a"] = (Widget);

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "giVJ":
/***/ (function(module, exports) {



/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "jDDT":
/***/ (function(module, exports) {



/***/ }),

/***/ "lAXI":
/***/ (function(module, exports) {



/***/ }),

/***/ "mi6J":
/***/ (function(module, exports) {



/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "qGkn":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rmPA":
/***/ (function(module, exports) {



/***/ }),

/***/ "t0Ea":
/***/ (function(module, exports) {



/***/ }),

/***/ "u59O":
/***/ (function(module, exports) {



/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xb82":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });