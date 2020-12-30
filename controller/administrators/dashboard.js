let { error_msg, GetAggregationDoc, GetCountDocs } = require("../../model/mongodb");
let contact_us = 'contact_us', appointments = 'appointments', applied_jobs = 'applied_jobs';
const { get } = require('lodash'), { validationResult } = require('express-validator');

module.exports = () => {
    let router = {};

    router['dashboard'] = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ status: 0, errors: errors.array() });
            }
            let sort = { 'createdAt': -1 }, skip = 0, limit = 5, today = new Date();
            let recent_jobs_query = [
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
            ];
            let recent_appointments_query = [
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
            ];
            let today_appointments_query = [
                { $match: { status: 1, appointment_date: today } },
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
            ];
            let recent_contactus_query = [
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
            ];
            let p1 = GetCountDocs(applied_jobs, { status: 1 }),
                p2 = GetCountDocs(appointments, { status: 1 }),
                p3 = GetCountDocs(contact_us, { status: 1 }),
                p4 = GetAggregationDoc(applied_jobs, recent_jobs_query),
                p5 = GetAggregationDoc(appointments, recent_appointments_query),
                p6 = GetAggregationDoc(contact_us, recent_contactus_query),
                p7 = GetAggregationDoc(contact_us, today_appointments_query);
            let get_all = await Promise.all([p1, p2, p3, p4, p5, p6, p7]);
            res.json({
                status: 1,
                response: {
                    total_applied_jobs: get(get_all, '0', 0),
                    total_appointments: get(get_all, '1', 0),
                    total_contact_us: get(get_all, '2', 0),
                    recent_applied_jobs: get(get_all, '3', []),
                    recent_appointments: get(get_all, '4', []),
                    recent_contact_us: get(get_all, '5', []),
                    today_appointments: get(get_all, '6', [])
                }
            });
        } catch (error) {
            console.log(`error in router['dashboard'] ${error}`)
            res.json({ status: 0, response: error_msg });
        }
    };

    return router;
};
