import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@vue/pages/Main"),
  },
];
const router = new VueRouter({
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  next();
});
router.afterEach((to, from) => {
  window.scroll(0, 0);
});

export default router;
