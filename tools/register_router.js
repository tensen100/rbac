const fs = require('fs');
const path = require('path');
/**
 * 注册路由
 * @param app
 */
module.exports = function (app) {
    const dir_url = path.join(__dirname, '../routes');
    fs.readdirSync(dir_url).forEach( file => {
        const file_url = path.join(dir_url, file);
        const route = require(file_url);
        app.use(route.routes(), route.allowedMethods());
    });
};