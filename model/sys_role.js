const Sequelize = require('sequelize');
const sequelize = require('./../db/sequelize');

/**
 * 权限
 */
module.exports = sequelize.define('sys_role',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        // 角色名称
        name: {
            type: Sequelize.STRING
        },
        // 类型
        type: {
            type: Sequelize.INTEGER
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