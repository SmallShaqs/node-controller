import * as dotenv from "dotenv";
dotenv.config();

import Koa from "koa";
import koaBody from "koa-body";

import nodeRouter from './routes/node.routes'

const app = new Koa();
const port = process.env.PORT || 3000;

app.use(koaBody());
app.use(nodeRouter.routes());

app.listen(port, () => console.log(`App listening on port ${port}!`));
