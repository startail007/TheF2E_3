import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: { path: "/attractions" } },
  {
    path: "/attractions",
    component: () => import("@vue/pages/Attractions"),
  },
  {
    path: "/stay",
    component: () => import("@vue/pages/Stay"),
  },
  {
    path: "/transportation",
    component: () => import("@vue/pages/Transportation"),
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
