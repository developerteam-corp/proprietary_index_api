import emailTemplate from "../controllers/emailTemplate";
import auth from "../middleware/auth";

export default app => {
  app.route("/emailTemplate/createEmailTemplate").post(auth.requiresAdmin, emailTemplate.createEmailTemplate);

  app.route("/emailTemplate/listEmailTemplates").get(auth.requiresAdmin, emailTemplate.listEmailTemplates);

  app.route("/emailTemplate/updateEmailTemplate").put(auth.requiresAdmin, emailTemplate.updateEmailTemplate);

  app.route("/emailTemplate/deleteEmailTemplate/:mongoId").delete(auth.requiresAdmin, emailTemplate.deleteEmailTemplate);

  return app;
};
