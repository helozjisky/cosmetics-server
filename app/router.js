'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);

  router.get('/user', controller.user.index);
  router.post('/user', controller.user.create);
  router.get('/user/:id', controller.user.info);

  router.get('/product', controller.product.index);
};
