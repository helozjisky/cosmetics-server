'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index () {
    this.ctx.body = 'hi, egg';
  }
}

module.exports = ProductController;
