const actions = require('../config/actions');
const {response_success, response_none} = require('../tools/handle_response');
const User = require('../model/sys_user');

module.exports = async (ctx) => {
    const action = ctx.params.operate;
    switch (action) {
        case actions.FIND:
            return response_success(await User.findAll());
        default:
            return response_none();
    }

};