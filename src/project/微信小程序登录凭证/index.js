const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();
const koaBody = require('koa-body');
const axios = require('axios');

router.post('/login', async (ctx) => {
  const { code } = ctx.request.body;
  await axios
    .get('https://api.weixin.qq.com/sns/jscode2session', {
      params: {
        appid: 'wxbe1ff0728af59d17',
        secret: '7eec38a0d7a5163a22659fd5aab64923',
        js_code: code,
        grant_type: 'authorization_code',
      },
    })
    .then(({ data }) => {
      ctx.response.body = data;
    });
});

app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
