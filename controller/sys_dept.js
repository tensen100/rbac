const actions = require('../config/actions');
const Dept = require('../service/dept');
const {response_none} = require('../tools/handle_response');


module.exports = async (ctx) => {
    const action = ctx.params.action;
    const params = {...ctx.request.body, ...ctx.query};
    switch (action) {
        case actions.FIND:
            return await Dept.find(params);
        case actions.CREATE:
            return await Dept.create(params);
        case actions.UPDATE:
            return await Dept.update(params);
        case actions.DESTROY:
            return await Dept.destroy(params);
        default:
            return response_none(action);
    }
};