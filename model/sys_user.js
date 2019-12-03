const Sequelize = require('sequelize');
const sequelize = require('./../db/sequelize');

/**
 * 用户
 */
module.exports = sequelize.define('sys_user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        // 用户名
        username: {
            type: Sequelize.STRING
        },
        // 电话
        telephone: {
            type: Sequelize.STRING
        },
        // 邮箱
        mail: {
            type: Sequelize.STRING
        },
        // 密码
        password: {
            type: Sequelize.STRING
        },
        dept_id: {
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