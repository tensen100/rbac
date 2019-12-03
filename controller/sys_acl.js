const actions = require('../config/actions');
const {response_success, response_none} = require('../tools/handle_response');
const Acl = require('../model/sys_acl');

module.exports = async (ctx) => {
    const action = ctx.params.action;
    switch (action) {
        case actions.FIND:
            return response_success(await Acl.findAll());
        default:
            return response_none();
    }

};