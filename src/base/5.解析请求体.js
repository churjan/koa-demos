const Koa = require('koa');
const Router = require('@koa/router');
const koaBody = require('koa-body');
const app = new Koa();
const router = new Router();

router.post('/', (ctx) => {
  ctx.response.body = ctx.request.body;
});
app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
