"use strict";

var _require = require("../../model/mongodb"),
    error_msg = _require.error_msg,
    GetAggregationDoc = _require.GetAggregationDoc,
    GetCountDocs = _require.GetCountDocs;

var contact_us = 'contact_us',
    appointments = 'appointments',
    applied_jobs = 'applied_jobs';

var _require2 = require('lodash'),
    get = _require2.get,
    _require3 = require('express-validator'),
    validationResult = _require3.validationResult;

module.exports = function () {
  var router = {};

  router['dashboard'] = function _callee(req, res) {
    var errors, sort, skip, limit, today, recent_jobs_query, recent_appointments_query, today_appointments_query, recent_contactus_query, p1, p2, p3, p4, p5, p6, p7, get_all;
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
            sort = {
              'createdAt': -1
            }, skip = 0, limit = 5, today = new Date();
            recent_jobs_query = [{
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
            }];
            recent_appointments_query = [{
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
            }];
            today_appointments_query = [{
              $match: {
                status: 1,
                appointment_date: today
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
            }];
            recent_contactus_query = [{
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
            }];
            p1 = GetCountDocs(applied_jobs, {
              status: 1
            }), p2 = GetCountDocs(appointments, {
              status: 1
            }), p3 = GetCountDocs(contact_us, {
              status: 1
            }), p4 = GetAggregationDoc(applied_jobs, recent_jobs_query), p5 = GetAggregationDoc(appointments, recent_appointments_query), p6 = GetAggregationDoc(contact_us, recent_contactus_query), p7 = GetAggregationDoc(contact_us, today_appointments_query);
            _context.next = 12;
            return regeneratorRuntime.awrap(Promise.all([p1, p2, p3, p4, p5, p6, p7]));

          case 12:
            get_all = _context.sent;
            res.json({
              status: 1,
              response: {
                total_applied_jobs: get(get_all, '0', 0),
                total_appointments: get(get_all, '1', 0),
                total_contact_us: get(get_all, '2', 0),
                recent_applied_jobs: get(get_all, '3', []),
                recent_appointments: get(get_all, '4', []),
                recent_contact_us: get(get_all, '5', []),
                today_appointments: get(get_all, '6', [])
              }
            });
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.log("error in router['dashboard'] ".concat(_context.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 16]]);
  };

  return router;
};