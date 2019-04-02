import BaseAPIController from "./BaseAPIController";
import db from "../models";
export class emailTemplateController extends BaseAPIController {
  createEmailTemplate = (req, res, next) => {
    db.emailTemplate.create(req.body).then(data => {
      res.json({ error: 0, data: data });
    });
  };

  listEmailTemplates = (req, res, next) => {
    db.emailTemplate.find({}).then(data => {
      res.json({ error: 0, data: data });
    });
  };

  updateEmailTemplate = (req, res, next) => {
    db.emailTemplate.update({ _id: req.body._id }, req.body).then(data => {
      res.json({ error: 0, data: data });
    });
  };

  deleteEmailTemplate = (req, res, next) => {
    db.emailTemplate.remove({ _id: req.params.mongoId }).then(data => {
      res.json({ error: 0, data: data });
    });
  };
}

const controller = new emailTemplateController();
export default controller;
