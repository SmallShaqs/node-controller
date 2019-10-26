import Router from "koa-router";

import logController from "../controllers/log.controller";
import logger from "../client/logger";

const router = new Router();

router.post("/", async ctx => {
  logger.info('/api/log request received')
  const nodes: Array<string> = ctx.request.body.nodes

  logger.debug(`Received nodes: ${nodes}`)  
  await logController.logToDataDog(nodes);

  ctx.body = {}
});

export default router;
