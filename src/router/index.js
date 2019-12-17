import Vue from 'vue';
import Router from 'vue-router';
import user from './user';

Vue.use(Router);
const router = new Router({
  routes: [].concat(user),
});
router.beforeEach((to, from, next) => {
  window.scroll(0, 0);
  return next();
});

export default router;
