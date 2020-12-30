let { isObjectId, ObjectId, error_msg, InsertDoc, UpdateDoc,
    GetOneDoc, GetDocs } = require("../../model/mongodb");
let settings = 'settings';
const { get } = require('lodash'), { validationResult } = require('express-validator');

module.exports = () => {
    let router = {};

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
    }

    router['update_general_settings_data'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let _id = get(req.body, '_id', false);
            let obj = {};
            obj['alias'] = req.body.alias;
            obj['settings'] = req.body.settings;
            if (_id && isObjectId(_id)) {
                let updaqte = await UpdateDoc(settings, { _id: ObjectId(_id) }, obj, { multi: true });
                if (updaqte && updaqte.nModified !== 0) {
                    res.json({ status: 1, response: 'Settings updated successfully' });
                } else {
                    res.json({ status: 0, response: 'Settings not updated' });
                }
            } else {
                let check = await GetDocs(settings, { alias: obj['alias'] }, {}, {});
                if (check && check.length > 0) {
                    let updaqte = await UpdateDoc(settings, { _id: check[0]._id }, obj, { multi: true });
                    if (updaqte && updaqte.nModified !== 0) {
                        res.json({ status: 1, response: 'Settings updated successfully' });
                    } else {
                        res.json({ status: 0, response: 'Settings not updated' });
                    }
                } else {
                    let insert = await InsertDoc(settings, obj);
                    if (insert && insert._id) {
                        res.json({ status: 1, response: 'Settings updated successfully' });
                    } else {
                        res.json({ status: 0, response: 'Settings not updated' });
                    }
                }
            }
        } catch (error) {
            console.log(`error in router['general_settings_data'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    return router;
};
