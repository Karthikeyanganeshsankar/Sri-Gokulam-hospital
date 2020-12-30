let { isObjectId, ObjectId, error_msg, InsertDoc, UpdateDoc, checkArray,
    DeleteDoccs, GetOneDoc, GetDocs, UpdateManyDoc, GetAggregationDoc } = require("../../model/mongodb");
let department = 'department', appointments = 'appointments';
const { get } = require('lodash'), { validationResult } = require('express-validator'), { Parser } = require("json2csv");

module.exports = () => {
    let router = {};

    const update_jobs = async (req) => {
        try {
            if (req && req._id && isObjectId(req._id)) {
                let get_data = await GetOneDoc(department, { _id: ObjectId(req._id) }, {}, {});
                if (get_data && get_data._id) {
                    let obj = {};
                    obj['department_name'] = get(get_data, 'name', '');
                    let update = await UpdateManyDoc(appointments, { department_id: ObjectId(req._id) }, obj, { multi: true });
                    console.log(`Data not found in const update_jobs ${update}`)
                    return true;
                } else {
                    console.log(`Data not found in const update_jobs`)
                    return true;
                }
            } else {
                console.log(`Data missing in const update_jobs ${req}`)
                return true;
            }
        } catch (error) {
            console.log(`error in const update_jobs ${error}`)
            return true;
        }
    };

    router['add'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let status = get(req.body, 'status', ''), added_by = get(req.params, 'loginId', false),
                name = get(req.body, 'name', ''), _id = get(req.body, '_id', false);
            if (!isObjectId(added_by)) {
                return res.json({ status: "00", response: "Unauthorized Access" });
            }
            let obj = {};
            obj['name'] = name;
            obj['added_by'] = ObjectId(added_by);
            obj['status'] = Number(status);
            if (_id && isObjectId(_id)) {
                let check_username = await GetDocs(department, { _id: { $ne: ObjectId(_id) }, name: obj['name'] }, {}, {});
                if (check_username && check_username.length > 0) {
                    return res.json({ status: 0, response: 'Name already exists' });
                }
                let updaqte = await UpdateDoc(department, { _id: ObjectId(_id) }, obj, { multi: true });
                if (updaqte && updaqte.nModified !== 0) {
                    res.json({ status: 1, response: 'Department updated successfully' });
                    update_jobs({ _id: _id });
                } else {
                    res.json({ status: 0, response: 'Department not updated' });
                }
            } else {
                obj['time_stamps'] = Number(new Date());
                let check_username = await GetDocs(department, { name: obj['name'] }, {}, {});
                if (check_username && check_username.length > 0) {
                    return res.json({ status: 0, response: 'Name already exists' });
                }
                let insert = await InsertDoc(department, obj);
                if (insert && insert._id) {
                    res.json({ status: 1, response: 'Department added successfully' });
                } else {
                    res.json({ status: 0, response: 'Department not added' });
                }
            }
        } catch (error) {
            console.log(`error in router['add'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['edit'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let _id = get(req.body, '_id', false);
            if (isObjectId(_id)) {
                let response = await GetOneDoc(department, { _id: ObjectId(_id) }, {}, {});
                return res.json({ status: 1, response });
            } else {
                return res.json({ status: 0, response: 'Id is not a valid id' });
            }
        } catch (error) {
            console.log(`error in router['edit'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['delete'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let _id = get(req.body, '_id', false);
            if (isObjectId(_id)) {
                let get_data = await GetOneDoc(department, { _id: ObjectId(_id) }, {}, {});
                if (get_data && get_data._id) {
                    let obj = {};
                    obj['old_status'] = Number(get_data.status);
                    obj['status'] = Number(0);
                    let update = await UpdateDoc(department, { _id: ObjectId(_id) }, obj, {});
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
            console.log(`error in router['delete'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['restore'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let _id = get(req.body, '_id', false);
            if (isObjectId(_id)) {
                let get_data = await GetOneDoc(department, { _id: ObjectId(_id) }, {}, {});
                if (get_data && get_data._id) {
                    let obj = {};
                    obj['old_status'] = Number(0);
                    obj['status'] = Number(get_data.old_status);
                    let update = await UpdateDoc(department, { _id: ObjectId(_id) }, obj, {});
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
            console.log(`error in router['restore'] ${error}`)
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
                let update = await DeleteDoccs(department, { _id: ObjectId(_id) });
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
                sort['name'] = -1;
            }
            if (search) {
                query.push({ $match: { $or: [{ name: { $regex: search + ".*", $options: "si" } }] } });
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
            let list = await GetAggregationDoc(department, finalquery);
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
                sort['name'] = -1;
            }
            if (search) {
                query.push({ $match: { $or: [{ name: { $regex: search + ".*", $options: "si" } }] } });
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
                        status: 1,
                        createdAt: { $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } }
                    }
                }
            );
            let list = await GetAggregationDoc(department, query);
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
                sort['name'] = -1;
            }
            if (search) {
                query.push({ $match: { $or: [{ name: { $regex: search + ".*", $options: "si" } }] } });
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
                        status: 1,
                        createdAt: { $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } }
                    }
                }
            );
            let list = await GetAggregationDoc(department, query);
            if (list && checkArray(list) && list.length > 0) {
                let fieldNames = ["Created On", "Department", "Status"],
                    finaldata = list.map((item) => {
                        return {
                            "Created On": item.createdAt,
                            "Department": item.name,
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
