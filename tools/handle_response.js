const CODE = require('../config/code');

function response_success(data, action) {
    return {
        code: CODE.SUCCESS,
        data: data,
        msg: [action,  'success !'].join(' ')
    }
}

function response_error(msg) {
    return {
        code: CODE.ERROR,
        msg: msg
    }
}

function response_none(action) {
    return {
        code: CODE.NONE,
            msg: 'no action: ' + action
    }
}

module.exports = {
    response_success,
    response_error,
    response_none
};