import * as dotenv from "dotenv";

import Koa from "koa";
import koaBody from "koa-body";

import routes from './routes/node.routes'

dotenv.config();

const app = new Koa();
const port = process.env.PORT || 3000;

app.use(koaBody());
app.use(routes.routes());

app.listen(port, () => console.log(`App listening on port ${port}!`));
