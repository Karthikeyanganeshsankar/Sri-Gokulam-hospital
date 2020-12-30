"use strict";

var _require = require("../../model/mongodb"),
    isObjectId = _require.isObjectId,
    ObjectId = _require.ObjectId,
    error_msg = _require.error_msg,
    InsertDoc = _require.InsertDoc,
    UpdateDoc = _require.UpdateDoc,
    GetOneDoc = _require.GetOneDoc,
    GetDocs = _require.GetDocs;

var settings = 'settings';

var _require2 = require('lodash'),
    get = _require2.get,
    _require3 = require('express-validator'),
    validationResult = _require3.validationResult;

module.exports = function () {
  var router = {};

  router['get_settings'] = function _callee(req, res) {
    var errors, response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.json({
              status: 0,
              errors: errors.array()
            }));

          case 4:
            _context.next = 6;
            return regeneratorRuntime.awrap(GetOneDoc(settings, {
              alias: String(req.body.alias).trim()
            }, {}, {}));

          case 6:
            response = _context.sent;
            res.json({
              status: 1,
              response: response
            });
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log("error in router['get_settings'] ".concat(_context.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };

  router['update_general_settings_data'] = function _callee2(req, res) {
    var errors, _id, obj, updaqte, check, _updaqte, insert;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.json({
              status: 0,
              errors: errors.array()
            }));

          case 4:
            _id = get(req.body, '_id', false);
            obj = {};
            obj['alias'] = req.body.alias;
            obj['settings'] = req.body.settings;

            if (!(_id && isObjectId(_id))) {
              _context2.next = 15;
              break;
            }

            _context2.next = 11;
            return regeneratorRuntime.awrap(UpdateDoc(settings, {
              _id: ObjectId(_id)
            }, obj, {
              multi: true
            }));

          case 11:
            updaqte = _context2.sent;

            if (updaqte && updaqte.nModified !== 0) {
              res.json({
                status: 1,
                response: 'Settings updated successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Settings not updated'
              });
            }

            _context2.next = 29;
            break;

          case 15:
            _context2.next = 17;
            return regeneratorRuntime.awrap(GetDocs(settings, {
              alias: obj['alias']
            }, {}, {}));

          case 17:
            check = _context2.sent;

            if (!(check && check.length > 0)) {
              _context2.next = 25;
              break;
            }

            _context2.next = 21;
            return regeneratorRuntime.awrap(UpdateDoc(settings, {
              _id: check[0]._id
            }, obj, {
              multi: true
            }));

          case 21:
            _updaqte = _context2.sent;

            if (_updaqte && _updaqte.nModified !== 0) {
              res.json({
                status: 1,
                response: 'Settings updated successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Settings not updated'
              });
            }

            _context2.next = 29;
            break;

          case 25:
            _context2.next = 27;
            return regeneratorRuntime.awrap(InsertDoc(settings, obj));

          case 27:
            insert = _context2.sent;

            if (insert && insert._id) {
              res.json({
                status: 1,
                response: 'Settings updated successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Settings not updated'
              });
            }

          case 29:
            _context2.next = 35;
            break;

          case 31:
            _context2.prev = 31;
            _context2.t0 = _context2["catch"](0);
            console.log("error in router['general_settings_data'] ".concat(_context2.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 35:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 31]]);
  };

  return router;
};