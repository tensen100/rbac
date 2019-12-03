const Sequelize = require('sequelize');
const sequelize = require('./../db/sequelize');

/**
 * 权限
 */
module.exports = sequelize.define('sys_acl',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        // 权限码
        code: {
            type: Sequelize.INTEGER,
        },
        // 权限名称
        name: {
            type: Sequelize.STRING
        },
        // 所属模块id
        acl_module_id: {
            type: Sequelize.INTEGER
        },
        // 当前模块下的顺序
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