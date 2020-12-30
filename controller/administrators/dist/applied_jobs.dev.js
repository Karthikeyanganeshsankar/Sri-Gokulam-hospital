"use strict";

var _require = require("../../model/mongodb"),
    isObjectId = _require.isObjectId,
    ObjectId = _require.ObjectId,
    error_msg = _require.error_msg,
    UpdateDoc = _require.UpdateDoc,
    GetAggregationDoc = _require.GetAggregationDoc,
    checkArray = _require.checkArray,
    DeleteDoccs = _require.DeleteDoccs,
    GetOneDoc = _require.GetOneDoc;

var applied_jobs = 'applied_jobs';

var _require2 = require('lodash'),
    get = _require2.get,
    _require3 = require('express-validator'),
    validationResult = _require3.validationResult,
    _require4 = require("json2csv"),
    Parser = _require4.Parser;

module.exports = function () {
  var router = {};

  router['edit'] = function _callee(req, res) {
    var errors, _id, response;

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
            return regeneratorRuntime.awrap(GetOneDoc(applied_jobs, {
              _id: ObjectId(_id)
            }, {}, {}));

          case 8:
            response = _context.sent;
            return _context.abrupt("return", res.json({
              status: 1,
              response: response
            }));

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
            console.log("error in router['edit'] ".concat(_context.t0));
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

  router['delete'] = function _callee2(req, res) {
    var errors, _id, get_data, obj, update;

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
              _context2.next = 22;
              break;
            }

            _context2.next = 8;
            return regeneratorRuntime.awrap(GetOneDoc(applied_jobs, {
              _id: ObjectId(_id)
            }, {}, {}));

          case 8:
            get_data = _context2.sent;

            if (!(get_data && get_data._id)) {
              _context2.next = 19;
              break;
            }

            obj = {};
            obj['old_status'] = Number(get_data.status);
            obj['status'] = Number(0);
            _context2.next = 15;
            return regeneratorRuntime.awrap(UpdateDoc(applied_jobs, {
              _id: ObjectId(_id)
            }, obj, {}));

          case 15:
            update = _context2.sent;

            if (update && update.nModified !== 0) {
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

            _context2.next = 20;
            break;

          case 19:
            res.json({
              status: 0,
              response: 'Not deleted'
            });

          case 20:
            _context2.next = 23;
            break;

          case 22:
            return _context2.abrupt("return", res.json({
              status: 0,
              response: 'Id is not a valid id'
            }));

          case 23:
            _context2.next = 29;
            break;

          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](0);
            console.log("error in router['delete'] ".concat(_context2.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 29:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 25]]);
  };

  router['restore'] = function _callee3(req, res) {
    var errors, _id, get_data, obj, update;

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
              _context3.next = 22;
              break;
            }

            _context3.next = 8;
            return regeneratorRuntime.awrap(GetOneDoc(applied_jobs, {
              _id: ObjectId(_id)
            }, {}, {}));

          case 8:
            get_data = _context3.sent;

            if (!(get_data && get_data._id)) {
              _context3.next = 19;
              break;
            }

            obj = {};
            obj['old_status'] = Number(0);
            obj['status'] = Number(get_data.old_status);
            _context3.next = 15;
            return regeneratorRuntime.awrap(UpdateDoc(applied_jobs, {
              _id: ObjectId(_id)
            }, obj, {}));

          case 15:
            update = _context3.sent;

            if (update && update.nModified !== 0) {
              res.json({
                status: 1,
                response: 'Restored successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Not restore'
              });
            }

            _context3.next = 20;
            break;

          case 19:
            res.json({
              status: 0,
              response: 'Not restore'
            });

          case 20:
            _context3.next = 23;
            break;

          case 22:
            return _context3.abrupt("return", res.json({
              status: 0,
              response: 'Id is not a valid id'
            }));

          case 23:
            _context3.next = 29;
            break;

          case 25:
            _context3.prev = 25;
            _context3.t0 = _context3["catch"](0);
            console.log("error in router['restore'] ".concat(_context3.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 29:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 25]]);
  };

  router['perm_del'] = function _callee4(req, res) {
    var errors, _id, update;

    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return", res.json({
              status: 0,
              errors: errors.array()
            }));

          case 4:
            _id = get(req.body, '_id', false);

            if (!isObjectId(_id)) {
              _context4.next = 12;
              break;
            }

            _context4.next = 8;
            return regeneratorRuntime.awrap(DeleteDoccs(applied_jobs, {
              _id: ObjectId(_id)
            }));

          case 8:
            update = _context4.sent;

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

            _context4.next = 13;
            break;

          case 12:
            return _context4.abrupt("return", res.json({
              status: 0,
              response: 'Id is not a valid id'
            }));

          case 13:
            _context4.next = 19;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](0);
            console.log("error in router['perm_del'] ".concat(_context4.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 15]]);
  };

  router['list'] = function _callee5(req, res) {
    var skip, limit, field, order, search, category_id, jobs_id, sort, query, finalquery, list, fullcount, data, length, result;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            skip = get(req.body, 'skip', 0), limit = get(req.body, 'limit', 25), field = get(req.body, 'field', false), order = get(req.body, 'order', false), search = get(req.body, 'search', false), category_id = get(req.body, 'category_id', false), jobs_id = get(req.body, 'jobs_id', false), sort = {}, query = [];

            if (field && order) {
              sort[field] = Number(order);
            } else {
              sort['createdAt'] = -1;
            }

            if (search) {
              query.push({
                $match: {
                  $or: [{
                    'jobs_data.name': {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    cat_name: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    email: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    phone: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    name: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }]
                }
              });
            }

            if (category_id && isObjectId(category_id)) {
              query.push({
                $match: {
                  category_id: ObjectId(category_id)
                }
              });
            }

            if (jobs_id && isObjectId(jobs_id)) {
              query.push({
                $match: {
                  jobs_id: ObjectId(jobs_id)
                }
              });
            }

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
                name: 1,
                email: 1,
                phone: 1,
                jobs_data: 1,
                cat_name: 1,
                docs: 1,
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
                  $match: {
                    status: 1
                  }
                }, {
                  $count: 'all'
                }],
                documentdata: query
              }
            }];
            _context5.next = 10;
            return regeneratorRuntime.awrap(GetAggregationDoc(applied_jobs, finalquery));

          case 10:
            list = _context5.sent;

            if (list && checkArray(list) && list.length > 0) {
              fullcount = get(list, '0.count.0.all', 0);
              data = get(list, '0.documentdata', []);
              length = data.length || 0;
              result = data;
              res.json({
                status: 1,
                response: {
                  fullcount: fullcount,
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

            _context5.next = 18;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            console.log("error in router['list'] ".concat(_context5.t0));
            return _context5.abrupt("return", res.json({
              status: 0,
              response: error_msg
            }));

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 14]]);
  };

  router['del_list'] = function _callee6(req, res) {
    var skip, limit, field, order, search, sort, query, list, length, result;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            skip = get(req.body, 'skip', 0), limit = get(req.body, 'limit', 25), field = get(req.body, 'field', false), order = get(req.body, 'order', false), search = get(req.body, 'search', false), sort = {}, query = [];

            if (field && order) {
              sort[field] = Number(order);
            } else {
              sort['createdAt'] = -1;
            }

            if (search) {
              query.push({
                $match: {
                  $or: [{
                    'jobs_data.name': {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    cat_name: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    email: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    phone: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    name: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }]
                }
              });
            }

            query.push({
              $match: {
                status: 0
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
                name: 1,
                email: 1,
                phone: 1,
                jobs_data: 1,
                docs: 1,
                status: 1,
                createdAt: {
                  $dateToString: {
                    format: "%d-%m-%Y",
                    date: "$createdAt"
                  }
                }
              }
            });
            _context6.next = 7;
            return regeneratorRuntime.awrap(GetAggregationDoc(applied_jobs, query));

          case 7:
            list = _context6.sent;

            if (list && checkArray(list) && list.length > 0) {
              length = list.length || 0;
              result = list;
              res.json({
                status: 1,
                response: {
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

            _context6.next = 15;
            break;

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](0);
            console.log("error in router['del_list'] ".concat(_context6.t0));
            return _context6.abrupt("return", res.json({
              status: 0,
              response: error_msg
            }));

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };

  router['export'] = function _callee7(req, res) {
    var skip, limit, field, order, search, category_id, jobs_id, sort, query, list, fieldNames, finaldata, _ref, parse, csv;

    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            skip = get(req.body, 'skip', 0), limit = get(req.body, 'limit', 25), field = get(req.body, 'field', false), order = get(req.body, 'order', false), search = get(req.body, 'search', false), category_id = get(req.body, 'category_id', false), jobs_id = get(req.body, 'jobs_id', false), sort = {}, query = [];

            if (field && order) {
              sort[field] = Number(order);
            } else {
              sort['createdAt'] = -1;
            }

            if (search) {
              query.push({
                $match: {
                  $or: [{
                    'jobs_data.name': {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    cat_name: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    email: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    phone: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    name: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }]
                }
              });
            }

            if (category_id && isObjectId(category_id)) {
              query.push({
                $match: {
                  category_id: ObjectId(category_id)
                }
              });
            }

            if (jobs_id && isObjectId(jobs_id)) {
              query.push({
                $match: {
                  jobs_id: ObjectId(jobs_id)
                }
              });
            }

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
                name: 1,
                email: 1,
                phone: 1,
                jobs_data: 1,
                cat_name: 1,
                docs: 1,
                status: 1,
                createdAt: {
                  $dateToString: {
                    format: "%d-%m-%Y",
                    date: "$createdAt"
                  }
                }
              }
            });
            _context7.next = 9;
            return regeneratorRuntime.awrap(GetAggregationDoc(applied_jobs, query));

          case 9:
            list = _context7.sent;

            if (list && checkArray(list) && list.length > 0) {
              fieldNames = ["Created On", "Job Title", "Name", "E-mail"], finaldata = list.map(function (item) {
                return {
                  "Created On": item.createdAt,
                  "Job Title": item.jobs_data && item.jobs_data.name ? item.jobs_data.name : '',
                  "Name": item.name,
                  "E-mail": item.email
                };
              }), _ref = new Parser({
                fieldNames: fieldNames
              }), parse = _ref.parse, csv = parse(finaldata);

              if (csv) {
                res.json({
                  status: 1,
                  response: csv
                });
              } else {
                res.json({
                  status: 0,
                  response: 'Export Failed'
                });
              }
            } else {
              res.json({
                status: 0,
                response: 'No dats found'
              });
            }

            _context7.next = 17;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](0);
            console.log("error in router['export'] ".concat(_context7.t0));
            return _context7.abrupt("return", res.json({
              status: 0,
              response: error_msg
            }));

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 13]]);
  };

  return router;
};