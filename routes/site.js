let { body } = require('express-validator'), { commonUpload } = require('../model/middlewares');
module.exports = (app, io) => {
  try {
    const site = require("../controller/site/site")(app, io);

    app.post('/site/get/settings', [
      body('alias').not().isEmpty().withMessage('Alias is required')
    ], site['get_settings']);
    app.post('/site/get/department', site['get_department']);
    app.post('/site/get/category', site['get_category']);
    app.post('/site/get/jobs', site['get_jobs']);

    app.post('/site/submit/contactus/details', [
      body('name').not().isEmpty().withMessage('Name is required'),
      body('email').isEmail().withMessage('Email is required'),
      body('phone').not().isEmpty().withMessage('Phone is required'),
      body('subject').not().isEmpty().withMessage('Subject is required'),
      body('message').not().isEmpty().withMessage('Message is required')
    ], site['contactus_details']);

    app.post('/site/apply/jobs', [
      body('jobs_id').not().isEmpty().withMessage('Job title is required'),
      body('category_id').not().isEmpty().withMessage('category is required'),
      body('name').not().isEmpty().withMessage('Name is required'),
      body('email').isEmail().withMessage('Email is required'),
      body('phone').not().isEmpty().withMessage('Phone is required'),
      body('qualification').not().isEmpty().withMessage('Qualification is required'),
      body('message').not().isEmpty().withMessage('Message is required')
    ], commonUpload("./uploads/resume/").fields([{ name: "docs", maxCount: 1 }]), site['apply_jobs']);

    app.post('/site/submit/appointments/details', [
      body('department_id').not().isEmpty().withMessage('Department is required'),
      body('name').not().isEmpty().withMessage('Name is required'),
      body('email').isEmail().withMessage('Email is required'),
      body('age').not().isEmpty().withMessage('Age is required'),
      body('phone').not().isEmpty().withMessage('Phone is required'),
      body('gender').not().isEmpty().withMessage('Gender is required'),
      body('time').not().isEmpty().withMessage('Time is required'),
      body('appointment_date').not().isEmpty().withMessage('Date is required')
    ], site['appointments_details']);
  } catch (e) {
    console.log("error in index.js--->>>>", e);
  }
};
