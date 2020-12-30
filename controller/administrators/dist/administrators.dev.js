"use strict";

var _require = require("../../model/mongodb"),
    isObjectId = _require.isObjectId,
    ObjectId = _require.ObjectId,
    error_msg = _require.error_msg,
    InsertDoc = _require.InsertDoc,
    UpdateDoc = _require.UpdateDoc,
    checkArray = _require.checkArray,
    GetAggregationDoc = _require.GetAggregationDoc,
    DeleteDoccs = _require.DeleteDoccs,
    GetOneDoc = _require.GetOneDoc,
    GetDocs = _require.GetDocs,
    validPassword = _require.validPassword,
    jwtSign = _require.jwtSign;

var administrators = 'administrators',
    settings = 'settings';

var bcrypt = require("bcrypt-nodejs"),
    _require2 = require('lodash'),
    get = _require2.get,
    set = _require2.set,
    _require3 = require('express-validator'),
    validationResult = _require3.validationResult,
    _require4 = require("json2csv"),
    Parser = _require4.Parser;

module.exports = function () {
  var router = {};

  router['insert_new_data'] = function _callee(req, res) {
    var obj, check, updaqte, insert;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            obj = {};
            obj['username'] = 'admin';
            obj['email'] = 'admin@srigokulamhospital.com';
            obj['password'] = bcrypt.hashSync('gok@hos@2020@', bcrypt.genSaltSync(8), null);
            obj['name'] = 'Sri Gokulam';
            obj['role'] = 'admin';
            obj['status'] = 1;
            obj['phone'] = '';
            obj['tel'] = '04272338800';
            _context.next = 12;
            return regeneratorRuntime.awrap(GetDocs(administrators, {
              $or: [{
                username: obj['username']
              }, {
                email: obj['email']
              }]
            }, {}, {}));

          case 12:
            check = _context.sent;

            if (!(check && check.length > 0)) {
              _context.next = 20;
              break;
            }

            _context.next = 16;
            return regeneratorRuntime.awrap(UpdateDoc(administrators, {
              _id: check[0]._id
            }, obj, {
              multi: true
            }));

          case 16:
            updaqte = _context.sent;

            if (updaqte && updaqte.nModified !== 0) {
              res.json({
                status: 1,
                response: 'Admin updated successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Admin not updated'
              });
            }

            _context.next = 25;
            break;

          case 20:
            obj['time_stamps'] = Number(new Date());
            _context.next = 23;
            return regeneratorRuntime.awrap(InsertDoc(administrators, obj));

          case 23:
            insert = _context.sent;

            if (insert && insert._id) {
              res.json({
                status: 1,
                response: 'Admin added successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Admin not added'
              });
            }

          case 25:
            _context.next = 31;
            break;

          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](0);
            console.log("error in router['insert_new_data'] ".concat(_context.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 27]]);
  };

  router['general_settings_data'] = function _callee2(req, res) {
    var obj, check, updaqte, insert;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            obj = {};
            obj['alias'] = 'general';
            obj['settings'] = {
              site_title: 'Sri Gokulam Hospital',
              site_email: 'admin@srigokulamhospital.com',
              site_url: 'https://srigokulamhospital.com/',
              site_logo: 'uploads/images/settings/gokulam.png'
            };
            _context2.next = 6;
            return regeneratorRuntime.awrap(GetDocs(settings, {
              alias: obj['alias']
            }, {}, {}));

          case 6:
            check = _context2.sent;

            if (!(check && check.length > 0)) {
              _context2.next = 14;
              break;
            }

            _context2.next = 10;
            return regeneratorRuntime.awrap(UpdateDoc(settings, {
              _id: check[0]._id
            }, obj, {
              multi: true
            }));

          case 10:
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

            _context2.next = 18;
            break;

          case 14:
            _context2.next = 16;
            return regeneratorRuntime.awrap(InsertDoc(settings, obj));

          case 16:
            insert = _context2.sent;

            if (insert && insert._id) {
              res.json({
                status: 1,
                response: 'Settings added successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Settings not added'
              });
            }

          case 18:
            _context2.next = 24;
            break;

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](0);
            console.log("error in router['general_settings_data'] ".concat(_context2.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 24:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 20]]);
  };

  router['seo_settings_data'] = function _callee3(req, res) {
    var obj, check, updaqte, insert;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            obj = {};
            obj['alias'] = 'seo';
            obj['settings'] = {
              seo_title: 'Sri Gokulam Hospital',
              seo_keyword: 'Sri Gokulam Hospital',
              seo_description: 'SUPER SPECIALITY HOSPITAL WITH COMMITMENT , COMPASSION AND CARE',
              og_image: 'uploads/images/settings/gokulam.png'
            };
            _context3.next = 6;
            return regeneratorRuntime.awrap(GetDocs(settings, {
              alias: obj['alias']
            }, {}, {}));

          case 6:
            check = _context3.sent;

            if (!(check && check.length > 0)) {
              _context3.next = 14;
              break;
            }

            _context3.next = 10;
            return regeneratorRuntime.awrap(UpdateDoc(settings, {
              _id: check[0]._id
            }, obj, {
              multi: true
            }));

          case 10:
            updaqte = _context3.sent;

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

            _context3.next = 18;
            break;

          case 14:
            _context3.next = 16;
            return regeneratorRuntime.awrap(InsertDoc(settings, obj));

          case 16:
            insert = _context3.sent;

            if (insert && insert._id) {
              res.json({
                status: 1,
                response: 'Settings added successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Settings not added'
              });
            }

          case 18:
            _context3.next = 24;
            break;

          case 20:
            _context3.prev = 20;
            _context3.t0 = _context3["catch"](0);
            console.log("error in router['seo_settings_data'] ".concat(_context3.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 24:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 20]]);
  };

  router['smtp_settings_data'] = function _callee4(req, res) {
    var obj, check, updaqte, insert;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            obj = {};
            obj['alias'] = 'smtp';
            obj['settings'] = {
              smtp_host: '',
              smtp_port: '',
              smtp_email: '',
              smtp_password: ''
            };
            _context4.next = 6;
            return regeneratorRuntime.awrap(GetDocs(settings, {
              alias: obj['alias']
            }, {}, {}));

          case 6:
            check = _context4.sent;

            if (!(check && check.length > 0)) {
              _context4.next = 14;
              break;
            }

            _context4.next = 10;
            return regeneratorRuntime.awrap(UpdateDoc(settings, {
              _id: check[0]._id
            }, obj, {
              multi: true
            }));

          case 10:
            updaqte = _context4.sent;

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

            _context4.next = 18;
            break;

          case 14:
            _context4.next = 16;
            return regeneratorRuntime.awrap(InsertDoc(settings, obj));

          case 16:
            insert = _context4.sent;

            if (insert && insert._id) {
              res.json({
                status: 1,
                response: 'Settings added successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Settings not added'
              });
            }

          case 18:
            _context4.next = 24;
            break;

          case 20:
            _context4.prev = 20;
            _context4.t0 = _context4["catch"](0);
            console.log("error in router['smtp_settings_data'] ".concat(_context4.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 24:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 20]]);
  };

  router['login'] = function _callee5(req, res) {
    var errors, email, password, user_data, obj, updated;
    return regeneratorRuntime.async(function _callee5$(_context5) {
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
            email = get(req.body, 'email', false), password = get(req.body, 'password', false);

            if (email) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", res.json({
              status: 0,
              response: 'Email is required'
            }));

          case 7:
            if (password) {
              _context5.next = 9;
              break;
            }

            return _context5.abrupt("return", res.json({
              status: 0,
              response: 'Password is required'
            }));

          case 9:
            _context5.next = 11;
            return regeneratorRuntime.awrap(GetOneDoc(administrators, {
              $or: [{
                username: email
              }, {
                email: email
              }]
            }, {}, {}));

          case 11:
            user_data = _context5.sent;

            if (!(user_data && user_data._id)) {
              _context5.next = 29;
              break;
            }

            if (!validPassword(password, user_data.password)) {
              _context5.next = 26;
              break;
            }

            if (!(+user_data.status === 1)) {
              _context5.next = 23;
              break;
            }

            obj = {};
            set(obj, 'activity.last_login', new Date());
            _context5.next = 19;
            return regeneratorRuntime.awrap(UpdateDoc(administrators, {
              _id: ObjectId(user_data._id)
            }, obj, {}));

          case 19:
            updated = _context5.sent;

            if (updated && updated.nModified !== 0) {
              res.json({
                status: 1,
                response: 'Login successfully',
                auth_token: jwtSign({
                  username: user_data.username,
                  role: "admin"
                })
              });
            } else {
              res.json({
                status: 0,
                response: 'Invalid Credentials'
              });
            }

            _context5.next = 24;
            break;

          case 23:
            res.json({
              status: 0,
              response: 'Your account is currently inactivated, please contact main admin...!'
            });

          case 24:
            _context5.next = 27;
            break;

          case 26:
            res.json({
              status: 0,
              response: 'Invalid Credentials'
            });

          case 27:
            _context5.next = 30;
            break;

          case 29:
            res.json({
              status: 0,
              response: 'Invalid Credentials'
            });

          case 30:
            _context5.next = 36;
            break;

          case 32:
            _context5.prev = 32;
            _context5.t0 = _context5["catch"](0);
            console.log("error in router['login'] ".concat(_context5.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 36:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 32]]);
  };

  router['logout'] = function _callee6(req, res) {
    var loginId, obj, updated;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            loginId = get(req.params, 'loginId', false);

            if (isObjectId(loginId)) {
              _context6.next = 4;
              break;
            }

            return _context6.abrupt("return", res.json({
              status: "00",
              response: "Unauthorized Access"
            }));

          case 4:
            obj = {};
            set(obj, 'activity.last_logout', new Date());
            _context6.next = 8;
            return regeneratorRuntime.awrap(UpdateDoc(administrators, {
              _id: ObjectId(loginId)
            }, obj, {}));

          case 8:
            updated = _context6.sent;

            if (updated && updated.nModified !== 0) {
              res.json({
                status: 1,
                response: 'logged out'
              });
            } else {
              res.json({
                status: 0,
                response: 'Not logged out'
              });
            }

            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            console.log("error in router['logout'] ".concat(_context6.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 12]]);
  };

  router['add_admin'] = function _callee7(req, res) {
    var errors, username, email, password, status, name, phone, tel, _id, obj, check_email, check_username, updaqte, _check_email, _check_username, insert;

    return regeneratorRuntime.async(function _callee7$(_context7) {
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
            username = get(req.body, 'username', ''), email = get(req.body, 'email', ''), password = get(req.body, 'password', ''), status = get(req.body, 'status', ''), name = get(req.body, 'name', ''), phone = get(req.body, 'phone', ''), tel = get(req.body, 'tel', ''), _id = get(req.body, '_id', false);
            obj = {};
            obj['username'] = username;
            obj['email'] = email;

            if (password && password.length > 0 && String(password) !== String(undefined)) {
              obj['password'] = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            }

            obj['name'] = name;
            obj['role'] = 'admin';
            obj['status'] = Number(status);
            obj['phone'] = phone;
            obj['tel'] = tel;

            if (!(_id && isObjectId(_id))) {
              _context7.next = 31;
              break;
            }

            _context7.next = 17;
            return regeneratorRuntime.awrap(GetDocs(administrators, {
              _id: {
                $ne: ObjectId(_id)
              },
              email: obj['email']
            }, {}, {}));

          case 17:
            check_email = _context7.sent;
            _context7.next = 20;
            return regeneratorRuntime.awrap(GetDocs(administrators, {
              _id: {
                $ne: ObjectId(_id)
              },
              username: obj['username']
            }, {}, {}));

          case 20:
            check_username = _context7.sent;

            if (!(check_email && check_email.length > 0)) {
              _context7.next = 23;
              break;
            }

            return _context7.abrupt("return", res.json({
              status: 0,
              response: 'Email already exists'
            }));

          case 23:
            if (!(check_username && check_username.length > 0)) {
              _context7.next = 25;
              break;
            }

            return _context7.abrupt("return", res.json({
              status: 0,
              response: 'Username already exists'
            }));

          case 25:
            _context7.next = 27;
            return regeneratorRuntime.awrap(UpdateDoc(administrators, {
              _id: ObjectId(_id)
            }, obj, {
              multi: true
            }));

          case 27:
            updaqte = _context7.sent;

            if (updaqte && updaqte.nModified !== 0) {
              res.json({
                status: 1,
                response: 'Admin updated successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Admin not updated'
              });
            }

            _context7.next = 48;
            break;

          case 31:
            obj['time_stamps'] = Number(new Date());

            if (!(!password || password.length === 0)) {
              _context7.next = 34;
              break;
            }

            return _context7.abrupt("return", res.json({
              status: 0,
              response: 'Password is required'
            }));

          case 34:
            _context7.next = 36;
            return regeneratorRuntime.awrap(GetDocs(administrators, {
              email: obj['email']
            }, {}, {}));

          case 36:
            _check_email = _context7.sent;
            _context7.next = 39;
            return regeneratorRuntime.awrap(GetDocs(administrators, {
              username: obj['username']
            }, {}, {}));

          case 39:
            _check_username = _context7.sent;

            if (!(_check_email && _check_email.length > 0)) {
              _context7.next = 42;
              break;
            }

            return _context7.abrupt("return", res.json({
              status: 0,
              response: 'Email already exists'
            }));

          case 42:
            if (!(_check_username && _check_username.length > 0)) {
              _context7.next = 44;
              break;
            }

            return _context7.abrupt("return", res.json({
              status: 0,
              response: 'Username already exists'
            }));

          case 44:
            _context7.next = 46;
            return regeneratorRuntime.awrap(InsertDoc(administrators, obj));

          case 46:
            insert = _context7.sent;

            if (insert && insert._id) {
              res.json({
                status: 1,
                response: 'Admin added successfully'
              });
            } else {
              res.json({
                status: 0,
                response: 'Admin not added'
              });
            }

          case 48:
            _context7.next = 54;
            break;

          case 50:
            _context7.prev = 50;
            _context7.t0 = _context7["catch"](0);
            console.log("error in router['add_admin'] ".concat(_context7.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 54:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 50]]);
  };

  router['edit_admin'] = function _callee8(req, res) {
    var errors, _id, response;

    return regeneratorRuntime.async(function _callee8$(_context8) {
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
            _id = get(req.body, '_id', false);

            if (!isObjectId(_id)) {
              _context8.next = 12;
              break;
            }

            _context8.next = 8;
            return regeneratorRuntime.awrap(GetOneDoc(administrators, {
              _id: ObjectId(_id)
            }, {
              password: 0
            }, {}));

          case 8:
            response = _context8.sent;
            return _context8.abrupt("return", res.json({
              status: 1,
              response: response
            }));

          case 12:
            return _context8.abrupt("return", res.json({
              status: 0,
              response: 'Id is not a valid id'
            }));

          case 13:
            _context8.next = 19;
            break;

          case 15:
            _context8.prev = 15;
            _context8.t0 = _context8["catch"](0);
            console.log("error in router['edit_admin'] ".concat(_context8.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 19:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[0, 15]]);
  };

  router['delete_admin'] = function _callee9(req, res) {
    var errors, _id, get_data, obj, update;

    return regeneratorRuntime.async(function _callee9$(_context9) {
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
            _id = get(req.body, '_id', false);

            if (!isObjectId(_id)) {
              _context9.next = 22;
              break;
            }

            _context9.next = 8;
            return regeneratorRuntime.awrap(GetOneDoc(administrators, {
              _id: ObjectId(_id)
            }, {}, {}));

          case 8:
            get_data = _context9.sent;

            if (!(get_data && get_data._id)) {
              _context9.next = 19;
              break;
            }

            obj = {};
            obj['old_status'] = Number(get_data.status);
            obj['status'] = Number(0);
            _context9.next = 15;
            return regeneratorRuntime.awrap(UpdateDoc(administrators, {
              _id: ObjectId(_id)
            }, obj, {}));

          case 15:
            update = _context9.sent;

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

            _context9.next = 20;
            break;

          case 19:
            res.json({
              status: 0,
              response: 'Not deleted'
            });

          case 20:
            _context9.next = 23;
            break;

          case 22:
            return _context9.abrupt("return", res.json({
              status: 0,
              response: 'Id is not a valid id'
            }));

          case 23:
            _context9.next = 29;
            break;

          case 25:
            _context9.prev = 25;
            _context9.t0 = _context9["catch"](0);
            console.log("error in router['delete_admin'] ".concat(_context9.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 29:
          case "end":
            return _context9.stop();
        }
      }
    }, null, null, [[0, 25]]);
  };

  router['restore_admin'] = function _callee10(req, res) {
    var errors, _id, get_data, obj, update;

    return regeneratorRuntime.async(function _callee10$(_context10) {
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
            _id = get(req.body, '_id', false);

            if (!isObjectId(_id)) {
              _context10.next = 22;
              break;
            }

            _context10.next = 8;
            return regeneratorRuntime.awrap(GetOneDoc(administrators, {
              _id: ObjectId(_id)
            }, {}, {}));

          case 8:
            get_data = _context10.sent;

            if (!(get_data && get_data._id)) {
              _context10.next = 19;
              break;
            }

            obj = {};
            obj['old_status'] = Number(0);
            obj['status'] = Number(get_data.old_status);
            _context10.next = 15;
            return regeneratorRuntime.awrap(UpdateDoc(administrators, {
              _id: ObjectId(_id)
            }, obj, {}));

          case 15:
            update = _context10.sent;

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

            _context10.next = 20;
            break;

          case 19:
            res.json({
              status: 0,
              response: 'Not restore'
            });

          case 20:
            _context10.next = 23;
            break;

          case 22:
            return _context10.abrupt("return", res.json({
              status: 0,
              response: 'Id is not a valid id'
            }));

          case 23:
            _context10.next = 29;
            break;

          case 25:
            _context10.prev = 25;
            _context10.t0 = _context10["catch"](0);
            console.log("error in router['restore_admin'] ".concat(_context10.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 29:
          case "end":
            return _context10.stop();
        }
      }
    }, null, null, [[0, 25]]);
  };

  router['perm_del'] = function _callee11(req, res) {
    var errors, _id, update;

    return regeneratorRuntime.async(function _callee11$(_context11) {
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
            _id = get(req.body, '_id', false);

            if (!isObjectId(_id)) {
              _context11.next = 12;
              break;
            }

            _context11.next = 8;
            return regeneratorRuntime.awrap(DeleteDoccs(administrators, {
              _id: ObjectId(_id),
              username: {
                $ne: 'admin'
              }
            }));

          case 8:
            update = _context11.sent;

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

            _context11.next = 13;
            break;

          case 12:
            return _context11.abrupt("return", res.json({
              status: 0,
              response: 'Id is not a valid id'
            }));

          case 13:
            _context11.next = 19;
            break;

          case 15:
            _context11.prev = 15;
            _context11.t0 = _context11["catch"](0);
            console.log("error in router['perm_del'] ".concat(_context11.t0));
            res.json({
              status: 0,
              response: error_msg
            });

          case 19:
          case "end":
            return _context11.stop();
        }
      }
    }, null, null, [[0, 15]]);
  };

  router['list'] = function _callee12(req, res) {
    var skip, limit, field, order, search, status, sort, query, finalquery, list, fullcount, active, inactive, data, length, result;
    return regeneratorRuntime.async(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            skip = get(req.body, 'skip', 0), limit = get(req.body, 'limit', 25), field = get(req.body, 'field', false), order = get(req.body, 'order', false), search = get(req.body, 'search', false), status = get(req.body, 'status', false), sort = {}, query = [];

            if (field && order) {
              sort[field] = Number(order);
            } else {
              sort['createdAt'] = -1;
            }

            if (search) {
              query.push({
                $match: {
                  $or: [{
                    'phone': {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    surname: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    name: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    email: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }]
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
                surname: 1,
                email: 1,
                phone: 1,
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
            _context12.next = 9;
            return regeneratorRuntime.awrap(GetAggregationDoc(administrators, finalquery));

          case 9:
            list = _context12.sent;

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

            _context12.next = 17;
            break;

          case 13:
            _context12.prev = 13;
            _context12.t0 = _context12["catch"](0);
            console.log("error in router['list'] ".concat(_context12.t0));
            return _context12.abrupt("return", res.json({
              status: 0,
              response: error_msg
            }));

          case 17:
          case "end":
            return _context12.stop();
        }
      }
    }, null, null, [[0, 13]]);
  };

  router['del_list'] = function _callee13(req, res) {
    var skip, limit, field, order, search, sort, query, list, length, result;
    return regeneratorRuntime.async(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
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
                    'phone': {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    surname: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    name: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    email: {
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
                surname: 1,
                email: 1,
                phone: 1,
                status: 1,
                createdAt: {
                  $dateToString: {
                    format: "%d-%m-%Y",
                    date: "$createdAt"
                  }
                }
              }
            });
            _context13.next = 7;
            return regeneratorRuntime.awrap(GetAggregationDoc(administrators, query));

          case 7:
            list = _context13.sent;

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

            _context13.next = 15;
            break;

          case 11:
            _context13.prev = 11;
            _context13.t0 = _context13["catch"](0);
            console.log("error in router['del_list'] ".concat(_context13.t0));
            return _context13.abrupt("return", res.json({
              status: 0,
              response: error_msg
            }));

          case 15:
          case "end":
            return _context13.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };

  router['export'] = function _callee14(req, res) {
    var skip, limit, field, order, search, status, sort, query, list, fieldNames, finaldata, _ref, parse, csv;

    return regeneratorRuntime.async(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            skip = get(req.body, 'skip', 0), limit = get(req.body, 'limit', 25), field = get(req.body, 'field', false), order = get(req.body, 'order', false), search = get(req.body, 'search', false), status = get(req.body, 'status', false), sort = {}, query = [];

            if (field && order) {
              sort[field] = Number(order);
            } else {
              sort['createdAt'] = -1;
            }

            if (search) {
              query.push({
                $match: {
                  $or: [{
                    'phone': {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    surname: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    name: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }, {
                    email: {
                      $regex: search + ".*",
                      $options: "si"
                    }
                  }]
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
                surname: 1,
                email: 1,
                phone: 1,
                status: 1,
                createdAt: {
                  $dateToString: {
                    format: "%d-%m-%Y",
                    date: "$createdAt"
                  }
                }
              }
            });
            _context14.next = 8;
            return regeneratorRuntime.awrap(GetAggregationDoc(administrators, query));

          case 8:
            list = _context14.sent;

            if (list && checkArray(list) && list.length > 0) {
              fieldNames = ["Created On", "Name", "Surname", "E-mail", "Phone", "Status"], finaldata = list.map(function (item) {
                return {
                  "Created On": item.createdAt,
                  "Name": item.name,
                  "Surname": item.surname,
                  "E-mail": item.email,
                  "Phone": item.phone,
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

            _context14.next = 16;
            break;

          case 12:
            _context14.prev = 12;
            _context14.t0 = _context14["catch"](0);
            console.log("error in router['export'] ".concat(_context14.t0));
            return _context14.abrupt("return", res.json({
              status: 0,
              response: error_msg
            }));

          case 16:
          case "end":
            return _context14.stop();
        }
      }
    }, null, null, [[0, 12]]);
  };

  return router;
};