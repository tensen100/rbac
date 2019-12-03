const router = require('koa-router')();
const lotteryController = require('../controller/lottery');


router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
});

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
});

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
});


router.get('/lottery/:operator', async (ctx, next) => {
    ctx.body = await lotteryController(ctx)
});

module.exports = router;
