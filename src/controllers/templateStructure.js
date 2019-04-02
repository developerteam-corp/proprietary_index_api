import BaseAPIController from "./BaseAPIController";
import db from "../models";
export class templateStructureController extends BaseAPIController {
  createTemplateStructure = (req, res, next) => {
    if (!req.body.templateColumns) {
      req.body.templateColumns = [
        { name: "Name of Note" },
        { name: "Request ISIN", type: "email" },
        { name: "Send email to Directors", type: "email" },
        { name: "Documents", type: "document" },
        { name: "Calendar", type: "calender" },
        { name: "Submissions", type: "email" },
        { name: "Status" }
      ];
    }
    req.body.userId = req.user._id;
    db.templateStructure.create(req.body).then(data => {
      res.json({ error: 0, data: data });
    });
  };

  listTemplateStructures = (req, res, next) => {
    db.templateStructure.find({ userId: req.user._id }).then(data => {
      res.json({ error: 0, data: data });
    });
  };

  updateTemplateStructure = (req, res, next) => {
    db.templateStructure.update({ _id: req.body._id }, req.body).then(data => {
      res.json({ error: 0, data: data });
    });
  };

  deleteTemplateStructure = (req, res, next) => {
    db.templateStructure.remove({ _id: req.params.mongoId }).then(data => {
      res.json({ error: 0, data: data });
    });
  };
}

const controller = new templateStructureController();
export default controller;
