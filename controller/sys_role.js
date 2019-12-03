const actions = require('../config/actions');
const {response_success, response_none} = require('../tools/handle_response');
const Role = require('../model/sys_role');

module.exports = async (ctx) => {
    const action = ctx.params.action;
    switch (action) {
        case actions.FIND:
            return response_success(await Role.findAll());
        default:
            return response_none();
    }

};