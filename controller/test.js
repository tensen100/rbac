module.exports = function(ctx) {
    const {params, query, request} = ctx;
    const {body} = request;
    return {
        params,
        query,
        body,
        ctx,
    }
};