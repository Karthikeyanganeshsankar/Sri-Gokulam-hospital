let { isObjectId, ObjectId, error_msg, UpdateDoc, GetAggregationDoc, checkArray,
    DeleteDoccs } = require("../../model/mongodb");
let notification = 'notification';
const { get } = require('lodash'), { validationResult } = require('express-validator');

module.exports = () => {
    let router = {};

    router['markas_read'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let _id = get(req.body, '_id', false);
            if (isObjectId(_id)) {
                let update = await UpdateDoc(notification, { _id: ObjectId(_id) }, { readingStatus: 1 }, {});
                if (update && update.nModified !== 0) {
                    res.json({ status: 1, response: 'Readed successfully' });
                } else {
                    res.json({ status: 0, response: 'Not Readed' });
                }
            } else {
                return res.json({ status: 0, response: 'Id is not a valid id' });
            }
        } catch (error) {
            console.log(`error in router['markas_read'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    router['mark_as_unread'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let _id = get(req.body, '_id', false);
            if (isObjectId(_id)) {
                let update = await UpdateDoc(notification, { _id: ObjectId(_id) }, { readingStatus: 0 }, {});
                if (update && update.nModified !== 0) {
                    res.json({ status: 1, response: 'Un read successfully' });
                } else {
                    res.json({ status: 0, response: 'Not Un read' });
                }
            } else {
                return res.json({ status: 0, response: 'Id is not a valid id' });
            }
        } catch (error) {
            console.log(`error in router['mark_as_unread'] ${error}`)
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
                let update = await DeleteDoccs(notification, { _id: ObjectId(_id) });
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
                sort = {}, query = [];
            sort['createdAt'] = -1;
            query.push(
                { $match: { status: 1 } },
                { $sort: sort },
                { $skip: Number(skip) },
                { $limit: Number(limit) },
                {
                    $project: {
                        _id: 1,
                        type: 1,
                        action: 1,
                        message: 1,
                        status: 1,
                        createdAt: { $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } }
                    }
                }
            );
            const finalquery = [
                {
                    $facet: {
                        count: [
                            { $count: 'all' }
                        ],
                        unread: [
                            { $match: { readingStatus: 0 } },
                            { $count: 'unread' }
                        ],
                        documentdata: query
                    }
                }
            ];
            let list = await GetAggregationDoc(notification, finalquery);
            if (list && checkArray(list) && list.length > 0) {
                let fullcount = get(list, '0.count.0.all', 0);
                let unread = get(list, '0.unread.0.unread', 0);
                let data = get(list, '0.documentdata', []);
                let length = data.length || 0;
                let result = data;
                res.json({ status: 1, response: { fullcount, unread, length, result } })
            } else {
                res.json({ status: 0, response: 'No dats found' });
            }
        } catch (error) {
            console.log(`error in router['list'] ${error}`)
            return res.json({ status: 0, response: error_msg });
        }
    };

    return router;
};
