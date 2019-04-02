import BaseAPIController from "./BaseAPIController";
import db from "../models";
export class eventController extends BaseAPIController {
    createEvent = (req, res, next) => {
    db.event.create(req.body).then(data => {
      res.json({ error: 0, data: data });
    });
  };

//   listEvents = (req, res, next) => {
//     db.event.find({}).then(data => {
//       res.json({ error: 0, data: data });
//     });
//   };

//   updateEvent = (req, res, next) => {
//     db.event.update({ _id: req.body._id }, req.body).then(data => {
//       res.json({ error: 0, data: data });
//     });
//   };

//   deleteEvent = (req, res, next) => {
//     db.event.remove({ _id: req.params.mongoId }).then(data => {
//       res.json({ error: 0, data: data });
//     });
//   };
}

const controller = new eventController();
export default controller;
