import Router from "koa-router";
import logController from "../controllers/log.controller";

const router = new Router();

router.get("/api/log", async ctx => {
  await logController.logToDataDog();
  ctx.body = {};
});

export default router;
