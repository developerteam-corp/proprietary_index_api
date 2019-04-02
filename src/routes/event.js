import event from "../controllers/event";
import auth from "../middleware/auth";

export default app => {
  app.route("/event/createEvent").post(auth.requiresAdmin, event.createEvent);

//   app.route("/event/listEvents").get(auth.requiresAdmin, event.listEvents);

//   app.route("/event/updateEvent").put(auth.requiresAdmin, event.updateEvent);

//   app
//     .route("/event/deleteEvent/:mongoId")
//     .delete(auth.requiresAdmin, event.deleteEvent);

//   app
//     .route("/event/getEventByTemplateId/:templateId")
//     .get(auth.requiresAdmin, event.getEventByTemplateId);

  return app;
};
