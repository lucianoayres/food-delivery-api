import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./apiDoc.js";

//swaggerUi.serveWithOptions({ customSiteTitle: "Hello World!" });

const router = express.Router();

// swaggerUI custom options
// https://www.npmjs.com/package/swagger-ui-express
var options = {
  explorer: true,
  customSiteTitle: "Delivery API Doc",
  customCss: ".swagger-ui .topbar { display: none }",
};

// add Swagger API Doc Page
router.use("/doc", swaggerUi.serve);
router.get("/doc", swaggerUi.setup(swaggerDocument, options));

// "catch all" error handling
router.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
  logger.error(`${err.code}: ${err.message}`);
});

export default router;
