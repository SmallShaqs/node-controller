import Router from "koa-router";
import nodeController from "../controllers/node.controller";

const router = new Router();

router.get("/api/node", async ctx => {
  console.log("Controller queried for nodes");
  const result = await nodeController.getConnectedDevices(
    process.env.RESOURCE_GROUP
  );
  console.log("Nodes: ", result);
  ctx.body = result;
});

export default router;
