import templateStructure from "../controllers/templateStructure";
import auth from "../middleware/auth";

export default app => {
  app.route("/templateStructure/createTemplateStructure").post(auth.requiresAdmin, templateStructure.createTemplateStructure);

  app.route("/templateStructure/listTemplateStructures").get(auth.requiresAdmin, templateStructure.listTemplateStructures);

  app.route("/templateStructure/updateTemplateStructure").put(auth.requiresAdmin, templateStructure.updateTemplateStructure);

  app.route("/templateStructure/deleteTemplateStructure/:mongoId").delete(auth.requiresAdmin, templateStructure.deleteTemplateStructure);

  return app;
};
