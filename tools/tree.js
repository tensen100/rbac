const SEPARATOR = '.';

const ROOT = '0';

/**
 * 计算树形level
 * @param parent_level
 * @param parent_id
 */
function calculateLevel(parent_level, parent_id) {
    return parent_level ? [parent_level, parent_id].join(SEPARATOR) : ROOT
}


module.exports = {
    calculateLevel
};