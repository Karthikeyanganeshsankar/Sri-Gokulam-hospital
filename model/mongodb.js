let { Types } = require('mongoose'),
    bcrypt = require("bcrypt-nodejs"),
    { sign } = require("jsonwebtoken"), { SECRET_KEY } = require("../config/config");

const administrators = require("../schema/administrators"),
    settings = require("../schema/settings"),
    department = require("../schema/department"),
    category = require("../schema/category"),
    contact_us = require("../schema/contactus"),
    appointments = require("../schema/appointment"),
    jobs = require("../schema/jobs"),
    applied_jobs = require("../schema/applied_jobs"),
    notification = require("../schema/notification");

const db = {
    administrators: administrators,
    settings: settings,
    department: department,
    category: category,
    contact_us: contact_us,
    appointments: appointments,
    jobs: jobs,
    applied_jobs: applied_jobs,
    notification: notification
};
// ------------------------------------------------------------------------------------------
const GetAggregationDoc = (model, query) => {
    return new Promise((resolve, reject) => {
        var aggregation = db[model].aggregate(query);
        aggregation.options = { allowDiskUse: true };
        aggregation.collation({ locale: 'en_US', caseLevel: true, caseFirst: 'upper' });
        aggregation.exec((err, docs) => {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
    });
};

const GetOneDoc = (model, query, projection, extension) => {
    const Query = db[model].findOne(query, projection, extension.options);
    return new Promise((resolve, reject) => {
        if (extension.populate) {
            Query.populate(extension.populate);
        }
        if (extension.sort) {
            Query.sort(extension.sort);
        }
        if (extension.skip) {
            Query.skip(extension.skip);
        }
        if (extension.limit) {
            Query.limit(extension.limit);
        }
        Query.exec((err, docs) => {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
    });
};

const GetDocs = (model, query, projection, extension) => {
    const Query = db[model].find(query, projection, extension.options);
    return new Promise((resolve, reject) => {
        if (extension.populate) {
            Query.populate(extension.populate);
        }
        if (extension.sort) {
            Query.sort(extension.sort);
        }
        if (extension.skip) {
            Query.skip(extension.skip);
        }
        if (extension.limit) {
            Query.limit(extension.limit);
        }
        Query.exec((err, docs) => {
            if (extension.count) {
                Query.countDocuments((err, docs) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(docs);
                    }
                });
            } else {
                if (err) {
                    reject(err);
                } else {
                    resolve(docs);
                }
            }
        });
    });
};

const UpdateDoc = (model, criteria, doc, options) => {
    return new Promise((resolve, reject) => {
        db[model].updateOne(criteria, doc, options, (err, docs) => {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
    });
};
const findOneandUpdateDoc = (model, criteria, doc, options) => {
    return new Promise((resolve, reject) => {
        db[model].findOneAndUpdate(criteria, doc, options, (err, docs) => {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
    });
};

const InsertDoc = (model, docs) => {
    const doc_obj = new db[model](docs);
    return new Promise((resolve, reject) => {
        doc_obj.save((err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

const UpdateManyDoc = (model, criteria, doc, options) => {
    return new Promise((resolve, reject) => {
        db[model].updateMany(criteria, doc, options, (err, docs) => {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
    });
};

const DeleteDoccs = (model, criteria) => {
    return new Promise((resolve, reject) => {
        db[model].deleteOne(criteria, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

const DeleteManyDoccs = (model, criteria) => {
    return new Promise((resolve, reject) => {
        db[model].deleteMany(criteria, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

const GetCountDocs = (model, conditions) => {
    return new Promise((resolve, reject) => {
        db[model].countDocuments(conditions, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

const InsertMultipleDocs = (model, docs) => {
    return new Promise((resolve, reject) => {
        db[model].insertMany(docs, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

const validPassword = (entered, bcrypted) => bcrypt.compareSync(entered, bcrypted);

const isObjectId = e => Types.ObjectId.isValid(e);

const ObjectId = e => Types.ObjectId(e);

const checkArray = e => Array.isArray(e);

const randomString = (length = 6) => {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};

let error_msg = 'Something went wrong';

let jwtSign = payload => sign(payload, SECRET_KEY, { expiresIn: "10h" });


module.exports = {
    findOneandUpdateDoc: findOneandUpdateDoc,
    GetAggregationDoc: GetAggregationDoc,
    GetOneDoc: GetOneDoc,
    GetDocs: GetDocs,
    UpdateDoc: UpdateDoc,
    InsertDoc: InsertDoc,
    DeleteDoccs: DeleteDoccs,
    UpdateManyDoc: UpdateManyDoc,
    DeleteManyDoccs: DeleteManyDoccs,
    InsertMultipleDocs: InsertMultipleDocs,
    GetCountDocs: GetCountDocs,
    validPassword: validPassword,
    isObjectId: isObjectId,
    ObjectId: ObjectId,
    checkArray: checkArray,
    randomString: randomString,
    error_msg: error_msg,
    jwtSign: jwtSign
};
