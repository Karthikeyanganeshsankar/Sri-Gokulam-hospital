"use strict";

var _require = require("../../model/mongodb"),
    isObjectId = _require.isObjectId,
    ObjectId = _require.ObjectId,
    error_msg = _require.error_msg,
    UpdateDoc = _require.UpdateDoc,
    GetAggregationDoc = _require.GetAggregationDoc,
    checkArray = _require.checkArray,
    DeleteDoccs = _require.DeleteDoccs;

var notification = 'notification';

var _require2 = require('lodash'),
    get = _require2.get,
    _require3 = require('express-validator'),
    validationResult = _require3.validationResult;

module.exports = function () {
  var router = {};

  router['markas_read'] = function _callee(req, res) {
    var errors, _id, update;

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
            _id = get(req.body, '_id', false);

            if (!isObjectId(_id)) {
              _context.next = 12;
              break;
            }

            _context.next = 8;
            return regeneratorRuntime.awrap(UpdateDoc(notification, {
              _id: ObjectId(_id)
            }, {
              readingStatus: 1
            }, {}));

          case 8:
            update = _context.sent;

            if (update && update.nModified !== 0) {
              res.json({
                status: 1,
                response: 'Readed successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Not Readed'
              });
            }

            _context.next = 13;
            break;

          case 12:
            return _context.abrupt("return", res.json({
              status: 0,
              response: 'Id is not a valid id'
            }));

          case 13:
            _context.next = 19;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            console.log("error in router['markas_read'] ".concat(_context.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 15]]);
  };

  router['mark_as_unread'] = function _callee2(req, res) {
    var errors, _id, update;

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

            if (!isObjectId(_id)) {
              _context2.next = 12;
              break;
            }

            _context2.next = 8;
            return regeneratorRuntime.awrap(UpdateDoc(notification, {
              _id: ObjectId(_id)
            }, {
              readingStatus: 0
            }, {}));

          case 8:
            update = _context2.sent;

            if (update && update.nModified !== 0) {
              res.json({
                status: 1,
                response: 'Un read successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Not Un read'
              });
            }

            _context2.next = 13;
            break;

          case 12:
            return _context2.abrupt("return", res.json({
              status: 0,
              response: 'Id is not a valid id'
            }));

          case 13:
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            console.log("error in router['mark_as_unread'] ".concat(_context2.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 15]]);
  };

  router['perm_del'] = function _callee3(req, res) {
    var errors, _id, update;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt("return", res.json({
              status: 0,
              errors: errors.array()
            }));

          case 4:
            _id = get(req.body, '_id', false);

            if (!isObjectId(_id)) {
              _context3.next = 12;
              break;
            }

            _context3.next = 8;
            return regeneratorRuntime.awrap(DeleteDoccs(notification, {
              _id: ObjectId(_id)
            }));

          case 8:
            update = _context3.sent;

            if (update && update.deletedCount !== 0) {
              res.json({
                status: 1,
                response: 'Deleted successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Not deleted'
              });
            }

            _context3.next = 13;
            break;

          case 12:
            return _context3.abrupt("return", res.json({
              status: 0,
              response: 'Id is not a valid id'
            }));

          case 13:
            _context3.next = 19;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);
            console.log("error in router['perm_del'] ".concat(_context3.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 15]]);
  };

  router['list'] = function _callee4(req, res) {
    var skip, limit, sort, query, finalquery, list, fullcount, unread, data, length, result;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            skip = get(req.body, 'skip', 0), limit = get(req.body, 'limit', 25), sort = {}, query = [];
            sort['createdAt'] = -1;
            query.push({
              $match: {
                status: 1
              }
            }, {
              $sort: sort
            }, {
              $skip: Number(skip)
            }, {
              $limit: Number(limit)
            }, {
              $project: {
                _id: 1,
                type: 1,
                action: 1,
                message: 1,
                status: 1,
                createdAt: {
                  $dateToString: {
                    format: "%d-%m-%Y",
                    date: "$createdAt"
                  }
                }
              }
            });
            finalquery = [{
              $facet: {
                count: [{
                  $count: 'all'
                }],
                unread: [{
                  $match: {
                    readingStatus: 0
                  }
                }, {
                  $count: 'unread'
                }],
                documentdata: query
              }
            }];
            _context4.next = 7;
            return regeneratorRuntime.awrap(GetAggregationDoc(notification, finalquery));

          case 7:
            list = _context4.sent;

            if (list && checkArray(list) && list.length > 0) {
              fullcount = get(list, '0.count.0.all', 0);
              unread = get(list, '0.unread.0.unread', 0);
              data = get(list, '0.documentdata', []);
              length = data.length || 0;
              result = data;
              res.json({
                status: 1,
                response: {
                  fullcount: fullcount,
                  unread: unread,
                  length: length,
                  result: result
                }
              });
            } else {
              res.json({
                status: 0,
                response: 'No dats found'
              });
            }

            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            console.log("error in router['list'] ".concat(_context4.t0));
            return _context4.abrupt("return", res.json({
              status: 0,
              response: error_msg
            }));

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };

  return router;
};