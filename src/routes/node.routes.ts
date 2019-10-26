import Router from "koa-router"; 
import nodeController from '../controllers/node.controller'

const router = new Router();

router.get("/api/node", async ctx => {
  const result = nodeController.getExample();
  ctx.body = result;
});

export default router;