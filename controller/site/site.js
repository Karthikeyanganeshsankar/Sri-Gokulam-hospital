let { InsertDoc, isObjectId, ObjectId, error_msg, UpdateDoc, GetOneDoc,
    GetDocs, checkArray } = require("../../model/mongodb"),
    contact_us = 'contact_us', applied_jobs = 'applied_jobs', jobs = 'jobs', category = 'category',
    settings = 'settings', department = 'department', appointments = 'appointments',
    notification = 'notification',
    { get } = require('lodash'), { validationResult } = require('express-validator'),
    { get_attachment } = require('../../model/attachments');

module.exports = (app, io) => {
    let router = {};

    let ins_notification = async (req) => {
        try {
            if (req && req.type && req.action && req.message) {
                let obj = {};
                obj['type'] = get(req, 'type', '');
                obj['action'] = get(req, 'action', '');
                obj['message'] = get(req, 'message', '');
                let insert = await InsertDoc(notification, obj);
                if (insert && insert._id) {
                    io.emit("web notification", { username: get(req, 'name', ''), message: obj['message'] });
                    console.log(`Added data in let ins_notification ${req}`)
                    return true;
                } else {
                    console.log(`Not added data in let ins_notification ${req}`)
                    return true;
                }
            } else {
                console.log(`Missed data in let ins_notification ${req}`)
                return true;
            }
        } catch (error) {
            console.log(`error in let ins_notification ${error}`)
            return true;
        }
    };

    let update_job_details = async (req) => {
        try {
            if (req && req._id && req.jobs_id && isObjectId(req.jobs_id) && isObjectId(req._id)) {
                let get_data = await GetOneDoc(jobs, { _id: ObjectId(req.jobs_id) }, {}, {});
                if (get_data && get_data._id) {
                    let obj = {};
                    obj['jobs_data'] = {
                        name: get(get_data, 'name', ''),
                        designation: get(get_data, 'designation', '')
                    };
                    let update = await UpdateDoc(applied_jobs, { _id: ObjectId(req._id), jobs_id: ObjectId(req.jobs_id) }, obj, {});
                    return true;
                } else {
                    console.log(`No datas found in let update_job_details ${req}`)
                    return true;
                }
            } else {
                console.log(`Required data in let update_job_details ${req}`)
                return true;
            }
        } catch (error) {
            console.log(`error in let update_job_details ${error}`)
            return true;
        }
    };

    let update_category_details = async (req) => {
        try {
            if (req && req._id && req.category_id && isObjectId(req.category_id) && isObjectId(req._id)) {
                let get_data = await GetOneDoc(category, { _id: ObjectId(req.category_id) }, {}, {});
                if (get_data && get_data._id) {
                    let obj = {};
                    obj['cat_name'] = get(get_data, 'name', '');
                    let update = await UpdateDoc(applied_jobs, { _id: ObjectId(req._id), category_id: ObjectId(req.category_id) }, obj, {});
                    return true;
                } else {
                    console.log(`No datas found in let update_category_details ${req}`)
                    return true;
                }
            } else {
                console.log(`Required data in let update_category_details ${req}`)
                return true;
            }
        } catch (error) {
            console.log(`error in let update_category_details ${error}`)
            return true;
        }
    };

    let update_department_details = async (req) => {
        try {
            if (req && req._id && req.department_id && isObjectId(req.department_id) && isObjectId(req._id)) {
                let get_data = await GetOneDoc(department, { _id: ObjectId(req.department_id) }, {}, {});
                if (get_data && get_data._id) {
                    let obj = {};
                    obj['department_name'] = get(get_data, 'name', '');
                    let update = await UpdateDoc(appointments, { _id: ObjectId(req._id), department_id: ObjectId(req.department_id) }, obj, {});
                    return true;
                } else {
                    console.log(`No datas found in let update_department_details ${req}`)
                    return true;
                }
            } else {
                console.log(`Required data in let update_department_details ${req}`)
                return true;
            }
        } catch (error) {
            console.log(`error in let update_department_details ${error}`)
            return true;
        }
    };

    router['get_settings'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let response = await GetOneDoc(settings, { alias: String(req.body.alias).trim() }, {}, {});
            res.json({ status: 1, response });
        } catch (error) {
            console.log(`error in router['get_settings'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['get_department'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let response = await GetDocs(department, { status: 1 }, {}, {});
            res.json({ status: 1, response });
        } catch (error) {
            console.log(`error in router['get_department'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['get_category'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let response = await GetDocs(category, { status: 1 }, {}, {});
            res.json({ status: 1, response });
        } catch (error) {
            console.log(`error in router['get_category'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['get_jobs'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let response = await GetDocs(jobs, { status: 1 }, {}, {});
            res.json({ status: 1, response });
        } catch (error) {
            console.log(`error in router['get_jobs'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['contactus_details'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let obj = {};
            obj['name'] = get(req.body, 'name', '');
            obj['email'] = get(req.body, 'email', '');
            obj['phone'] = get(req.body, 'phone', '');
            obj['subject'] = get(req.body, 'subject', '');
            obj['message'] = get(req.body, 'message', '');
            obj['status'] = 1;
            obj['time_stamps'] = Number(new Date());
            let added = await InsertDoc(contact_us, obj);
            if (added && added._id) {
                ins_notification({ type: 'contact_us', action: 'contact_us', message: `Hi, ${obj['name']} submitted the contact us form `, name: obj['name'] });
                res.json({ status: 1, response: 'Form submitted successfully' });
            } else {
                res.json({ status: 0, response: 'Form not submitted' });
            }
        } catch (error) {
            console.log(`error in router['contactus_details'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['apply_jobs'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let obj = {};
            if (req.files && req.files.docs && String(req.files.docs) !== String("undefined") && req.files.docs.length > 0 && checkArray(req.files.docs)) {
                if (req.files.avatar.length > 0) {
                    obj['docs'] = get_attachment(req.files.docs[0].destination, req.files.docs[0].filename);
                }
            } else {
                return res.json({ status: 0, response: 'Document is required' });
            }
            if (!isObjectId(get(req.body, 'jobs_id', ''))) {
                return res.json({ status: 0, response: 'Job title is required' });
            }
            if (!isObjectId(get(req.body, 'category_id', ''))) {
                return res.json({ status: 0, response: 'category is required' });
            }
            obj['name'] = get(req.body, 'name', '');
            obj['email'] = get(req.body, 'email', '');
            obj['phone'] = get(req.body, 'phone', '');
            obj['qualification'] = get(req.body, 'qualification', '');
            obj['message'] = get(req.body, 'message', '');
            obj['status'] = 1;
            obj['time_stamps'] = Number(new Date());
            obj['jobs_id'] = ObjectId(get(req.body, 'jobs_id', ''));
            obj['category_id'] = ObjectId(get(req.body, 'category_id', ''));
            let added = await InsertDoc(applied_jobs, obj);
            if (added && added._id) {
                res.json({ status: 1, response: 'Form submitted successfully' });
                ins_notification({ type: 'applied_jobs', action: 'applied_jobs', message: `Hi, ${obj['name']} apllied for the job`, name: obj['name'] });
                update_job_details({ _id: ObjectId(added._id), jobs_id: ObjectId(req.body.jobs_id) });
                update_category_details({ _id: ObjectId(added._id), category_id: ObjectId(req.body.category_id) });
            } else {
                res.json({ status: 0, response: 'Form not submitted' });
            }
        } catch (error) {
            console.log(`error in router['apply_jobs'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['appointments_details'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let obj = {};
            if (!isObjectId(get(req.body, 'department_id', ''))) {
                return res.json({ status: 0, response: 'Department is required' });
            }
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
            let added = await InsertDoc(appointments, obj);
            if (added && added._id) {
                res.json({ status: 1, response: 'Form submitted successfully' });
                ins_notification({ type: 'appointments', action: 'appointments', message: `Hi, ${obj['name']} submitted the appointment form`, name: obj['name'] });
                update_department_details({ _id: ObjectId(added._id), department_id: ObjectId(req.body.department_id) });
            } else {
                res.json({ status: 0, response: 'Form not submitted' });
            }
        } catch (error) {
            console.log(`error in router['appointments_details'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    return router;
};
