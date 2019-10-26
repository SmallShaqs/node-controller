import * as dotenv from "dotenv";
dotenv.config();

import Koa from "koa";
import koaBody from "koa-body";
import koaRouter from "koa-router";

import nodeRouter from "./routes/node.routes";
import logRouter from "./routes/log.routes";

const app = new Koa();
const router = new koaRouter();

const port = process.env.PORT || 3000;

router
  .prefix("/api")
  .use("/log", logRouter.routes())
  .use("/node", nodeRouter.routes());
 

app
  .use(koaBody())
  .use(router.routes())
  .listen(port, () => console.log(`App listening on port ${port}!`));
