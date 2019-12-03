const Dept = require('../model/sys_dept');
const actions = require('../config/actions');
const {response_error, response_success} = require('../tools/handle_response');
const {calculateLevel} = require('../tools/tree');
const {idIsExit} = require('../tools/value');

class DeptService {
    find() {
        return Dept.findAll().then(res => response_success(res));
    }

    async create(params) {
        const exit = await this.findOne({name: params.name, parent_id: params.parent_id});
        if(exit) {
            return response_error('同一层级下存在相同名称的部门')
        }
        params.level = await this.getLevel(params.parent_id);
        return Dept.create(params)
            .then(dept => dept.get({plain: true}))
            .then(res => response_success(res, actions.CREATE))
    }

    async update(params) {
        const dept = await  this.findById(params.id);
        if(dept) {
            return dept.update(params) .then(res => response_success(res, actions.UPDATE));
        }else {
            return response_error('待更新的不萌部存在')
        }

    }

    async destroy({id}) {
        const children = await this.findOne({parent_id: id});
        if(children) {
            return response_error('当前部门下有子部门， 无法删除！')
        }
        const dept = await this.findById(id);
        if(dept) {
            return dept.destroy().then( () => response_success(dept,actions.DESTROY))
        }
        return response_error('要删除的部门部存在');
    }

    async getLevel(parent_id) {
        const parent = idIsExit(parent_id) ? await this.findById(parent_id) : {parent_id};
        return calculateLevel(parent.level, parent_id)
    }
    findById = (id) => Dept.findById(id);
    findOne = (where) => Dept.findOne({where})
}

module.exports = new DeptService();