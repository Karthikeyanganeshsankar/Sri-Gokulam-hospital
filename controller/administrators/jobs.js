let { isObjectId, ObjectId, error_msg, InsertDoc, UpdateDoc, GetAggregationDoc, checkArray,
    DeleteDoccs, GetOneDoc } = require("../../model/mongodb");
let jobs = 'jobs', category = 'category', applied_jobs = 'applied_jobs';
const { get } = require('lodash'), { validationResult } = require('express-validator'), { Parser } = require("json2csv");

module.exports = () => {
    let router = {};

    let update_job_details_data = async (req) => {
        try {
            if (req && req._id && isObjectId(req._id)) {
                let get_data = await GetOneDoc(jobs, { _id: ObjectId(req._id) }, {}, {});
                if (get_data && get_data._id) {
                    let obj = {};
                    obj['jobs_data'] = {
                        name: get(get_data, 'name', ''),
                        designation: get(get_data, 'designation', '')
                    };
                    let update = await UpdateDoc(applied_jobs, { jobs_id: ObjectId(req._id) }, obj, {});
                    return true;
                } else {
                    console.log(`No datas found in let update_job_details_data ${req}`)
                    return true;
                }
            } else {
                console.log(`Required data in let update_job_details_data ${req}`)
                return true;
            }
        } catch (error) {
            console.log(`error in let update_job_details_data ${error}`)
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
                designation = get(req.body, 'designation', ''), _id = get(req.body, '_id', false),
                qualification = get(req.body, 'qualification', ''), no_of_vacancy = get(req.body, 'no_of_vacancy', ''),
                experience = get(req.body, 'experience', ''), key_skills = get(req.body, 'key_skills', ''),
                salary = get(req.body, 'salary', ''), posting_date = get(req.body, 'posting_date', ''),
                closing_date = get(req.body, 'closing_date', ''),
                category_id = get(req.body, 'category_id', false);
            if (!isObjectId(added_by)) {
                return res.json({ status: "00", response: "Unauthorized Access" });
            }
            if (!isObjectId(category_id)) {
                return res.json({ status: 0, response: "Category is required" });
            }
            let get_dept = await GetOneDoc(category, { _id: ObjectId(category_id) }, {}, {});
            let obj = {};
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
            if (_id && isObjectId(_id)) {
                let updaqte = await UpdateDoc(jobs, { _id: ObjectId(_id) }, obj, { multi: true });
                if (updaqte && updaqte.nModified !== 0) {
                    update_job_details_data({ _id: _id });
                    res.json({ status: 1, response: 'Jobs updated successfully' });
                } else {
                    res.json({ status: 0, response: 'Jobs not updated' });
                }
            } else {
                obj['time_stamps'] = Number(new Date());
                let insert = await InsertDoc(jobs, obj);
                if (insert && insert._id) {
                    res.json({ status: 1, response: 'Jobs added successfully' });
                } else {
                    res.json({ status: 0, response: 'Jobs not added' });
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
                let response = await GetOneDoc(jobs, { _id: ObjectId(_id) }, {}, {});
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
                let get_data = await GetOneDoc(jobs, { _id: ObjectId(_id) }, {}, {});
                if (get_data && get_data._id) {
                    let obj = {};
                    obj['old_status'] = Number(get_data.status);
                    obj['status'] = Number(0);
                    let update = await UpdateDoc(jobs, { _id: ObjectId(_id) }, obj, {});
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
                let get_data = await GetOneDoc(jobs, { _id: ObjectId(_id) }, {}, {});
                if (get_data && get_data._id) {
                    let obj = {};
                    obj['old_status'] = Number(0);
                    obj['status'] = Number(get_data.old_status);
                    let update = await UpdateDoc(jobs, { _id: ObjectId(_id) }, obj, {});
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
                let update = await DeleteDoccs(jobs, { _id: ObjectId(_id) });
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
                category_id = get(req.body, 'category_id', false),
                sort = {}, query = [];
            if (field && order) {
                sort[field] = Number(order);
            } else {
                sort['name'] = -1;
            }
            if (search) {
                query.push({ $match: { $or: [{ designation: { $regex: search + ".*", $options: "si" } }, { no_of_vacancy: { $regex: search + ".*", $options: "si" } }, { name: { $regex: search + ".*", $options: "si" } }] } });
            }
            if (category_id && isObjectId(category_id)) {
                query.push({ $match: { category_id: ObjectId(category_id) } });
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
                        designation: 1,
                        no_of_vacancy: 1,
                        posting_date: { $dateToString: { format: "%d-%m-%Y", date: "$posting_date" } },
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
            let list = await GetAggregationDoc(jobs, finalquery);
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
                query.push({ $match: { $or: [{ designation: { $regex: search + ".*", $options: "si" } }, { no_of_vacancy: { $regex: search + ".*", $options: "si" } }, { name: { $regex: search + ".*", $options: "si" } }] } });
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
            let list = await GetAggregationDoc(jobs, query);
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
                category_id = get(req.body, 'category_id', false),
                sort = {}, query = [];
            if (field && order) {
                sort[field] = Number(order);
            } else {
                sort['name'] = -1;
            }
            if (search) {
                query.push({ $match: { $or: [{ designation: { $regex: search + ".*", $options: "si" } }, { no_of_vacancy: { $regex: search + ".*", $options: "si" } }, { name: { $regex: search + ".*", $options: "si" } }] } });
            }
            if (category_id && isObjectId(category_id)) {
                query.push({ $match: { category_id: ObjectId(category_id) } });
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
                        designation: 1,
                        no_of_vacancy: 1,
                        posting_date: { $dateToString: { format: "%d-%m-%Y", date: "$posting_date" } },
                        createdAt: { $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } }
                    }
                }
            );
            let list = await GetAggregationDoc(jobs, query);
            if (list && checkArray(list) && list.length > 0) {
                let fieldNames = ["Created On", "Department", "Designation", "Number Of Vacancy", "Posted Date", "Status"],
                    finaldata = list.map((item) => {
                        return {
                            "Created On": item.createdAt,
                            "Department": item.name,
                            "Designation": item.designation,
                            "Number Of Vacancy": item.no_of_vacancy,
                            "Posted Date": item.posting_date,
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
