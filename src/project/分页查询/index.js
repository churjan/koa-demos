const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const app = new Koa();
const router = new Router();
async function delayer(time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
const list = [
  { id: 1, name: 'user1' },
  { id: 2, name: 'user2' },
  { id: 3, name: 'user3' },
  { id: 4, name: 'user4' },
  { id: 5, name: 'user5' },
  { id: 6, name: 'user6' },
  { id: 7, name: 'user7' },
  { id: 8, name: 'user8' },
  { id: 9, name: 'user9' },
  { id: 10, name: 'user10' },
  { id: 11, name: 'user11' },
  { id: 12, name: 'user12' },
  { id: 13, name: 'user13' },
  { id: 14, name: 'user14' },
  { id: 15, name: 'user15' },
  { id: 16, name: 'user16' },
  { id: 17, name: 'user17' },
  { id: 18, name: 'user18' },
  { id: 19, name: 'user19' },
  { id: 20, name: 'user20' },
  { id: 31, name: 'user31' },
  { id: 32, name: 'user32' },
  { id: 33, name: 'user33' },
  { id: 34, name: 'user34' },
  { id: 35, name: 'user35' },
  { id: 36, name: 'user36' },
  { id: 37, name: 'user37' },
  { id: 38, name: 'user38' },
  { id: 39, name: 'user39' },
  { id: 40, name: 'user40' },
  { id: 41, name: 'user41' },
  { id: 42, name: 'user42' },
];
router.get('/pageList', async (ctx) => {
  const { pageSize, pageNum } = ctx.request.query;
  if (!pageSize || !pageNum) {
    ctx.response.body = {
      status: 200,
      message: 'success',
      list,
    };
  } else {
    const startIndex = (pageNum - 1) * pageSize;
    const endIndex = pageNum * pageSize;
    const result = list.slice(startIndex, endIndex);
    await delayer(3000);
    ctx.response.body = {
      status: 200,
      message: 'success',
      list: result,
      pageList: {
        pageSize: Number(pageSize),
        pageNum: Number(pageNum),
        total: Number(list.length),
      },
    };
  }
});
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
