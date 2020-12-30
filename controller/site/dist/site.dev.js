"use strict";

var _require = require("../../model/mongodb"),
    InsertDoc = _require.InsertDoc,
    isObjectId = _require.isObjectId,
    ObjectId = _require.ObjectId,
    error_msg = _require.error_msg,
    UpdateDoc = _require.UpdateDoc,
    GetOneDoc = _require.GetOneDoc,
    GetDocs = _require.GetDocs,
    checkArray = _require.checkArray,
    contact_us = 'contact_us',
    applied_jobs = 'applied_jobs',
    jobs = 'jobs',
    category = 'category',
    settings = 'settings',
    department = 'department',
    appointments = 'appointments',
    notification = 'notification',
    _require2 = require('lodash'),
    get = _require2.get,
    _require3 = require('express-validator'),
    validationResult = _require3.validationResult,
    _require4 = require('../../model/attachments'),
    get_attachment = _require4.get_attachment;

module.exports = function (app, io) {
  var router = {};

  var ins_notification = function ins_notification(req) {
    var obj, insert;
    return regeneratorRuntime.async(function ins_notification$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!(req && req.type && req.action && req.message)) {
              _context.next = 19;
              break;
            }

            obj = {};
            obj['type'] = get(req, 'type', '');
            obj['action'] = get(req, 'action', '');
            obj['message'] = get(req, 'message', '');
            _context.next = 8;
            return regeneratorRuntime.awrap(InsertDoc(notification, obj));

          case 8:
            insert = _context.sent;

            if (!(insert && insert._id)) {
              _context.next = 15;
              break;
            }

            io.emit("web notification", {
              username: get(req, 'name', ''),
              message: obj['message']
            });
            console.log("Added data in let ins_notification ".concat(req));
            return _context.abrupt("return", true);

          case 15:
            console.log("Not added data in let ins_notification ".concat(req));
            return _context.abrupt("return", true);

          case 17:
            _context.next = 21;
            break;

          case 19:
            console.log("Missed data in let ins_notification ".concat(req));
            return _context.abrupt("return", true);

          case 21:
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](0);
            console.log("error in let ins_notification ".concat(_context.t0));
            return _context.abrupt("return", true);

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 23]]);
  };

  var update_job_details = function update_job_details(req) {
    var get_data, obj, update;
    return regeneratorRuntime.async(function update_job_details$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (!(req && req._id && req.jobs_id && isObjectId(req.jobs_id) && isObjectId(req._id))) {
              _context2.next = 18;
              break;
            }

            _context2.next = 4;
            return regeneratorRuntime.awrap(GetOneDoc(jobs, {
              _id: ObjectId(req.jobs_id)
            }, {}, {}));

          case 4:
            get_data = _context2.sent;

            if (!(get_data && get_data._id)) {
              _context2.next = 14;
              break;
            }

            obj = {};
            obj['jobs_data'] = {
              name: get(get_data, 'name', ''),
              designation: get(get_data, 'designation', '')
            };
            _context2.next = 10;
            return regeneratorRuntime.awrap(UpdateDoc(applied_jobs, {
              _id: ObjectId(req._id),
              jobs_id: ObjectId(req.jobs_id)
            }, obj, {}));

          case 10:
            update = _context2.sent;
            return _context2.abrupt("return", true);

          case 14:
            console.log("No datas found in let update_job_details ".concat(req));
            return _context2.abrupt("return", true);

          case 16:
            _context2.next = 20;
            break;

          case 18:
            console.log("Required data in let update_job_details ".concat(req));
            return _context2.abrupt("return", true);

          case 20:
            _context2.next = 26;
            break;

          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](0);
            console.log("error in let update_job_details ".concat(_context2.t0));
            return _context2.abrupt("return", true);

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 22]]);
  };

  var update_category_details = function update_category_details(req) {
    var get_data, obj, update;
    return regeneratorRuntime.async(function update_category_details$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            if (!(req && req._id && req.category_id && isObjectId(req.category_id) && isObjectId(req._id))) {
              _context3.next = 18;
              break;
            }

            _context3.next = 4;
            return regeneratorRuntime.awrap(GetOneDoc(category, {
              _id: ObjectId(req.category_id)
            }, {}, {}));

          case 4:
            get_data = _context3.sent;

            if (!(get_data && get_data._id)) {
              _context3.next = 14;
              break;
            }

            obj = {};
            obj['cat_name'] = get(get_data, 'name', '');
            _context3.next = 10;
            return regeneratorRuntime.awrap(UpdateDoc(applied_jobs, {
              _id: ObjectId(req._id),
              category_id: ObjectId(req.category_id)
            }, obj, {}));

          case 10:
            update = _context3.sent;
            return _context3.abrupt("return", true);

          case 14:
            console.log("No datas found in let update_category_details ".concat(req));
            return _context3.abrupt("return", true);

          case 16:
            _context3.next = 20;
            break;

          case 18:
            console.log("Required data in let update_category_details ".concat(req));
            return _context3.abrupt("return", true);

          case 20:
            _context3.next = 26;
            break;

          case 22:
            _context3.prev = 22;
            _context3.t0 = _context3["catch"](0);
            console.log("error in let update_category_details ".concat(_context3.t0));
            return _context3.abrupt("return", true);

          case 26:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 22]]);
  };

  var update_department_details = function update_department_details(req) {
    var get_data, obj, update;
    return regeneratorRuntime.async(function update_department_details$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;

            if (!(req && req._id && req.department_id && isObjectId(req.department_id) && isObjectId(req._id))) {
              _context4.next = 18;
              break;
            }

            _context4.next = 4;
            return regeneratorRuntime.awrap(GetOneDoc(department, {
              _id: ObjectId(req.department_id)
            }, {}, {}));

          case 4:
            get_data = _context4.sent;

            if (!(get_data && get_data._id)) {
              _context4.next = 14;
              break;
            }

            obj = {};
            obj['department_name'] = get(get_data, 'name', '');
            _context4.next = 10;
            return regeneratorRuntime.awrap(UpdateDoc(appointments, {
              _id: ObjectId(req._id),
              department_id: ObjectId(req.department_id)
            }, obj, {}));

          case 10:
            update = _context4.sent;
            return _context4.abrupt("return", true);

          case 14:
            console.log("No datas found in let update_department_details ".concat(req));
            return _context4.abrupt("return", true);

          case 16:
            _context4.next = 20;
            break;

          case 18:
            console.log("Required data in let update_department_details ".concat(req));
            return _context4.abrupt("return", true);

          case 20:
            _context4.next = 26;
            break;

          case 22:
            _context4.prev = 22;
            _context4.t0 = _context4["catch"](0);
            console.log("error in let update_department_details ".concat(_context4.t0));
            return _context4.abrupt("return", true);

          case 26:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 22]]);
  };

  router['get_settings'] = function _callee(req, res) {
    var errors, response;
    return regeneratorRuntime.async(function _callee$(_context5) {
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
            _context5.next = 6;
            return regeneratorRuntime.awrap(GetOneDoc(settings, {
              alias: String(req.body.alias).trim()
            }, {}, {}));

          case 6:
            response = _context5.sent;
            res.json({
              status: 1,
              response: response
            });
            _context5.next = 14;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            console.log("error in router['get_settings'] ".concat(_context5.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };

  router['get_department'] = function _callee2(req, res) {
    var errors, response;
    return regeneratorRuntime.async(function _callee2$(_context6) {
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
            _context6.next = 6;
            return regeneratorRuntime.awrap(GetDocs(department, {
              status: 1
            }, {}, {}));

          case 6:
            response = _context6.sent;
            res.json({
              status: 1,
              response: response
            });
            _context6.next = 14;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            console.log("error in router['get_department'] ".concat(_context6.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };

  router['get_category'] = function _callee3(req, res) {
    var errors, response;
    return regeneratorRuntime.async(function _callee3$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context7.next = 4;
              break;
            }

            return _context7.abrupt("return", res.json({
              status: 0,
              errors: errors.array()
            }));

          case 4:
            _context7.next = 6;
            return regeneratorRuntime.awrap(GetDocs(category, {
              status: 1
            }, {}, {}));

          case 6:
            response = _context7.sent;
            res.json({
              status: 1,
              response: response
            });
            _context7.next = 14;
            break;

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](0);
            console.log("error in router['get_category'] ".concat(_context7.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };

  router['get_jobs'] = function _callee4(req, res) {
    var errors, response;
    return regeneratorRuntime.async(function _callee4$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context8.next = 4;
              break;
            }

            return _context8.abrupt("return", res.json({
              status: 0,
              errors: errors.array()
            }));

          case 4:
            _context8.next = 6;
            return regeneratorRuntime.awrap(GetDocs(jobs, {
              status: 1
            }, {}, {}));

          case 6:
            response = _context8.sent;
            res.json({
              status: 1,
              response: response
            });
            _context8.next = 14;
            break;

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](0);
            console.log("error in router['get_jobs'] ".concat(_context8.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };

  router['contactus_details'] = function _callee5(req, res) {
    var errors, obj, added;
    return regeneratorRuntime.async(function _callee5$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context9.next = 4;
              break;
            }

            return _context9.abrupt("return", res.json({
              status: 0,
              errors: errors.array()
            }));

          case 4:
            obj = {};
            obj['name'] = get(req.body, 'name', '');
            obj['email'] = get(req.body, 'email', '');
            obj['phone'] = get(req.body, 'phone', '');
            obj['subject'] = get(req.body, 'subject', '');
            obj['message'] = get(req.body, 'message', '');
            obj['status'] = 1;
            obj['time_stamps'] = Number(new Date());
            _context9.next = 14;
            return regeneratorRuntime.awrap(InsertDoc(contact_us, obj));

          case 14:
            added = _context9.sent;

            if (added && added._id) {
              ins_notification({
                type: 'contact_us',
                action: 'contact_us',
                message: "Hi, ".concat(obj['name'], " submitted the contact us form "),
                name: obj['name']
              });
              res.json({
                status: 1,
                response: 'Form submitted successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Form not submitted'
              });
            }

            _context9.next = 22;
            break;

          case 18:
            _context9.prev = 18;
            _context9.t0 = _context9["catch"](0);
            console.log("error in router['contactus_details'] ".concat(_context9.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 22:
          case "end":
            return _context9.stop();
        }
      }
    }, null, null, [[0, 18]]);
  };

  router['apply_jobs'] = function _callee6(req, res) {
    var errors, obj, added;
    return regeneratorRuntime.async(function _callee6$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context10.next = 4;
              break;
            }

            return _context10.abrupt("return", res.json({
              status: 0,
              errors: errors.array()
            }));

          case 4:
            obj = {};

            if (!(req.files && req.files.docs && String(req.files.docs) !== String("undefined") && req.files.docs.length > 0 && checkArray(req.files.docs))) {
              _context10.next = 9;
              break;
            }

            if (req.files.avatar.length > 0) {
              obj['docs'] = get_attachment(req.files.docs[0].destination, req.files.docs[0].filename);
            }

            _context10.next = 10;
            break;

          case 9:
            return _context10.abrupt("return", res.json({
              status: 0,
              response: 'Document is required'
            }));

          case 10:
            if (isObjectId(get(req.body, 'jobs_id', ''))) {
              _context10.next = 12;
              break;
            }

            return _context10.abrupt("return", res.json({
              status: 0,
              response: 'Job title is required'
            }));

          case 12:
            if (isObjectId(get(req.body, 'category_id', ''))) {
              _context10.next = 14;
              break;
            }

            return _context10.abrupt("return", res.json({
              status: 0,
              response: 'category is required'
            }));

          case 14:
            obj['name'] = get(req.body, 'name', '');
            obj['email'] = get(req.body, 'email', '');
            obj['phone'] = get(req.body, 'phone', '');
            obj['qualification'] = get(req.body, 'qualification', '');
            obj['message'] = get(req.body, 'message', '');
            obj['status'] = 1;
            obj['time_stamps'] = Number(new Date());
            obj['jobs_id'] = ObjectId(get(req.body, 'jobs_id', ''));
            obj['category_id'] = ObjectId(get(req.body, 'category_id', ''));
            _context10.next = 25;
            return regeneratorRuntime.awrap(InsertDoc(applied_jobs, obj));

          case 25:
            added = _context10.sent;

            if (added && added._id) {
              res.json({
                status: 1,
                response: 'Form submitted successfully'
              });
              ins_notification({
                type: 'applied_jobs',
                action: 'applied_jobs',
                message: "Hi, ".concat(obj['name'], " apllied for the job"),
                name: obj['name']
              });
              update_job_details({
                _id: ObjectId(added._id),
                jobs_id: ObjectId(req.body.jobs_id)
              });
              update_category_details({
                _id: ObjectId(added._id),
                category_id: ObjectId(req.body.category_id)
              });
            } else {
              res.json({
                status: 0,
                response: 'Form not submitted'
              });
            }

            _context10.next = 33;
            break;

          case 29:
            _context10.prev = 29;
            _context10.t0 = _context10["catch"](0);
            console.log("error in router['apply_jobs'] ".concat(_context10.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 33:
          case "end":
            return _context10.stop();
        }
      }
    }, null, null, [[0, 29]]);
  };

  router['appointments_details'] = function _callee7(req, res) {
    var errors, obj, added;
    return regeneratorRuntime.async(function _callee7$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            errors = validationResult(req);

            if (errors.isEmpty()) {
              _context11.next = 4;
              break;
            }

            return _context11.abrupt("return", res.json({
              status: 0,
              errors: errors.array()
            }));

          case 4:
            obj = {};

            if (isObjectId(get(req.body, 'department_id', ''))) {
              _context11.next = 7;
              break;
            }

            return _context11.abrupt("return", res.json({
              status: 0,
              response: 'Department is required'
            }));

          case 7:
            obj['name'] = get(req.body, 'name', '');
            obj['email'] = get(req.body, 'email', '');
            obj['age'] = get(req.body, 'age', '');
            obj['phone'] = get(req.body, 'phone', '');
            obj['gender'] = get(req.body, 'gender', '');
            obj['time'] = get(req.body, 'time', '');
            obj['appointment_date'] = new Date(get(req.body, 'appointment_date', new Date()));
            obj['status'] = 1;
            obj['time_stamps'] = Number(new Date());
            obj['department_id'] = ObjectId(get(req.body, 'department_id', ''));
            _context11.next = 19;
            return regeneratorRuntime.awrap(InsertDoc(appointments, obj));

          case 19:
            added = _context11.sent;

            if (added && added._id) {
              res.json({
                status: 1,
                response: 'Form submitted successfully'
              });
              ins_notification({
                type: 'appointments',
                action: 'appointments',
                message: "Hi, ".concat(obj['name'], " submitted the appointment form"),
                name: obj['name']
              });
              update_department_details({
                _id: ObjectId(added._id),
                department_id: ObjectId(req.body.department_id)
              });
            } else {
              res.json({
                status: 0,
                response: 'Form not submitted'
              });
            }

            _context11.next = 27;
            break;

          case 23:
            _context11.prev = 23;
            _context11.t0 = _context11["catch"](0);
            console.log("error in router['appointments_details'] ".concat(_context11.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 27:
          case "end":
            return _context11.stop();
        }
      }
    }, null, null, [[0, 23]]);
  };

  return router;
};