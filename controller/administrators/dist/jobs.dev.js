"use strict";

var _require = require("../../model/mongodb"),
    isObjectId = _require.isObjectId,
    ObjectId = _require.ObjectId,
    error_msg = _require.error_msg,
    InsertDoc = _require.InsertDoc,
    UpdateDoc = _require.UpdateDoc,
    GetAggregationDoc = _require.GetAggregationDoc,
    checkArray = _require.checkArray,
    DeleteDoccs = _require.DeleteDoccs,
    GetOneDoc = _require.GetOneDoc;

var jobs = 'jobs',
    category = 'category',
    applied_jobs = 'applied_jobs';

var _require2 = require('lodash'),
    get = _require2.get,
    _require3 = require('express-validator'),
    validationResult = _require3.validationResult,
    _require4 = require("json2csv"),
    Parser = _require4.Parser;

module.exports = function () {
  var router = {};

  var update_job_details_data = function update_job_details_data(req) {
    var get_data, obj, update;
    return regeneratorRuntime.async(function update_job_details_data$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!(req && req._id && isObjectId(req._id))) {
              _context.next = 18;
              break;
            }

            _context.next = 4;
            return regeneratorRuntime.awrap(GetOneDoc(jobs, {
              _id: ObjectId(req._id)
            }, {}, {}));

          case 4:
            get_data = _context.sent;

            if (!(get_data && get_data._id)) {
              _context.next = 14;
              break;
            }

            obj = {};
            obj['jobs_data'] = {
              name: get(get_data, 'name', ''),
              designation: get(get_data, 'designation', '')
            };
            _context.next = 10;
            return regeneratorRuntime.awrap(UpdateDoc(applied_jobs, {
              jobs_id: ObjectId(req._id)
            }, obj, {}));

          case 10:
            update = _context.sent;
            return _context.abrupt("return", true);

          case 14:
            console.log("No datas found in let update_job_details_data ".concat(req));
            return _context.abrupt("return", true);

          case 16:
            _context.next = 20;
            break;

          case 18:
            console.log("Required data in let update_job_details_data ".concat(req));
            return _context.abrupt("return", true);

          case 20:
            _context.next = 26;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](0);
            console.log("error in let update_job_details_data ".concat(_context.t0));
            return _context.abrupt("return", true);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 22]]);
  };

  router['add'] = function _callee(req, res) {
    var errors, status, added_by, designation, _id, qualification, no_of_vacancy, experience, key_skills, salary, posting_date, closing_date, category_id, get_dept, obj, updaqte, insert;

    return regeneratorRuntime.async(function _callee$(_context2) {
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
            status = get(req.body, 'status', ''), added_by = get(req.params, 'loginId', false), designation = get(req.body, 'designation', ''), _id = get(req.body, '_id', false), qualification = get(req.body, 'qualification', ''), no_of_vacancy = get(req.body, 'no_of_vacancy', ''), experience = get(req.body, 'experience', ''), key_skills = get(req.body, 'key_skills', ''), salary = get(req.body, 'salary', ''), posting_date = get(req.body, 'posting_date', ''), closing_date = get(req.body, 'closing_date', ''), category_id = get(req.body, 'category_id', false);

            if (isObjectId(added_by)) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              status: "00",
              response: "Unauthorized Access"
            }));

          case 7:
            if (isObjectId(category_id)) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.json({
              status: 0,
              response: "Category is required"
            }));

          case 9:
            _context2.next = 11;
            return regeneratorRuntime.awrap(GetOneDoc(category, {
              _id: ObjectId(category_id)
            }, {}, {}));

          case 11:
            get_dept = _context2.sent;
            obj = {};
            obj['added_by'] = ObjectId(added_by);
            obj['category_id'] = ObjectId(category_id);
            obj['name'] = get(get_dept, 'name', '');
            obj['status'] = Number(status);
            obj['designation'] = String(designation);
            obj['qualification'] = String(qualification);
            obj['no_of_vacancy'] = String(no_of_vacancy);
            obj['experience'] = String(experience);
            obj['key_skills'] = String(key_skills);
            obj['salary'] = String(salary);
            obj['posting_date'] = String(posting_date).length > 0 && String(posting_date) !== String(undefined) ? new Date(posting_date) : new Date();
            obj['closing_date'] = String(closing_date).length > 0 && String(closing_date) !== String(undefined) ? new Date(closing_date) : new Date();

            if (!(_id && isObjectId(_id))) {
              _context2.next = 32;
              break;
            }

            _context2.next = 28;
            return regeneratorRuntime.awrap(UpdateDoc(jobs, {
              _id: ObjectId(_id)
            }, obj, {
              multi: true
            }));

          case 28:
            updaqte = _context2.sent;

            if (updaqte && updaqte.nModified !== 0) {
              update_job_details_data({
                _id: _id
              });
              res.json({
                status: 1,
                response: 'Jobs updated successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Jobs not updated'
              });
            }

            _context2.next = 37;
            break;

          case 32:
            obj['time_stamps'] = Number(new Date());
            _context2.next = 35;
            return regeneratorRuntime.awrap(InsertDoc(jobs, obj));

          case 35:
            insert = _context2.sent;

            if (insert && insert._id) {
              res.json({
                status: 1,
                response: 'Jobs added successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Jobs not added'
              });
            }

          case 37:
            _context2.next = 43;
            break;

          case 39:
            _context2.prev = 39;
            _context2.t0 = _context2["catch"](0);
            console.log("error in router['add'] ".concat(_context2.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 43:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 39]]);
  };

  router['edit'] = function _callee2(req, res) {
    var errors, _id, response;

    return regeneratorRuntime.async(function _callee2$(_context3) {
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
            return regeneratorRuntime.awrap(GetOneDoc(jobs, {
              _id: ObjectId(_id)
            }, {}, {}));

          case 8:
            response = _context3.sent;
            return _context3.abrupt("return", res.json({
              status: 1,
              response: response
            }));

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
            console.log("error in router['edit'] ".concat(_context3.t0));
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

  router['delete'] = function _callee3(req, res) {
    var errors, _id, get_data, obj, update;

    return regeneratorRuntime.async(function _callee3$(_context4) {
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
              _context4.next = 22;
              break;
            }

            _context4.next = 8;
            return regeneratorRuntime.awrap(GetOneDoc(jobs, {
              _id: ObjectId(_id)
            }, {}, {}));

          case 8:
            get_data = _context4.sent;

            if (!(get_data && get_data._id)) {
              _context4.next = 19;
              break;
            }

            obj = {};
            obj['old_status'] = Number(get_data.status);
            obj['status'] = Number(0);
            _context4.next = 15;
            return regeneratorRuntime.awrap(UpdateDoc(jobs, {
              _id: ObjectId(_id)
            }, obj, {}));

          case 15:
            update = _context4.sent;

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

            _context4.next = 20;
            break;

          case 19:
            res.json({
              status: 0,
              response: 'Not deleted'
            });

          case 20:
            _context4.next = 23;
            break;

          case 22:
            return _context4.abrupt("return", res.json({
              status: 0,
              response: 'Id is not a valid id'
            }));

          case 23:
            _context4.next = 29;
            break;

          case 25:
            _context4.prev = 25;
            _context4.t0 = _context4["catch"](0);
            console.log("error in router['delete'] ".concat(_context4.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 29:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 25]]);
  };

  router['restore'] = function _callee4(req, res) {
    var errors, _id, get_data, obj, update;

    return regeneratorRuntime.async(function _callee4$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context5.next = 4;
              break;
            }

            return _context5.abrupt("return", res.json({
              status: 0,
              errors: errors.array()
            }));

          case 4:
            _id = get(req.body, '_id', false);

            if (!isObjectId(_id)) {
              _context5.next = 22;
              break;
            }

            _context5.next = 8;
            return regeneratorRuntime.awrap(GetOneDoc(jobs, {
              _id: ObjectId(_id)
            }, {}, {}));

          case 8:
            get_data = _context5.sent;

            if (!(get_data && get_data._id)) {
              _context5.next = 19;
              break;
            }

            obj = {};
            obj['old_status'] = Number(0);
            obj['status'] = Number(get_data.old_status);
            _context5.next = 15;
            return regeneratorRuntime.awrap(UpdateDoc(jobs, {
              _id: ObjectId(_id)
            }, obj, {}));

          case 15:
            update = _context5.sent;

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

            _context5.next = 20;
            break;

          case 19:
            res.json({
              status: 0,
              response: 'Not restore'
            });

          case 20:
            _context5.next = 23;
            break;

          case 22:
            return _context5.abrupt("return", res.json({
              status: 0,
              response: 'Id is not a valid id'
            }));

          case 23:
            _context5.next = 29;
            break;

          case 25:
            _context5.prev = 25;
            _context5.t0 = _context5["catch"](0);
            console.log("error in router['restore'] ".concat(_context5.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 29:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 25]]);
  };

  router['perm_del'] = function _callee5(req, res) {
    var errors, _id, update;

    return regeneratorRuntime.async(function _callee5$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context6.next = 4;
              break;
            }

            return _context6.abrupt("return", res.json({
              status: 0,
              errors: errors.array()
            }));

          case 4:
            _id = get(req.body, '_id', false);

            if (!isObjectId(_id)) {
              _context6.next = 12;
              break;
            }

            _context6.next = 8;
            return regeneratorRuntime.awrap(DeleteDoccs(jobs, {
              _id: ObjectId(_id)
            }));

          case 8:
            update = _context6.sent;

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

            _context6.next = 13;
            break;

          case 12:
            return _context6.abrupt("return", res.json({
              status: 0,
              response: 'Id is not a valid id'
            }));

          case 13:
            _context6.next = 19;
            break;

          case 15:
            _context6.prev = 15;
            _context6.t0 = _context6["catch"](0);
            console.log("error in router['perm_del'] ".concat(_context6.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 19:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 15]]);
  };

  router['list'] = function _callee6(req, res) {
    var skip, limit, field, order, search, status, category_id, sort, query, finalquery, list, fullcount, active, inactive, data, length, result;
    return regeneratorRuntime.async(function _callee6$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            skip = get(req.body, 'skip', 0), limit = get(req.body, 'limit', 25), field = get(req.body, 'field', false), order = get(req.body, 'order', false), search = get(req.body, 'search', false), status = get(req.body, 'status', false), category_id = get(req.body, 'category_id', false), sort = {}, query = [];

            if (field && order) {
              sort[field] = Number(order);
            } else {
              sort['name'] = -1;
            }

            if (search) {
              query.push({
                $match: {
                  $or: [{
                    designation: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    no_of_vacancy: {
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

            if (status) {
              query.push({
                $match: {
                  status: Number(status)
                }
              });
            } else {
              query.push({
                $match: {
                  status: {
                    $in: [1, 2]
                  }
                }
              });
            }

            query.push({
              $match: {
                status: {
                  $ne: 0
                }
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
                status: 1,
                designation: 1,
                no_of_vacancy: 1,
                posting_date: {
                  $dateToString: {
                    format: "%d-%m-%Y",
                    date: "$posting_date"
                  }
                },
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
                    status: {
                      $ne: 0
                    }
                  }
                }, {
                  $count: 'all'
                }],
                active: [{
                  $match: {
                    status: 1
                  }
                }, {
                  $count: 'active'
                }],
                inactive: [{
                  $match: {
                    status: 2
                  }
                }, {
                  $count: 'inactive'
                }],
                documentdata: query
              }
            }];
            _context7.next = 10;
            return regeneratorRuntime.awrap(GetAggregationDoc(jobs, finalquery));

          case 10:
            list = _context7.sent;

            if (list && checkArray(list) && list.length > 0) {
              fullcount = get(list, '0.count.0.all', 0);
              active = get(list, '0.active.0.active', 0);
              inactive = get(list, '0.inactive.0.inactive', 0);
              data = get(list, '0.documentdata', []);
              length = data.length || 0;
              result = data;
              res.json({
                status: 1,
                response: {
                  fullcount: fullcount,
                  active: active,
                  inactive: inactive,
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

            _context7.next = 18;
            break;

          case 14:
            _context7.prev = 14;
            _context7.t0 = _context7["catch"](0);
            console.log("error in router['list'] ".concat(_context7.t0));
            return _context7.abrupt("return", res.json({
              status: 0,
              response: error_msg
            }));

          case 18:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 14]]);
  };

  router['del_list'] = function _callee7(req, res) {
    var skip, limit, field, order, search, sort, query, list, length, result;
    return regeneratorRuntime.async(function _callee7$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            skip = get(req.body, 'skip', 0), limit = get(req.body, 'limit', 25), field = get(req.body, 'field', false), order = get(req.body, 'order', false), search = get(req.body, 'search', false), sort = {}, query = [];

            if (field && order) {
              sort[field] = Number(order);
            } else {
              sort['name'] = -1;
            }

            if (search) {
              query.push({
                $match: {
                  $or: [{
                    designation: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    no_of_vacancy: {
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
                status: 1,
                createdAt: {
                  $dateToString: {
                    format: "%d-%m-%Y",
                    date: "$createdAt"
                  }
                }
              }
            });
            _context8.next = 7;
            return regeneratorRuntime.awrap(GetAggregationDoc(jobs, query));

          case 7:
            list = _context8.sent;

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

            _context8.next = 15;
            break;

          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](0);
            console.log("error in router['del_list'] ".concat(_context8.t0));
            return _context8.abrupt("return", res.json({
              status: 0,
              response: error_msg
            }));

          case 15:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };

  router['export'] = function _callee8(req, res) {
    var skip, limit, field, order, search, status, category_id, sort, query, list, fieldNames, finaldata, _ref, parse, csv;

    return regeneratorRuntime.async(function _callee8$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            skip = get(req.body, 'skip', 0), limit = get(req.body, 'limit', 25), field = get(req.body, 'field', false), order = get(req.body, 'order', false), search = get(req.body, 'search', false), status = get(req.body, 'status', false), category_id = get(req.body, 'category_id', false), sort = {}, query = [];

            if (field && order) {
              sort[field] = Number(order);
            } else {
              sort['name'] = -1;
            }

            if (search) {
              query.push({
                $match: {
                  $or: [{
                    designation: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    no_of_vacancy: {
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

            if (status) {
              query.push({
                $match: {
                  status: Number(status)
                }
              });
            } else {
              query.push({
                $match: {
                  status: {
                    $in: [1, 2]
                  }
                }
              });
            }

            query.push({
              $match: {
                status: {
                  $ne: 0
                }
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
                status: 1,
                designation: 1,
                no_of_vacancy: 1,
                posting_date: {
                  $dateToString: {
                    format: "%d-%m-%Y",
                    date: "$posting_date"
                  }
                },
                createdAt: {
                  $dateToString: {
                    format: "%d-%m-%Y",
                    date: "$createdAt"
                  }
                }
              }
            });
            _context9.next = 9;
            return regeneratorRuntime.awrap(GetAggregationDoc(jobs, query));

          case 9:
            list = _context9.sent;

            if (list && checkArray(list) && list.length > 0) {
              fieldNames = ["Created On", "Department", "Designation", "Number Of Vacancy", "Posted Date", "Status"], finaldata = list.map(function (item) {
                return {
                  "Created On": item.createdAt,
                  "Department": item.name,
                  "Designation": item.designation,
                  "Number Of Vacancy": item.no_of_vacancy,
                  "Posted Date": item.posting_date,
                  "Status": +item.status === 1 ? 'Active' : 'In-Active'
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

            _context9.next = 17;
            break;

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](0);
            console.log("error in router['export'] ".concat(_context9.t0));
            return _context9.abrupt("return", res.json({
              status: 0,
              response: error_msg
            }));

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, null, null, [[0, 13]]);
  };

  return router;
};