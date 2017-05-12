const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');
const Router = require('koa-router');
const router = new Router();

app
  .use(serve('../client'))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
