"use strict";
const { verify } = require("jsonwebtoken"),
    { SECRET_KEY } = require("../config/config"),
    { GetOneDoc } = require("../model/mongodb"),
    { body } = require('express-validator');

let ensureAuthorized = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (token) {
            verify(token, SECRET_KEY, async (err, decoded) => {
                if (err || !decoded.username) {
                    res.json({ status: "00", response: "Unauthorized Access" });
                } else {
                    let response = await GetOneDoc("administrators", { username: decoded.username, status: 1 }, {}, {});
                    if (response && response._id) {
                        req.params.loginId = response._id;
                        req.params.loginData = response;
                        next();
                    } else {
                        res.json({ status: "00", response: "Unauthorized Access" });
                    }
                }
            });
        } else {
            res.json({ status: "00", response: "Unauthorized Access" });
        }
    } catch (error) {
        console.log(`error in let ensureAuthorized ${error}`)
        res.json({ status: "00", response: "Unauthorized Access" });
    }
};

module.exports = (app, io) => {
    try {
        const administrators = require("../controller/administrators/administrators")(app, io),
            department = require("../controller/administrators/department")(app, io),
            jobs = require("../controller/administrators/jobs")(app, io),
            category = require("../controller/administrators/category")(app, io),
            settings = require("../controller/administrators/settings")(app, io),
            contactus = require("../controller/administrators/contactus")(app, io),
            applied_jobs = require("../controller/administrators/applied_jobs")(app, io),
            appointments = require("../controller/administrators/appointments")(app, io),
            notification = require("../controller/administrators/notification")(app, io),
            dashboard = require("../controller/administrators/dashboard")(app, io);

        /* basic info start */
        app.post('/insert/new/admin/data', administrators['insert_new_data']);
        app.post('/insert/genaeral/settings/data', administrators['general_settings_data']);
        app.post('/insert/seo/settings/data', administrators['seo_settings_data']);
        app.post('/insert/smtp/settings/data', administrators['smtp_settings_data']);
        /* basic info end */

        app.post('/admin/login', [
            body('email').isLength({ min: 3 }).withMessage('Username or Email is required'),
            body('password').isLength({ min: 3 }).withMessage('Password is required')
        ], administrators['login']);
        app.post('/admin/logout', ensureAuthorized, administrators['logout']);
        app.post('/admin/add', [
            body('username').isLength({ min: 5 }).withMessage('Username is required'),
            body('email').isEmail().withMessage('Email is required'),
            body('name').isLength({ min: 3 }).withMessage('Email is required'),
        ], ensureAuthorized, administrators['add_admin']);
        app.post('/admin/edit', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, administrators['edit_admin']);
        app.post('/admin/soft_delete', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, administrators['delete_admin']);
        app.post('/admin/restore', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, administrators['restore_admin']);
        app.post('/admin/perm_del', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, administrators['perm_del']);
        app.post('/admin/list', ensureAuthorized, administrators['list']);
        app.post('/admin/del_list', ensureAuthorized, administrators['del_list']);
        app.post('/admin/export', ensureAuthorized, administrators['export']);


        app.post('/admin/get/dashboard', ensureAuthorized, dashboard['dashboard']);


        app.post('/admin/department/add', [
            body('name').isLength({ min: 2 }).withMessage('Username is required'),
        ], ensureAuthorized, department['add']);
        app.post('/admin/department/edit', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, department['edit']);
        app.post('/admin/department/soft_delete', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, department['delete']);
        app.post('/admin/department/restore', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, department['restore']);
        app.post('/admin/department/perm_del', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, department['perm_del']);
        app.post('/admin/department/list', ensureAuthorized, department['list']);
        app.post('/admin/department/del_list', ensureAuthorized, department['del_list']);
        app.post('/admin/department/export', ensureAuthorized, department['export']);


        app.post('/admin/jobs/add', [
            body('designation').isLength({ min: 2 }).withMessage('Designation is required'),
            body('qualification').not().isEmpty().withMessage('Qualification is required'),
            body('no_of_vacancy').not().isEmpty().withMessage('Vacancy is required'),
            body('experience').not().isEmpty().withMessage('Experience is required'),
            body('key_skills').not().isEmpty().withMessage('Key skills is required'),
            body('salary').not().isEmpty().withMessage('Salary is required'),
            body('posting_date').not().isEmpty().withMessage('Posting date is required'),
            body('closing_date').not().isEmpty().withMessage('Closing date is required'),
            body('category_id').not().isEmpty().withMessage('Category is required')
        ], ensureAuthorized, jobs['add']);
        app.post('/admin/jobs/edit', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, jobs['edit']);
        app.post('/admin/jobs/soft_delete', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, jobs['delete']);
        app.post('/admin/jobs/restore', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, jobs['restore']);
        app.post('/admin/jobs/perm_del', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, jobs['perm_del']);
        app.post('/admin/jobs/list', ensureAuthorized, jobs['list']);
        app.post('/admin/jobs/del_list', ensureAuthorized, jobs['del_list']);
        app.post('/admin/jobs/export', ensureAuthorized, jobs['export']);

        app.post('/admin/category/add', [
            body('name').isLength({ min: 2 }).withMessage('Username is required'),
        ], ensureAuthorized, category['add']);
        app.post('/admin/category/edit', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, category['edit']);
        app.post('/admin/category/soft_delete', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, category['delete']);
        app.post('/admin/category/restore', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, category['restore']);
        app.post('/admin/category/perm_del', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, category['perm_del']);
        app.post('/admin/category/list', ensureAuthorized, category['list']);
        app.post('/admin/category/del_list', ensureAuthorized, category['del_list']);
        app.post('/admin/get/category', ensureAuthorized, category['get_category']);
        app.post('/admin/category/export', ensureAuthorized, category['export']);


        app.post('/admin/settings/get', [
            body('alias').not().isEmpty().withMessage('Alias is required'),
            body('settings').not().isEmpty().withMessage('Settings is required')
        ], ensureAuthorized, settings['get_settings']);
        app.post('/admin/settings/genaeral/settings/data', [
            body('alias').not().isEmpty().withMessage('Alias is required'),
            body('settings').not().isEmpty().withMessage('Settings is required')
        ], ensureAuthorized, settings['update_general_settings_data']);

        app.post('/admin/contactus/edit', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, contactus['edit']);
        app.post('/admin/contactus/soft_delete', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, contactus['delete']);
        app.post('/admin/contactus/restore', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, contactus['restore']);
        app.post('/admin/contactus/perm_del', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, contactus['perm_del']);
        app.post('/admin/contactus/list', ensureAuthorized, contactus['list']);
        app.post('/admin/contactus/del_list', ensureAuthorized, contactus['del_list']);
        app.post('/admin/contactus/export', ensureAuthorized, contactus['export']);

        app.post('/admin/applied_jobs/edit', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, applied_jobs['edit']);
        app.post('/admin/applied_jobs/soft_delete', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, applied_jobs['delete']);
        app.post('/admin/applied_jobs/restore', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, applied_jobs['restore']);
        app.post('/admin/applied_jobs/perm_del', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, applied_jobs['perm_del']);
        app.post('/admin/applied_jobs/list', ensureAuthorized, applied_jobs['list']);
        app.post('/admin/applied_jobs/del_list', ensureAuthorized, applied_jobs['del_list']);
        app.post('/admin/applied_jobs/export', ensureAuthorized, applied_jobs['export']);

        app.post('/admin/appointments/edit', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, appointments['edit']);
        app.post('/admin/appointments/soft_delete', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, appointments['delete']);
        app.post('/admin/appointments/restore', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, appointments['restore']);
        app.post('/admin/appointments/perm_del', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, appointments['perm_del']);
        app.post('/admin/appointments/list', ensureAuthorized, appointments['list']);
        app.post('/admin/appointments/old_appointment', ensureAuthorized, appointments['old_appointment']);
        app.post('/admin/appointments/new_appointment', ensureAuthorized, appointments['new_appointment']);
        app.post('/admin/appointments/del_list', ensureAuthorized, appointments['del_list']);
        app.post('/admin/appointments/export', ensureAuthorized, appointments['export']);

        app.post('/admin/notification/markas_read', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, notification['markas_read']);
        app.post('/admin/notification/mark_as_unread', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, notification['mark_as_unread']);
        app.post('/admin/notification/perm_del', [
            body('_id').not().isEmpty().withMessage('Id is required'),
        ], ensureAuthorized, notification['perm_del']);
        app.post('/admin/notification/list', ensureAuthorized, notification['list']);

    } catch (e) {
        console.log("error in index.js--->>>>", e);
    }
};
