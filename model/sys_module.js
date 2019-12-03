const Sequelize = require('sequelize');
const sequelize = require('./../db/sequelize');

/**
 * 权限模块
 */
module.exports = sequelize.define('sys_acl_module',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        // 模块名称
        name: {
            type: Sequelize.STRING
        },
        // 上级模块id
        parent_id: {
            type: Sequelize.INTEGER
        },
        // 模块层级
        level: {
            type: Sequelize.STRING
        },
        // 当前层级的顺序
        seq: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.INTEGER
        },
        remark: {
            type: Sequelize.STRING,
        },
        operator: {
            type: Sequelize.STRING,
        },
        operator_time: {
            type: Sequelize.DATE,
            default: Sequelize.NOW
        },
        operator_ip: {
            type: Sequelize.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);