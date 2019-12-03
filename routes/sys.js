const router = require('koa-router')();
const fs = require('fs');
const path = require('path');

const control_map = fs
    .readdirSync(path.join(__dirname, '../controller'))
    .reduce((obj, file) => {
        const modal_name = path.basename(file, '.js');
        return Object.assign(obj, {[modal_name]: require('../controller/' + file)})
    }, {});

router.prefix('/admin');

function getController({module}) {
    const control_modal = control_map[module];
    return control_modal || control_map.err_404;
}

router.all('/:module/:action', async (ctx) => {
    ctx.body = await getController(ctx.params)(ctx);
});

module.exports = router;


