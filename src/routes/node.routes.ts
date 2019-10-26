import Router from "koa-router"; 
import nodeController from '../controllers/node.controller'

const router = new Router();

router.get("/api/node", async ctx => {
  const result = await nodeController.getConnectedDevices(process.env.RESOURCE_GROUP);
  ctx.body = result;
});

export default router;