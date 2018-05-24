'use strict';

const Controller = require('egg').Controller;

const createRule = {
  username: {
    type: 'email',
  },
  password: {
    type: 'password',
    compare: 're-password',
  },
};

class UserController extends Controller {
  async index () {
    this.ctx.body = 'hi, egg';
  }

  async info () {
    const { ctx } = this;
    ctx.body = {
      name: `hello ${ctx.params.id}`,
    };
  }

  async create () {
    // 如果校验报错，会抛出异常
    const { ctx } = this;
    ctx.validate (createRule);
    ctx.body = ctx.request.body;
  }
}

module.exports = UserController;
