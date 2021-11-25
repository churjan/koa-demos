const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.response.body = 'Hello World';
});
router.get('/about', (ctx) => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
