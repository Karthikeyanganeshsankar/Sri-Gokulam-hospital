let { isObjectId, ObjectId, error_msg, InsertDoc, UpdateDoc, checkArray, GetAggregationDoc,
    DeleteDoccs, GetOneDoc, GetDocs, validPassword, jwtSign } = require("../../model/mongodb");
let administrators = 'administrators', settings = 'settings';
const bcrypt = require("bcrypt-nodejs"), { get, set } = require('lodash'),
    { validationResult } = require('express-validator'), { Parser } = require("json2csv");

module.exports = () => {
    let router = {};

    router['insert_new_data'] = async (req, res) => {
        try {
            let obj = {};
            obj['username'] = 'admin';
            obj['email'] = 'admin@srigokulamhospital.com';
            obj['password'] = bcrypt.hashSync('gok@hos@2020@', bcrypt.genSaltSync(8), null);
            obj['name'] = 'Sri Gokulam';
            obj['role'] = 'admin';
            obj['status'] = 1;
            obj['phone'] = '';
            obj['tel'] = '04272338800';
            let check = await GetDocs(administrators, { $or: [{ username: obj['username'] }, { email: obj['email'] }] }, {}, {});
            if (check && check.length > 0) {
                let updaqte = await UpdateDoc(administrators, { _id: check[0]._id }, obj, { multi: true });
                if (updaqte && updaqte.nModified !== 0) {
                    res.json({ status: 1, response: 'Admin updated successfully' });
                } else {
                    res.json({ status: 0, response: 'Admin not updated' });
                }
            } else {
                obj['time_stamps'] = Number(new Date());
                let insert = await InsertDoc(administrators, obj);
                if (insert && insert._id) {
                    res.json({ status: 1, response: 'Admin added successfully' });
                } else {
                    res.json({ status: 0, response: 'Admin not added' });
                }
            }
        } catch (error) {
            console.log(`error in router['insert_new_data'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['general_settings_data'] = async (req, res) => {
        try {
            let obj = {};
            obj['alias'] = 'general';
            obj['settings'] = {
                site_title: 'Sri Gokulam Hospital',
                site_email: 'admin@srigokulamhospital.com',
                site_url: 'https://srigokulamhospital.com/',
                site_logo: 'uploads/images/settings/gokulam.png'
            };
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
                    res.json({ status: 1, response: 'Settings added successfully' });
                } else {
                    res.json({ status: 0, response: 'Settings not added' });
                }
            }
        } catch (error) {
            console.log(`error in router['general_settings_data'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['seo_settings_data'] = async (req, res) => {
        try {
            let obj = {};
            obj['alias'] = 'seo';
            obj['settings'] = {
                seo_title: 'Sri Gokulam Hospital',
                seo_keyword: 'Sri Gokulam Hospital',
                seo_description: 'SUPER SPECIALITY HOSPITAL WITH COMMITMENT , COMPASSION AND CARE',
                og_image: 'uploads/images/settings/gokulam.png'
            };
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
                    res.json({ status: 1, response: 'Settings added successfully' });
                } else {
                    res.json({ status: 0, response: 'Settings not added' });
                }
            }
        } catch (error) {
            console.log(`error in router['seo_settings_data'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['smtp_settings_data'] = async (req, res) => {
        try {
            let obj = {};
            obj['alias'] = 'smtp';
            obj['settings'] = {
                smtp_host: '',
                smtp_port: '',
                smtp_email: '',
                smtp_password: ''
            };
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
                    res.json({ status: 1, response: 'Settings added successfully' });
                } else {
                    res.json({ status: 0, response: 'Settings not added' });
                }
            }
        } catch (error) {
            console.log(`error in router['smtp_settings_data'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['login'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let email = get(req.body, 'email', false), password = get(req.body, 'password', false);
            if (!email) {
                return res.json({ status: 0, response: 'Email is required' });
            }
            if (!password) {
                return res.json({ status: 0, response: 'Password is required' });
            }
            let user_data = await GetOneDoc(administrators, { $or: [{ username: email }, { email: email }] }, {}, {});
            if (user_data && user_data._id) {
                if (validPassword(password, user_data.password)) {
                    if (+user_data.status === 1) {
                        let obj = {};
                        set(obj, 'activity.last_login', new Date());
                        let updated = await UpdateDoc(administrators, { _id: ObjectId(user_data._id) }, obj, {});
                        if (updated && updated.nModified !== 0) {
                            res.json({ status: 1, response: 'Login successfully', auth_token: jwtSign({ username: user_data.username, role: "admin" }) });
                        } else {
                            res.json({ status: 0, response: 'Invalid Credentials' });
                        }
                    } else {
                        res.json({ status: 0, response: 'Your account is currently inactivated, please contact main admin...!' });
                    }
                } else {
                    res.json({ status: 0, response: 'Invalid Credentials' });
                }
            } else {
                res.json({ status: 0, response: 'Invalid Credentials' });
            }
        } catch (error) {
            console.log(`error in router['login'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['logout'] = async (req, res) => {
        try {
            let loginId = get(req.params, 'loginId', false);
            if (!isObjectId(loginId)) {
                return res.json({ status: "00", response: "Unauthorized Access" });
            }
            let obj = {};
            set(obj, 'activity.last_logout', new Date());
            let updated = await UpdateDoc(administrators, { _id: ObjectId(loginId) }, obj, {});
            if (updated && updated.nModified !== 0) {
                res.json({ status: 1, response: 'logged out' });
            } else {
                res.json({ status: 0, response: 'Not logged out' });
            }
        } catch (error) {
            console.log(`error in router['logout'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['add_admin'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let username = get(req.body, 'username', ''), email = get(req.body, 'email', ''),
                password = get(req.body, 'password', ''), status = get(req.body, 'status', ''),
                name = get(req.body, 'name', ''), phone = get(req.body, 'phone', ''),
                tel = get(req.body, 'tel', ''), _id = get(req.body, '_id', false);
            let obj = {};
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
            if (_id && isObjectId(_id)) {
                let check_email = await GetDocs(administrators, { _id: { $ne: ObjectId(_id) }, email: obj['email'] }, {}, {});
                let check_username = await GetDocs(administrators, { _id: { $ne: ObjectId(_id) }, username: obj['username'] }, {}, {});
                if (check_email && check_email.length > 0) {
                    return res.json({ status: 0, response: 'Email already exists' });
                }
                if (check_username && check_username.length > 0) {
                    return res.json({ status: 0, response: 'Username already exists' });
                }
                let updaqte = await UpdateDoc(administrators, { _id: ObjectId(_id) }, obj, { multi: true });
                if (updaqte && updaqte.nModified !== 0) {
                    res.json({ status: 1, response: 'Admin updated successfully' });
                } else {
                    res.json({ status: 0, response: 'Admin not updated' });
                }
            } else {
                obj['time_stamps'] = Number(new Date());
                if (!password || password.length === 0) {
                    return res.json({ status: 0, response: 'Password is required' });
                }
                let check_email = await GetDocs(administrators, { email: obj['email'] }, {}, {});
                let check_username = await GetDocs(administrators, { username: obj['username'] }, {}, {});
                if (check_email && check_email.length > 0) {
                    return res.json({ status: 0, response: 'Email already exists' });
                }
                if (check_username && check_username.length > 0) {
                    return res.json({ status: 0, response: 'Username already exists' });
                }
                let insert = await InsertDoc(administrators, obj);
                if (insert && insert._id) {
                    res.json({ status: 1, response: 'Admin added successfully' });
                } else {
                    res.json({ status: 0, response: 'Admin not added' });
                }
            }
        } catch (error) {
            console.log(`error in router['add_admin'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['edit_admin'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let _id = get(req.body, '_id', false);
            if (isObjectId(_id)) {
                let response = await GetOneDoc(administrators, { _id: ObjectId(_id) }, { password: 0 }, {});
                return res.json({ status: 1, response });
            } else {
                return res.json({ status: 0, response: 'Id is not a valid id' });
            }
        } catch (error) {
            console.log(`error in router['edit_admin'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['delete_admin'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let _id = get(req.body, '_id', false);
            if (isObjectId(_id)) {
                let get_data = await GetOneDoc(administrators, { _id: ObjectId(_id) }, {}, {});
                if (get_data && get_data._id) {
                    let obj = {};
                    obj['old_status'] = Number(get_data.status);
                    obj['status'] = Number(0);
                    let update = await UpdateDoc(administrators, { _id: ObjectId(_id) }, obj, {});
                    if (update && update.nModified !== 0) {
                        res.json({ status: 1, response: 'Deleted successfully' });
                    } else {
                        res.json({ status: 0, response: 'Not deleted' });
                    }
                } else {
                    res.json({ status: 0, response: 'Not deleted' });
                }
            } else {
                return res.json({ status: 0, response: 'Id is not a valid id' });
            }
        } catch (error) {
            console.log(`error in router['delete_admin'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['restore_admin'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let _id = get(req.body, '_id', false);
            if (isObjectId(_id)) {
                let get_data = await GetOneDoc(administrators, { _id: ObjectId(_id) }, {}, {});
                if (get_data && get_data._id) {
                    let obj = {};
                    obj['old_status'] = Number(0);
                    obj['status'] = Number(get_data.old_status);
                    let update = await UpdateDoc(administrators, { _id: ObjectId(_id) }, obj, {});
                    if (update && update.nModified !== 0) {
                        res.json({ status: 1, response: 'Restored successfully' });
                    } else {
                        res.json({ status: 0, response: 'Not restore' });
                    }
                } else {
                    res.json({ status: 0, response: 'Not restore' });
                }
            } else {
                return res.json({ status: 0, response: 'Id is not a valid id' });
            }
        } catch (error) {
            console.log(`error in router['restore_admin'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['perm_del'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let _id = get(req.body, '_id', false);
            if (isObjectId(_id)) {
                let update = await DeleteDoccs(administrators, { _id: ObjectId(_id), username: { $ne: 'admin' } });
                if (update && update.deletedCount !== 0) {
                    res.json({ status: 1, response: 'Deleted successfully' });
                } else {
                    res.json({ status: 0, response: 'Not deleted' });
                }
            } else {
                return res.json({ status: 0, response: 'Id is not a valid id' });
            }
        } catch (error) {
            console.log(`error in router['perm_del'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['list'] = async (req, res) => {
        try {
            let skip = get(req.body, 'skip', 0), limit = get(req.body, 'limit', 25),
                field = get(req.body, 'field', false), order = get(req.body, 'order', false),
                search = get(req.body, 'search', false), status = get(req.body, 'status', false),
                sort = {}, query = [];
            if (field && order) {
                sort[field] = Number(order);
            } else {
                sort['createdAt'] = -1;
            }
            if (search) {
                query.push({ $match: { $or: [{ 'phone': { $regex: search + ".*", $options: "si" } }, { surname: { $regex: search + ".*", $options: "si" } }, { name: { $regex: search + ".*", $options: "si" } }, { email: { $regex: search + ".*", $options: "si" } }] } });
            }
            if (status) {
                query.push({ $match: { status: Number(status) } });
            } else {
                query.push({ $match: { status: { $in: [1, 2] } } });
            }
            query.push(
                { $match: { status: { $ne: 0 } } },
                { $sort: sort },
                { $skip: Number(skip) },
                { $limit: Number(limit) },
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        surname: 1,
                        email: 1,
                        phone: 1,
                        status: 1,
                        createdAt: { $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } }
                    }
                }
            );
            const finalquery = [
                {
                    $facet: {
                        count: [
                            { $match: { status: { $ne: 0 } } },
                            { $count: 'all' }
                        ],
                        active: [
                            { $match: { status: 1 } },
                            { $count: 'active' }
                        ],
                        inactive: [
                            { $match: { status: 2 } },
                            { $count: 'inactive' }
                        ],
                        documentdata: query
                    }
                }
            ];
            let list = await GetAggregationDoc(administrators, finalquery);
            if (list && checkArray(list) && list.length > 0) {
                let fullcount = get(list, '0.count.0.all', 0);
                let active = get(list, '0.active.0.active', 0);
                let inactive = get(list, '0.inactive.0.inactive', 0);
                let data = get(list, '0.documentdata', []);
                let length = data.length || 0;
                let result = data;
                res.json({ status: 1, response: { fullcount, active, inactive, length, result } })
            } else {
                res.json({ status: 0, response: 'No dats found' });
            }
        } catch (error) {
            console.log(`error in router['list'] ${error}`)
            return res.json({ status: 0, response: error_msg });
        }
    };

    router['del_list'] = async (req, res) => {
        try {
            let skip = get(req.body, 'skip', 0), limit = get(req.body, 'limit', 25),
                field = get(req.body, 'field', false), order = get(req.body, 'order', false),
                search = get(req.body, 'search', false), sort = {}, query = [];
            if (field && order) {
                sort[field] = Number(order);
            } else {
                sort['createdAt'] = -1;
            }
            if (search) {
                query.push({ $match: { $or: [{ 'phone': { $regex: search + ".*", $options: "si" } }, { surname: { $regex: search + ".*", $options: "si" } }, { name: { $regex: search + ".*", $options: "si" } }, { email: { $regex: search + ".*", $options: "si" } }] } });
            }
            query.push(
                { $match: { status: 0 } },
                { $sort: sort },
                { $skip: Number(skip) },
                { $limit: Number(limit) },
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        surname: 1,
                        email: 1,
                        phone: 1,
                        status: 1,
                        createdAt: { $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } }
                    }
                }
            );
            let list = await GetAggregationDoc(administrators, query);
            if (list && checkArray(list) && list.length > 0) {
                let length = list.length || 0;
                let result = list;
                res.json({ status: 1, response: { length, result } })
            } else {
                res.json({ status: 0, response: 'No dats found' });
            }
        } catch (error) {
            console.log(`error in router['del_list'] ${error}`)
            return res.json({ status: 0, response: error_msg });
        }
    };

    router['export'] = async (req, res) => {
        try {
            let skip = get(req.body, 'skip', 0), limit = get(req.body, 'limit', 25),
                field = get(req.body, 'field', false), order = get(req.body, 'order', false),
                search = get(req.body, 'search', false), status = get(req.body, 'status', false),
                sort = {}, query = [];
            if (field && order) {
                sort[field] = Number(order);
            } else {
                sort['createdAt'] = -1;
            }
            if (search) {
                query.push({ $match: { $or: [{ 'phone': { $regex: search + ".*", $options: "si" } }, { surname: { $regex: search + ".*", $options: "si" } }, { name: { $regex: search + ".*", $options: "si" } }, { email: { $regex: search + ".*", $options: "si" } }] } });
            }
            if (status) {
                query.push({ $match: { status: Number(status) } });
            } else {
                query.push({ $match: { status: { $in: [1, 2] } } });
            }
            query.push(
                { $match: { status: { $ne: 0 } } },
                { $sort: sort },
                { $skip: Number(skip) },
                { $limit: Number(limit) },
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        surname: 1,
                        email: 1,
                        phone: 1,
                        status: 1,
                        createdAt: { $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } }
                    }
                }
            );
            let list = await GetAggregationDoc(administrators, query);
            if (list && checkArray(list) && list.length > 0) {
                let fieldNames = ["Created On", "Name", "Surname", "E-mail", "Phone", "Status"],
                    finaldata = list.map((item) => {
                        return {
                            "Created On": item.createdAt,
                            "Name": item.name,
                            "Surname": item.surname,
                            "E-mail": item.email,
                            "Phone": item.phone,
                            "Status": +item.status === 1 ? 'Active' : 'In-Active'
                        }
                    }),
                    { parse } = new Parser({ fieldNames }),
                    csv = parse(finaldata);
                if (csv) {
                    res.json({ status: 1, response: csv });
                } else {
                    res.json({ status: 0, response: 'Export Failed' });
                }
            } else {
                res.json({ status: 0, response: 'No dats found' });
            }
        } catch (error) {
            console.log(`error in router['export'] ${error}`)
            return res.json({ status: 0, response: error_msg });
        }
    };

    return router;
};
