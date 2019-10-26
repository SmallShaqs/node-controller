import Router from "koa-router";
import nodeController from "../controllers/node.controller";
import logger from "../client/logger";

const router = new Router();

router.get("/api/node", async ctx => {
  logger.info('/api/node request received')

  const result = await nodeController.getConnectedDevices();

  logger.info(`/api/node nodes: ${result}`)
  ctx.body = result;
});

export default router;
