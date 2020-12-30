let { isObjectId, ObjectId, error_msg, UpdateDoc, GetAggregationDoc, checkArray,
    DeleteDoccs, GetOneDoc } = require("../../model/mongodb");
let applied_jobs = 'applied_jobs';
const { get } = require('lodash'), { validationResult } = require('express-validator'), { Parser } = require("json2csv");

module.exports = () => {
    let router = {};

    router['edit'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let _id = get(req.body, '_id', false);
            if (isObjectId(_id)) {
                let response = await GetOneDoc(applied_jobs, { _id: ObjectId(_id) }, {}, {});
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
                let get_data = await GetOneDoc(applied_jobs, { _id: ObjectId(_id) }, {}, {});
                if (get_data && get_data._id) {
                    let obj = {};
                    obj['old_status'] = Number(get_data.status);
                    obj['status'] = Number(0);
                    let update = await UpdateDoc(applied_jobs, { _id: ObjectId(_id) }, obj, {});
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
                let get_data = await GetOneDoc(applied_jobs, { _id: ObjectId(_id) }, {}, {});
                if (get_data && get_data._id) {
                    let obj = {};
                    obj['old_status'] = Number(0);
                    obj['status'] = Number(get_data.old_status);
                    let update = await UpdateDoc(applied_jobs, { _id: ObjectId(_id) }, obj, {});
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
                let update = await DeleteDoccs(applied_jobs, { _id: ObjectId(_id) });
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
                search = get(req.body, 'search', false), category_id = get(req.body, 'category_id', false),
                jobs_id = get(req.body, 'jobs_id', false),
                sort = {}, query = [];
            if (field && order) {
                sort[field] = Number(order);
            } else {
                sort['createdAt'] = -1;
            }
            if (search) {
                query.push({ $match: { $or: [{ 'jobs_data.name': { $regex: search + ".*", $options: "si" } }, { cat_name: { $regex: search + ".*", $options: "si" } }, { email: { $regex: search + ".*", $options: "si" } }, { phone: { $regex: search + ".*", $options: "si" } }, { name: { $regex: search + ".*", $options: "si" } }] } });
            }
            if (category_id && isObjectId(category_id)) {
                query.push({ $match: { category_id: ObjectId(category_id) } });
            }
            if (jobs_id && isObjectId(jobs_id)) {
                query.push({ $match: { jobs_id: ObjectId(jobs_id) } });
            }
            query.push(
                { $match: { status: 1 } },
                { $sort: sort },
                { $skip: Number(skip) },
                { $limit: Number(limit) },
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        email: 1,
                        phone: 1,
                        jobs_data: 1,
                        cat_name: 1,
                        docs: 1,
                        status: 1,
                        createdAt: { $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } }
                    }
                }
            );
            const finalquery = [
                {
                    $facet: {
                        count: [
                            { $match: { status: 1 } },
                            { $count: 'all' }
                        ],
                        documentdata: query
                    }
                }
            ];
            let list = await GetAggregationDoc(applied_jobs, finalquery);
            if (list && checkArray(list) && list.length > 0) {
                let fullcount = get(list, '0.count.0.all', 0);
                let data = get(list, '0.documentdata', []);
                let length = data.length || 0;
                let result = data;
                res.json({ status: 1, response: { fullcount, length, result } })
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
                query.push({ $match: { $or: [{ 'jobs_data.name': { $regex: search + ".*", $options: "si" } }, { cat_name: { $regex: search + ".*", $options: "si" } }, { email: { $regex: search + ".*", $options: "si" } }, { phone: { $regex: search + ".*", $options: "si" } }, { name: { $regex: search + ".*", $options: "si" } }] } });
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
                        email: 1,
                        phone: 1,
                        jobs_data: 1,
                        docs: 1,
                        status: 1,
                        createdAt: { $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } }
                    }
                }
            );
            let list = await GetAggregationDoc(applied_jobs, query);
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
                search = get(req.body, 'search', false), category_id = get(req.body, 'category_id', false),
                jobs_id = get(req.body, 'jobs_id', false),
                sort = {}, query = [];
            if (field && order) {
                sort[field] = Number(order);
            } else {
                sort['createdAt'] = -1;
            }
            if (search) {
                query.push({ $match: { $or: [{ 'jobs_data.name': { $regex: search + ".*", $options: "si" } }, { cat_name: { $regex: search + ".*", $options: "si" } }, { email: { $regex: search + ".*", $options: "si" } }, { phone: { $regex: search + ".*", $options: "si" } }, { name: { $regex: search + ".*", $options: "si" } }] } });
            }
            if (category_id && isObjectId(category_id)) {
                query.push({ $match: { category_id: ObjectId(category_id) } });
            }
            if (jobs_id && isObjectId(jobs_id)) {
                query.push({ $match: { jobs_id: ObjectId(jobs_id) } });
            }
            query.push(
                { $match: { status: 1 } },
                { $sort: sort },
                { $skip: Number(skip) },
                { $limit: Number(limit) },
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        email: 1,
                        phone: 1,
                        jobs_data: 1,
                        cat_name: 1,
                        docs: 1,
                        status: 1,
                        createdAt: { $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } }
                    }
                }
            );
            let list = await GetAggregationDoc(applied_jobs, query);
            if (list && checkArray(list) && list.length > 0) {
                let fieldNames = ["Created On", "Job Title", "Name", "E-mail"],
                    finaldata = list.map((item) => {
                        return {
                            "Created On": item.createdAt,
                            "Job Title": item.jobs_data && item.jobs_data.name ? item.jobs_data.name : '',
                            "Name": item.name,
                            "E-mail": item.email
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
