const Sequelize = require('sequelize');
const sequelize = require('./../db/sequelize');

/**
 * 权限
 */
module.exports = sequelize.define('sys_dept',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        // 部门名称
        name: {
            type: Sequelize.STRING
        },
        level: {
            type: Sequelize.STRING
        },
        // 所属模块id
        parent_id: {
            type: Sequelize.INTEGER
        },
        // 当前部门下的排序
        seq: {
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